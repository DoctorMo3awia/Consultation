import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, MessageCircle, CreditCard } from 'lucide-react';
import {
  QUESTIONS,
  TOTAL_STEPS,
  LINKS,
  PRICE_USD,
  scoreAnswers,
  labelFor,
  captureAttribution,
  getAttribution,
  track,
  buildWhatsAppMessage,
  whatsappUrl,
  deliverLead,
  takePrefill,
} from '../lib/funnel';
import '../styles/funnel.css';

const PHONE_RE = /^\+?[0-9\s-]{8,16}$/;

const Quiz = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(() => takePrefill());
  const [step, setStep] = useState(() => (Object.keys(answers).length > 0 ? 1 : 0));
  const [contact, setContact] = useState({ name: '', phone: '' });
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

  const multiSelected = useMemo(() => {
    if (!question || !question.multiple) return [];
    return Array.isArray(answers[question.id]) ? answers[question.id] : [];
  }, [answers, question]);

  const submitContact = (e) => {
    e.preventDefault();
    const errs = {};
    if (contact.name.trim().length < 2) errs.name = 'اكتب اسمك';
    if (!PHONE_RE.test(contact.phone.trim())) errs.phone = 'اكتب رقم واتساب صحيح مع رمز الدولة';
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const result = scoreAnswers(answers);
    const newLead = {
      name: contact.name.trim(),
      phone: contact.phone.trim(),
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
    track('Lead', { content_name: result.qualified ? 'qualified' : 'not_qualified', value: result.qualified ? PRICE_USD : 0, currency: 'USD' });
    deliverLead(newLead);
  };

  const openWhatsApp = () => {
    track('cta_whatsapp', { qualified: lead.qualified });
    window.open(whatsappUrl(buildWhatsAppMessage(lead)), '_blank', 'noopener');
  };

  const openPayment = () => {
    track('InitiateCheckout', { value: PRICE_USD, currency: 'USD' });
    window.open(LINKS.payment, '_blank', 'noopener');
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
          <Result lead={lead} onWhatsApp={openWhatsApp} onPay={openPayment} onHome={() => navigate('/')} />
        ) : isContactStep ? (
          <form onSubmit={submitContact} noValidate>
            <h2 className="f-quiz-q">آخر خطوة: وين نرسل لك النتيجة؟</h2>
            <p className="f-quiz-hint">نراجع إجاباتك شخصياً ونرد عليك على واتساب.</p>
            <div className="f-field">
              <label htmlFor="lead-name">الاسم</label>
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
              <input
                id="lead-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                dir="ltr"
                placeholder="+971 5X XXX XXXX"
                value={contact.phone}
                onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                data-testid="lead-phone"
              />
              <small>مع رمز الدولة</small>
              {errors.phone && <span className="err" role="alert">{errors.phone}</span>}
            </div>
            <button type="submit" className="f-btn f-btn-primary f-quiz-next" data-testid="lead-submit">
              شوف نتيجتي
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <p className="f-consent">بإرسال بياناتك توافق على تواصلنا معك عبر واتساب بخصوص البرنامج. لا نشارك بياناتك مع أي طرف ثالث.</p>
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

const Result = ({ lead, onWhatsApp, onPay, onHome }) => {
  const firstName = lead.name.split(' ')[0];

  if (lead.qualified) {
    return (
      <div className="f-result" data-testid="result-qualified">
        <h2 className="f-quiz-q">{firstName}، البرنامج مناسب لك</h2>
        <p className="f-lead">
          إجاباتك تطابق الحالات اللي نشتغل عليها ونحقق فيها أفضل النتائج. {lead.hot ? 'وبما إنك جاهز تبدأ خلال أسبوع، نقدر نحجز لك مكان في الدفعة القادمة.' : 'الخطوة التالية بسيطة.'}
        </p>
        <ul className="f-result-steps">
          <li><Check size={20} aria-hidden="true" /><span>أرسل إجاباتك للدكتور على واتساب بضغطة واحدة، الرسالة جاهزة.</span></li>
          <li><Check size={20} aria-hidden="true" /><span>يرد عليك الدكتور شخصياً ويشرح لك البرنامج ويجاوب أسئلتك.</span></li>
          <li><Check size={20} aria-hidden="true" /><span>إذا قررت تبدأ، تدفع وتستلم رابط التطبيق وموعد جلسة التقييم.</span></li>
        </ul>
        <button type="button" className="f-btn f-btn-whatsapp" onClick={onWhatsApp} data-testid="result-whatsapp">
          <MessageCircle size={22} aria-hidden="true" />
          أرسل إجاباتي للدكتور على واتساب
        </button>
        {LINKS.payment && (
          <>
            <p className="f-or">أو إذا كنت جاهز الآن</p>
            <button type="button" className="f-btn f-btn-secondary" onClick={onPay} data-testid="result-pay">
              <CreditCard size={20} aria-hidden="true" />
              سجّل وادفع مباشرة عبر {LINKS.paymentProvider} (${PRICE_USD})
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="f-result" data-testid="result-not-qualified">
      <h2 className="f-quiz-q">شكراً {firstName}، البرنامج الحالي مو الأنسب لك</h2>
      <p className="f-lead">
        برنامج الـ 90 يوم مصمم لحالات محددة تحتاج متابعة طبية مكثفة، وبناءً على إجاباتك ما نبي ناخذ وقتك أو فلوسك على شي ما يناسبك.
      </p>
      <ul className="f-result-steps">
        <li><Check size={20} aria-hidden="true" /><span>تابع المحتوى الطبي المجاني على إنستغرام وطبّق منه.</span></li>
        <li><Check size={20} aria-hidden="true" /><span>إذا تغيّر وضعك أو صار عندك استعداد، ارجع وأعد التقييم في أي وقت.</span></li>
        <li><Check size={20} aria-hidden="true" /><span>إذا عندك سؤال محدد، تقدر تراسلنا على واتساب ونوجهك.</span></li>
      </ul>
      <a className="f-btn f-btn-secondary" href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
        تابع المحتوى المجاني على إنستغرام
      </a>
      <button type="button" className="f-btn f-btn-whatsapp" onClick={onWhatsApp} data-testid="result-whatsapp">
        <MessageCircle size={22} aria-hidden="true" />
        عندي سؤال محدد
      </button>
      <button type="button" className="f-quiz-back" onClick={onHome}>العودة للصفحة الرئيسية</button>
    </div>
  );
};

export default Quiz;
