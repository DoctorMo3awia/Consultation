import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, CalendarCheck, Shield, ExternalLink } from 'lucide-react';
import {
  QUESTIONS,
  TOTAL_STEPS,
  LINKS,
  PRICE_FROM_AED,
  PRICE_LABEL,
  SHOW_PRICE_AFTER_QUALIFICATION,
  scoreAnswers,
  labelFor,
  captureAttribution,
  getAttribution,
  track,
  buildCalendlyUrl,
  deliverLead,
  COUNTRIES,
  normalizePhone,
  takePrefill,
} from '../lib/funnel';
import '../styles/funnel.css';

const Quiz = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(() => takePrefill());
  const [step, setStep] = useState(() => (Object.keys(answers).length > 0 ? 1 : 0));
  const [contact, setContact] = useState({ name: '', phone: '', country: '971' });
  const [errors, setErrors] = useState({});
  const [lead, setLead] = useState(null);

  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    captureAttribution();
    track('quiz_view');
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step, lead]);

  const question = QUESTIONS[step];
  const isContactStep = step === QUESTIONS.length;
  const progress = Math.round(((lead ? TOTAL_STEPS : step) / TOTAL_STEPS) * 100);

  const goNext = () => {
    track('quiz_step', { step: step + 1, question: question ? question.id : 'contact' });
    setStep((s) => s + 1);
  };

  const goBack = () => {
    if (step === 0) navigate('/');
    else setStep((s) => s - 1);
  };

  const pickSingle = (value) => {
    setAnswers((a) => ({ ...a, [question.id]: value }));
    // Let the selected state paint before advancing.
    window.setTimeout(goNext, 220);
  };

  const toggleMulti = (value) => {
    setAnswers((a) => {
      const current = Array.isArray(a[question.id]) ? a[question.id] : [];
      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
      return { ...a, [question.id]: next };
    });
  };

  const phonePreview = useMemo(
    () => (contact.phone.trim() ? normalizePhone(contact.phone, contact.country) : {}),
    [contact.phone, contact.country]
  );

  const multiSelected = useMemo(() => {
    if (!question || !question.multiple) return [];
    return Array.isArray(answers[question.id]) ? answers[question.id] : [];
  }, [answers, question]);

  const submitContact = (e) => {
    e.preventDefault();
    const errs = {};
    if (contact.name.trim().length < 2) errs.name = 'اكتب اسمك';
    const phone = normalizePhone(contact.phone, contact.country);
    if (phone.error) errs.phone = phone.error;
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const result = scoreAnswers(answers);
    const newLead = {
      name: contact.name.trim(),
      phone: phone.e164,
      answers,
      summary: Object.fromEntries(QUESTIONS.map((q) => [q.id, labelFor(q.id, answers[q.id])])),
      score: result.score,
      qualified: result.qualified,
      hot: result.hot,
      flags: result.flags,
      attribution: getAttribution(),
      page: window.location.href,
      submittedAt: new Date().toISOString(),
    };
    setLead(newLead);
    track('quiz_complete', { qualified: result.qualified, score: result.score });
    track('Lead', { content_name: result.qualified ? 'qualified' : 'not_qualified', value: result.qualified ? PRICE_FROM_AED : 0, currency: 'AED' });
    deliverLead(newLead);
  };

  const openCalendly = () => {
    track('Schedule', { qualified: true });
    window.open(buildCalendlyUrl(lead), '_blank', 'noopener');
  };

  return (
    <div className="funnel f-quiz" data-testid="quiz-page">
      <div className="f-quiz-top">
        <div className="f-brand">دكتور معاوية</div>
        {!lead && (
          <button type="button" className="f-quiz-back" onClick={goBack} aria-label="رجوع">
            <ArrowRight size={18} aria-hidden="true" />
            رجوع
          </button>
        )}
      </div>
      <div className="f-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
        <span style={{ width: `${progress}%` }} />
      </div>
      <p className="f-progress-label">
        {lead ? 'اكتمل التقييم' : `السؤال ${Math.min(step + 1, TOTAL_STEPS)} من ${TOTAL_STEPS}`}
      </p>

      <div className="f-quiz-body">
        {lead ? (
          <Result lead={lead} onCalendly={openCalendly} onHome={() => navigate('/')} />
        ) : isContactStep ? (
          <form onSubmit={submitContact} noValidate>
            <h2 className="f-quiz-q">آخر خطوة: وين نرسل لك النتيجة؟</h2>
            <p className="f-quiz-hint">بتشوف النتيجة فوراً، ولو البرنامج مناسب ليك بتحجز مكالمة تعريفية مع الفريق مباشرة.</p>
            <div className="f-field">
              <label htmlFor="lead-name">اسمك</label>
              <input
                id="lead-name"
                type="text"
                autoComplete="name"
                value={contact.name}
                onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                data-testid="lead-name"
              />
              {errors.name && <span className="err" role="alert">{errors.name}</span>}
            </div>
            <div className="f-field">
              <label htmlFor="lead-phone">رقم الواتساب</label>
              <div className="f-phone">
                <select
                  id="lead-country"
                  aria-label="الدولة"
                  value={contact.country}
                  onChange={(e) => { const v = e.target.value; setContact((c) => ({ ...c, country: v })); setErrors((er) => ({ ...er, phone: undefined })); }}
                  data-testid="lead-country"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.code || 'other'} value={c.code}>{c.name}{c.code ? ` +${c.code}` : ''}</option>
                  ))}
                </select>
                <input
                  id="lead-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  dir="ltr"
                  placeholder={contact.country === '971' || contact.country === '966' ? '5X XXX XXXX' : 'رقم الجوال'}
                  value={contact.phone}
                  onChange={(e) => { const v = e.target.value; setContact((c) => ({ ...c, phone: v })); setErrors((er) => ({ ...er, phone: undefined })); }}
                  data-testid="lead-phone"
                />
              </div>
              {phonePreview.e164 && !errors.phone && <small className="ok">بنتواصل معك على: <span dir="ltr">{phonePreview.display}</span></small>}
              {!phonePreview.e164 && !errors.phone && <small>{(COUNTRIES.find((c) => c.code === contact.country) || {}).hint}</small>}
              {errors.phone && <span className="err" role="alert">{errors.phone}</span>}
            </div>
            <button type="submit" className="f-btn f-btn-primary f-btn-block f-quiz-next" data-testid="lead-submit">
              شوف نتيجتي
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <p className="f-consent">بإرسال بياناتك بتوافق إننا نتواصل معك بخصوص البرنامج. ما بنشارك بياناتك مع أي طرف تالت.</p>
          </form>
        ) : (
          <div key={question.id}>
            <h2 className="f-quiz-q">{question.title}</h2>
            {question.hint && <p className="f-quiz-hint">{question.hint}</p>}
            <div className="f-options" role={question.multiple ? 'group' : 'radiogroup'} aria-label={question.title}>
              {question.options.map((opt) => {
                const selected = question.multiple ? multiSelected.includes(opt.value) : answers[question.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role={question.multiple ? 'checkbox' : 'radio'}
                    aria-checked={selected}
                    className={`f-option ${selected ? 'selected' : ''}`}
                    onClick={() => (question.multiple ? toggleMulti(opt.value) : pickSingle(opt.value))}
                    data-testid={`option-${question.id}-${opt.value}`}
                  >
                    <span>{opt.label}</span>
                    <span className="box" aria-hidden="true">{selected && <Check size={16} />}</span>
                  </button>
                );
              })}
            </div>
            {question.multiple && (
              <button type="button" className="f-btn f-btn-primary f-quiz-next" onClick={goNext} disabled={multiSelected.length === 0} data-testid="quiz-next">
                التالي
                <ArrowLeft size={20} aria-hidden="true" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Result = ({ lead, onCalendly, onHome }) => {
  const firstName = lead.name.split(' ')[0];
  // 'loading' until Calendly's frame posts a message saying it has drawn the calendar,
  // 'failed' when nothing arrives in time (the frame is blocked): then only the button stays.
  const [calendlyState, setCalendlyState] = useState('loading');
  const calendlyRef = useRef(null);

  useEffect(() => {
    const onMessage = (e) => {
      if (e.origin !== 'https://calendly.com' || !e.data || typeof e.data.event !== 'string') return;
      if (e.data.event.indexOf('calendly.') !== 0) return;
      if (e.data.event === 'calendly.page_height' && parseInt((e.data.payload || {}).height, 10) < 200) return;
      setCalendlyState('ready');
      if (e.data.event === 'calendly.event_scheduled') {
        track('Schedule', { source: 'embed' });
        track('calendly_booked');
      }
    };
    window.addEventListener('message', onMessage);
    // Calendly draws only once its frame is on screen, so the give-up timer starts when it becomes visible.
    let giveUp = null;
    const el = calendlyRef.current;
    const seen = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && giveUp == null) {
        giveUp = window.setTimeout(() => setCalendlyState((st) => (st === 'ready' ? st : 'failed')), 15000);
        seen.disconnect();
      }
    }, { threshold: 0.2 });
    if (el) seen.observe(el);
    return () => {
      window.removeEventListener('message', onMessage);
      if (giveUp != null) window.clearTimeout(giveUp);
      seen.disconnect();
    };
  }, []);

  if (lead.qualified) {
    return (
      <div className="f-result" data-testid="result-qualified">
        <h2 className="f-quiz-q">{firstName}، البرنامج مناسب ليك</h2>
        <p className="f-lead">
          إجاباتك بتطابق الحالات اللي بشتغل عليها وبنحقق فيها أفضل النتائج. أغلب اللي زيك بيكون السبب خلل هرموني أيضي بيبان في التحاليل لمن نقراها صح. {lead.hot ? 'وبما إنك جاهز تبدأ خلال أسبوع، بنقدر نحجز ليك مكان في الدفعة الجاية.' : 'الخطوة الجاية بسيطة: احجز مكالمة تعريفية قصيرة مع الفريق.'}
        </p>
        <div className="f-price-card" data-testid="result-stack">
          <p className="f-price-kicker">برنامج لمدة 90 يوم بإشراف دكتور معاوية، كل خطوة فيه مبنية على الأدلة العلمية</p>
          <ul className="f-stack">
            {['تحليل وظيفي لتحاليلك بالمدى الوظيفي', 'خطة تغذية علاجية مخصصة', 'بروتوكول نمط حياة ونوم', 'بروتوكول مكملات', 'متابعة طبية كل أسبوعين لمدة 90 يوم', 'متابعة واتساب طول البرنامج'].map((item) => (
              <li key={item}><Check size={18} aria-hidden="true" /><span>{item}</span>{SHOW_PRICE_AFTER_QUALIFICATION && <s />}</li>
            ))}
          </ul>
          {SHOW_PRICE_AFTER_QUALIFICATION && <p className="amount">{PRICE_LABEL}</p>}
          <p className="f-price-note">التفاصيل والتكلفة بنشرحها ليك في المكالمة · ضمان استرجاع 30 يوم · عدد محدود من الأماكن الشهر دا</p>
        </div>
        <ul className="f-result-steps">
          <li><Check size={20} aria-hidden="true" /><span>اختار وقت يناسبك من التقويم تحت واحجز مكالمتك التعريفية مع فريق دكتور معاوية.</span></li>
          <li><Check size={20} aria-hidden="true" /><span>في المكالمة بنراجع معك إجاباتك، بنجاوب أسئلتك، وبنحدد ليك البداية.</span></li>
          <li><Check size={20} aria-hidden="true" /><span>لمن تقرر تبدأ، بتعمل تحاليلك في أقرب مختبر وبنبدأ التحليل والخطة.</span></li>
        </ul>
        <button type="button" className="f-btn f-btn-primary f-btn-block" onClick={onCalendly} data-testid="result-calendly-btn">
          <CalendarCheck size={20} aria-hidden="true" />
          احجز مكالمتك التعريفية
          <ExternalLink size={16} aria-hidden="true" />
        </button>
        {calendlyState !== 'failed' && <p className="f-or">أو اختار وقتك مباشرة من هنا</p>}
        <div className={`f-calendly ${calendlyState}`} data-testid="result-calendly" ref={calendlyRef}>
          <iframe
            title="حجز مكالمة تعريفية مع فريق دكتور معاوية"
            src={buildCalendlyUrl(lead, true)}
            onLoad={() => track('calendly_view')}
          />
          {calendlyState === 'loading' && <p className="note">جاري تحميل التقويم...</p>}
        </div>
        <p className="f-trust"><Shield size={13} aria-hidden="true" /><span>مكالمة قصيرة مع الفريق · بدون بيع مباشر · لو البرنامج مش مناسب ليك بنقولها بوضوح</span></p>
      </div>
    );
  }

  return (
    <div className="f-result" data-testid="result-not-qualified">
      <h2 className="f-quiz-q">شكراً {firstName}، البرنامج الحالي مش الأنسب ليك</h2>
      <p className="f-lead">
        برنامج الـ 90 يوم مش لكل حد. هو مصمم لحالات محددة محتاجة متابعة طبية مكثفة، وبناءً على إجاباتك ما أريد آخد وقتك أو فلوسك على حاجة مش مناسبة ليك.
      </p>
      <ul className="f-result-steps">
        <li><Check size={20} aria-hidden="true" /><span>تابع المحتوى الطبي المجاني على إنستغرام وطبّق منه، فيه كتير بيفيدك.</span></li>
        <li><Check size={20} aria-hidden="true" /><span>لمن يتغير وضعك أو تبقى جاهز، ارجع واعمل التقييم تاني في أي وقت.</span></li>
      </ul>
      <a className="f-btn f-btn-secondary f-btn-block" href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
        تابع المحتوى المجاني على إنستغرام
      </a>
      <button type="button" className="f-quiz-back" onClick={onHome}>العودة للصفحة الرئيسية</button>
    </div>
  );
};

export default Quiz;
