import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { CheckCircle2, XCircle, Star, Shield, Lock, FileText, TrendingUp, Clock, MessageSquare, Utensils, Moon, Pill, Stethoscope, ArrowLeft, Check } from 'lucide-react';
import { QUESTIONS, TOTAL_STEPS, captureAttribution, track, setPrefill } from '../lib/funnel';
import '../styles/funnel.css';

const DOCTOR_IMG = `${process.env.PUBLIC_URL}/doctor.jpg`;

const features = ['طاقة أعلى وتركيز أوضح', 'نوم أفضل وتحسن ملحوظ في شكل الجسم', 'خطة مخصصة لك تتناسب مع طبيعة عملك'];

// Each symptom is paired with the mechanism behind it and what the program does about it.
const symptoms = [
  { pain: 'تعاني من ضعف التركيز والطاقة رغم النوم الكافي', fix: 'غالباً السبب في الهرمونات أو الحديد أو مقاومة الإنسولين، وكلها حاجات التحاليل العادية بتقول عنها "طبيعية". بنقراها بالمدى الوظيفي ونلقى السبب.' },
  { pain: 'زيادة الوزن والدهون الحشوية رغم محاولات التمرين', fix: 'الدهون الحشوية مش مشكلة شكل بس، دي طريقها للكبد الدهني ومقاومة الإنسولين. بنعالج السبب الأيضي مش الأعراض.' },
  { pain: 'نوم متقطع أو غير مريح يؤثر على أدائك اليومي', fix: 'النوم هو المصنع اللي بيصنع هرموناتك. مصنع تعبان، منتج تعبان. بنضبط الـ Circadian Rhythm ونمط يومك بما يناسب شغلك.' },
  { pain: 'تشعر بالتوتر المستمر وتقلبات المزاج تؤثر على قراراتك', fix: 'الكورتيزول العالي وقلة النوم بيأثروا على التستوستيرون والمزاج والقرارات. بروتوكول نمط حياة مبني على الأدلة، وبنتابع الأثر.' },
  { pain: 'قلق حول صحتك ولا تعرف أي فحوصات مهمة أو كيف تحسنها', fix: 'بنحدد ليك التحاليل اللازمة بالضبط، مش بس السكر الصايم والكلسترول، وبنقراها بالمدى الوظيفي والتقليدي جنب بعض.' },
  { pain: 'تريد خطة صحية بسيطة تعمل رغم ضغوط طبيعة عملك', fix: 'الخطة مبنية على يومك: اجتماعات، سفر، مطاعم، ومجالس. مش حرمان، هندسة أكل.' },
];

const steps = [
  { icon: FileText, when: 'الأسبوع الأول', title: 'تحاليلك', text: 'بنحدد ليك قائمة التحاليل المناسبة لحالتك، وبتعملها في أي مختبر قريب منك.' },
  { icon: TrendingUp, when: 'بعد التحاليل', title: 'التحليل الوظيفي والخطة', text: 'بقرا تحاليلك بالمدى الوظيفي والتقليدي جنب بعض، بنلقى السبب الجذري، وبنبني خطة تغذية علاجية وبروتوكول نمط حياة ونوم ومكملات، كلها مبنية على الأدلة.' },
  { icon: Clock, when: 'طوال 90 يوم', title: 'المتابعة الطبية', text: 'متابعة طبية كل أسبوعين بنعدّل فيها الخطة حسب استجابة جسمك، ومتابعة واتساب بينهم لأي سؤال.' },
];

const deliverables = [
  { icon: FileText, title: 'تحليل وظيفي لتحاليلك', text: 'قراءة تحاليلك بالمدى الوظيفي جنب المدى التقليدي، عشان نلقى الخلل قبل ما يبقى مرض.' },
  { icon: Utensils, title: 'خطة تغذية علاجية مخصصة', text: 'أكل بيناسب شغلك وسفرك ومطاعمك، مبني على تحاليلك مش على قالب جاهز.' },
  { icon: Moon, title: 'بروتوكول نمط حياة ونوم', text: 'نوم، كافيين، حركة، وإدارة التوتر بما يناسب يومك الفعلي.' },
  { icon: Pill, title: 'بروتوكول مكملات', text: 'بس اللي تحاليلك بتقول إنك محتاجه، وبالجرعة الصح. مش قائمة مكملات عشوائية.' },
  { icon: Stethoscope, title: 'متابعة طبية كل أسبوعين', text: 'بنراجع التقدم وبنعدّل الخطة حسب استجابة جسمك طول الـ 90 يوم.' },
  { icon: MessageSquare, title: 'متابعة واتساب طول البرنامج', text: 'أي سؤال أو عقبة بين المتابعات، بجاوبك وبوجهك.' },
];

const testimonials = [
  { name: 'عبدالرحمن', place: 'الإمارات', text: 'الحمد الله أنا وصلت لأفضل مستوى لياقة وصحة من ايام المدرسة بفضل اللّٰه ثم مختبر العقل الي كان مو بس نظام غذائي وتمرين بس, غير أسلوب حياتي كامل للأفضل الحمدالله مشكورين يادكتور ومستمرين ان شاءالله', result: 'النتيجة: أفضل مستوى لياقة في حياته خلال 8 أسابيع' },
  { name: 'ماجد', place: 'الإمارات', text: 'بخصوص فحوصات الدم والضغط الحمدلله صارت طبيعية والكلسترول حتى نزل اكثر من ما الدكاترة توقعوا وصارت الفحوصات كلها ممتازة و استغنيت عن فكرة اني ابدا باي حبوب ضغط وكلسترول شكرا لك يادكتور', result: 'النتيجة: الضغط والكلسترول رجعوا للمعدل الطبيعي في التحاليل' },
  { name: 'عمر', place: 'السعودية', text: 'شكرا يادكتور معاوية يااخي، بكرة ان شاء الله اخر يوم تنشيف. الفضل ليك ياكوتش اجتهدت معانا ووصلنا للشكل الخرافي دا. اكتر شي تعلمته انه مهما كانت ظروفك صعبة بتقدر تحقق اهدافك تعلمت منك الكثير يادكتورماقصرت', result: 'النتيجة: تغير شكل الجسم بالكامل رغم جدول العمل الضاغط' },
  { name: 'راشد', place: 'الإمارات', text: 'اليوم كملت سنة كاملة مع الدكتور معاوية، والنتيجة ما كانت بس في الجسم، الي الناس ما يتكلمون عنه هو الصلابة الذهنية والنفسية بعد. تفصيل على كيفك، متابعة من القلب، والعقل السليم في الجسم السليم.', result: 'النتيجة: تغيير جذري في الجسم والعقلية خلال سنة كاملة' },
];

const doctorFacts = [
  { big: 'باطنية', small: 'طبيب باطنية مقيم بيمارس الطب الوظيفي' },
  { big: '1:1', small: 'الطبيب نفسه بيتابعك، مش فريق' },
  { big: '90 يوم', small: 'متابعة كل أسبوعين، مش جلسة واحدة' },
  { big: 'أونلاين', small: 'من أي مكان في الإمارات والخليج' },
];

const fitYes = [
  'رجل بين 28 و 48 سنة في الإمارات أو الخليج',
  'عندك شغل أو مسؤوليات ضاغطة وما عندك وقت للتجارب',
  'جربت دايت أو جيم أو مدربين وما استمرت النتيجة',
  'جاهز تلتزم 90 يوم بخطة واضحة وتعديل مستمر',
];
const fitNo = [
  'بتدور على حبة سحرية أو نتيجة بدون التزام',
  'عندك حالة طبية طارئة محتاجة علاج مباشر',
  'مش قادر تستثمر وقت وفلوس في صحتك هسي',
];

const faqs = [
  { q: 'ماذا أتوقع من البرنامج؟', a: 'برنامج متابعة 1:1 مع طبيب باطنية مقيم لمدة 90 يوم. بنبدأ بتحاليلك، بقراها بالمدى الوظيفي ونلقى السبب الجذري، وبنبني خطة تغذية علاجية وبروتوكول نمط حياة ونوم ومكملات، كلها مبنية على الأدلة. بعدها متابعة طبية كل أسبوعين ومتابعة واتساب طول البرنامج.' },
  { q: 'هل أحتاج تحاليل مخبرية؟', a: 'أيوة. البرنامج كله مبني على تحاليلك. بنحدد ليك القائمة المناسبة لحالتك وبتعملها في أي مختبر قريب منك، ولو عندك تحاليل حديثة بنبدأ منها.' },
  { q: 'تحاليلي "طبيعية"، ليش محتاج البرنامج؟', a: '"طبيعي" في المختبر معناه إنك مش مريض هسي، مش إنك في أفضل حال. المدى الوظيفي أضيق، وبيبين الخلل قبل ما يبقى مرض. دي الحالة اللي بشوفها كتير: تحاليل "طبيعية" وشخص تعبان.' },
  { q: 'هل هذا تشخيص طبي؟', a: 'هذه خدمة تعليم صحي وتوجيه وتفسير للتحاليل، وليست بديلاً عن التشخيص أو العلاج الطبي المباشر. ما بنطلب من أي حد يوقف أو يقلل علاج موصوف ليه. إذا كان لديك أعراض خطيرة (ألم صدر، ضيق تنفس شديد، إغماء)، يجب عليك مراجعة طبيب فوراً.' },
  { q: 'كم تكلفة البرنامج وكيف يتم الدفع؟', a: 'بنوضح التفاصيل والتكلفة بعد التقييم القصير، لأن البرنامج مش مناسب لكل حد وأريد أتأكد الأول إنه بيناسبك. بعد التقييم بتحجز مكالمة تعريفية قصيرة مع الفريق وبنشرح ليك كل التفاصيل.' },
  { q: 'ما هو ضمان استرداد الأموال؟', a: 'ضمان استرجاع 30 يوم. لو التزمت بالبرنامج وما حسيت بفايدة خلال أول 30 يوم، بنرجع ليك المبلغ.' },
];

const firstQuestion = QUESTIONS[0];

const Landing = () => {
  const navigate = useNavigate();
  const [stickyVisible, setStickyVisible] = useState(false);
  const [picked, setPicked] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    document.documentElement.classList.add('js');
    captureAttribution();
    track('ViewContent', { content_name: 'landing' });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll('.f-reveal');
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            reveal.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    targets.forEach((el) => reveal.observe(el));
    const fallback = window.setTimeout(() => targets.forEach((el) => el.classList.add('in')), 2500);

    const hero = heroRef.current;
    const sticky = new IntersectionObserver(([entry]) => setStickyVisible(!entry.isIntersecting), { threshold: 0 });
    if (hero) sticky.observe(hero);

    return () => {
      window.clearTimeout(fallback);
      reveal.disconnect();
      sticky.disconnect();
    };
  }, []);

  const startQuiz = (source) => {
    track('quiz_start', { source });
    navigate('/start');
  };

  const pickFirst = (value) => {
    setPicked(value);
    setPrefill({ [firstQuestion.id]: value });
    track('quiz_start', { source: 'hero-inline', [firstQuestion.id]: value });
    window.setTimeout(() => navigate('/start'), 220);
  };

  const cta = (source, label = 'ابدأ التقييم المجاني') => (
    <button type="button" className="f-btn f-btn-primary" onClick={() => startQuiz(source)} data-testid={`cta-${source}`}>
      {label}
      <ArrowLeft size={18} aria-hidden="true" />
    </button>
  );

  const trustLine = (
    <p className="f-trust">
      <Lock size={13} aria-hidden="true" />
      <span>سري تماماً · بدون التزام · عدد محدود من الأماكن الشهر دا</span>
    </p>
  );

  const sectionHead = (title, sub) => (
    <div className="f-section-head">
      <div className="f-divider" />
      <h2 className="heading-1">{title}</h2>
      {sub && <p className="body-large">{sub}</p>}
    </div>
  );

  return (
    <div className="funnel" data-testid="landing-page">
      <header className="header-nav">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white' }}>دكتور معاوية</div>
        </div>
      </header>

      <main>
        <section className="hero-section" ref={heroRef} data-testid="hero-section">
          <div className="hero-content">
            <div className="hero-announcement">
              <Shield size={14} />
              <span>طبيب رجال الأعمال · عدد محدود من الأماكن الشهر دا</span>
            </div>

            <div className="f-hero-glow">
              <img src={DOCTOR_IMG} alt="دكتور معاوية، طبيب باطنية مقيم" width="640" height="640" fetchpriority="high" decoding="async" data-testid="doctor-image" />
            </div>
            <p style={{ fontWeight: 700, color: 'white', fontSize: '1.15rem' }}>د. معاوية</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>طبيب باطنية مقيم · طب وظيفي</p>

            <h1 className="heading-hero" style={{ color: 'white', maxWidth: '800px', margin: '0 auto 1.25rem' }}>
              استعد طاقتك، صفاء ذهنك، وشكل جسمك خلال 90 يوم بخطة طبية مدروسة
            </h1>
            <p className="body-large" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
              برنامج طبي 1:1 لمدة 90 يوم بإشراف دكتور معاوية، مبني على تحاليلك، لرجال الأعمال والمشغولين في الإمارات والخليج.
              جاوب على {TOTAL_STEPS - 1} أسئلة قصيرة وبقول ليك بصراحة البرنامج مناسب ليك ولا لا.
            </p>

            <div className="f-hero-features">
              {features.map((f) => (
                <span key={f}><CheckCircle2 size={18} strokeWidth={2.5} />{f}</span>
              ))}
            </div>

            <div className="f-inline-quiz" data-testid="hero-quiz">
              <p className="f-inline-quiz-step">الخطوة 1 من {TOTAL_STEPS} · اختار إجابة واحدة</p>
              <h2 className="f-inline-quiz-q">{firstQuestion.title}</h2>
              <div className="f-options" role="radiogroup" aria-label={firstQuestion.title}>
                {firstQuestion.options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    role="radio"
                    aria-checked={picked === opt.value}
                    className={`f-option ${picked === opt.value ? 'selected' : ''}`}
                    onClick={() => pickFirst(opt.value)}
                    data-testid={`hero-option-${opt.value}`}
                  >
                    <span>{opt.label}</span>
                    <span className="box" aria-hidden="true">{picked === opt.value && <Check size={14} />}</span>
                  </button>
                ))}
              </div>
              {trustLine}
            </div>

            <div className="f-rating" aria-label="تقييم 4.9 من 5">
              <span className="stars" aria-hidden="true">{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}</span>
              <span>معدل رضا 4.9/5 من العشرات من العملاء</span>
            </div>
          </div>
        </section>

        <section className="f-section deeper f-reveal" data-testid="pain-points-section">
          <div className="f-wrap">
            {sectionHead('مشكلتك مش في الالتزام لكن في غياب تشخيص صحيح لحالتك وبرنامج مبني خصيصاً لك', 'لو بتحس بواحدة من دي، دا بالضبط اللي بشتغل عليه، ودا اللي بيحصل في جسمك:')}
            <ul className="f-grid-2">
              {symptoms.map((s) => (
                <li key={s.pain} className="f-card f-pair">
                  <p className="pain"><CheckCircle2 size={22} aria-hidden="true" /><span>{s.pain}</span></p>
                  <p className="fix">{s.fix}</p>
                </li>
              ))}
            </ul>
            <div className="f-center" style={{ marginTop: '3rem' }}>
              {cta('pain', 'اعرف لو كنت مؤهل للبرنامج')}
              <div>{trustLine}</div>
            </div>
          </div>
        </section>

        <section className="f-section lighter f-reveal" data-testid="program-details-section">
          <div className="f-wrap">
            {sectionHead('كيف بيشتغل البرنامج', 'تلات مراحل لمدة 90 يوم، كلها بإشراف دكتور معاوية من أول يوم لآخر يوم.')}
            <ol className="f-grid-3">
              {steps.map((s) => (
                <li key={s.title} className="f-card top">
                  <div className="f-icon"><s.icon size={24} /></div>
                  <p style={{ color: '#8FA3FF', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>{s.when}</p>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <p className="body-large f-center" style={{ color: 'rgba(255,255,255,0.75)', marginTop: '2.5rem' }}>
              أغلب دا قابل للعكس هسي، وبعد 5 سنين بيبقى أصعب بكتير. بنهاية الـ 90 يوم عندك خطة فاهمها وبتقدر تمشي عليها سنة بعد سنة، مبنية على جسمك انت.
            </p>
          </div>
        </section>

        <section className="f-section deeper f-reveal" data-testid="deliverables-section">
          <div className="f-wrap">
            {sectionHead('برنامج صحة صمم خصيصاً لك', 'كل خطوة فيه مبنية على الأدلة العلمية، وعلى تحاليلك انت.')}
            <ul className="f-grid-3">
              {deliverables.map((d) => (
                <li key={d.title} className="f-card top">
                  <div className="f-icon"><d.icon size={24} /></div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="f-section lighter f-reveal" data-testid="testimonials-section">
          <div className="f-wrap">
            {sectionHead('آراء العملاء', 'رجال أعمال وموظفين أصحاب مسؤوليات عالية حولوا صحتهم وأدائهم')}
            <div className="f-grid-2">
              {testimonials.map((t) => (
                <article key={t.name} className="f-card top f-quote">
                  <span className="stars" aria-hidden="true">{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}</span>
                  <blockquote>"{t.text}"</blockquote>
                  <p className="result">✅ {t.result}</p>
                  <footer><strong>{t.name}</strong><span>{t.place}</span></footer>
                </article>
              ))}
            </div>
            <div className="f-center" style={{ marginTop: '3rem' }}>
              {cta('testimonials', 'شوف البرنامج مناسب ليك ولا لا')}
            </div>
          </div>
        </section>

        <section className="f-section deeper f-reveal" data-testid="doctor-section">
          <div className="f-wrap f-doctor">
            <figure className="f-doctor-figure">
              <img src={DOCTOR_IMG} alt="دكتور معاوية" width="640" height="640" loading="lazy" decoding="async" />
            </figure>
            <div>
              <h2 className="heading-1">تعرّف على طبيبك</h2>
              <p className="body-large">
                أنا د. محمد معاوية، طبيب باطنية مقيم بمارس الطب الوظيفي أونلاين. بقرا تحاليلك بالمدى الوظيفي، بدوّر على السبب الجذري، وببني ليك خطة بتناسب شغلك وحياتك عشان تتخلص وتحمي نفسك من الأمراض المزمنة.
              </p>
              <p className="body-large" style={{ marginTop: '1rem' }}>
                بدأت من إصابة رباط صليبي وأنا بلعب لفريق الجامعة، وبعدها وصلت 105 كيلو تحت ضغط المناوبات والدراسة. تعلمت العلم وطبقته على نفسي، واشتغلت طبيب لفريق Alpha Athlete. وحالياً أثناء عملي في المستشفى بشوف كل أسبوع رجال ناجحين خسروا صحتهم وهم بيبنوا شغلهم. عشان كدا بنيت البرنامج دا.
              </p>
              <p className="body-large" style={{ marginTop: '1rem', color: '#fff', fontWeight: 700 }}>
                أساعدك تفهم جسمك من تحاليلك وتبني خطة تناسب حياتك، حتى تحصل على طاقة وتركيز يدعمان نجاحك.
              </p>
              <ul className="f-facts">
                {doctorFacts.map((f) => <li key={f.small}><strong>{f.big}</strong><span>{f.small}</span></li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="f-section lighter f-reveal" data-testid="target-audience-section">
          <div className="f-wrap">
            {sectionHead('البرنامج مش لكل حد', 'بقبل عدد محدود كل شهر حسب جدولي في المستشفى، عشان أقدر أتابع كل مشترك بنفسي. التقييم بيحدد لو كنت مناسب، ولو مش مناسب بقولها ليك بوضوح.')}
            <div className="f-grid-2">
              <div className="f-card top f-fit-col yes">
                <h3>البرنامج ليك لو</h3>
                <ul>{fitYes.map((i) => <li key={i}><CheckCircle2 size={20} aria-hidden="true" /><span>{i}</span></li>)}</ul>
              </div>
              <div className="f-card f-fit-col no">
                <h3>مش ليك لو</h3>
                <ul>{fitNo.map((i) => <li key={i}><XCircle size={20} aria-hidden="true" /><span>{i}</span></li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <section className="f-section deeper f-reveal" data-testid="faq-section">
          <div className="f-wrap">
            {sectionHead('الأسئلة الشائعة')}
            <div className="f-faq">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, idx) => (
                  <AccordionItem key={f.q} value={`item-${idx}`} style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                    <AccordionTrigger className="trigger">{f.q}</AccordionTrigger>
                    <AccordionContent className="content">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="hero-section f-reveal" style={{ minHeight: '60vh' }} data-testid="final-cta-section">
          <div className="hero-content">
            <h2 className="heading-hero" style={{ color: 'white', marginBottom: '1rem' }}>جاهز للخطوة التالية؟</h2>
            <p className="body-large" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>
              تقييم قصير بياخد دقيقة. لو البرنامج مناسب ليك بتحجز مكالمة تعريفية قصيرة مع الفريق وبنشرح ليك التفاصيل والخطوة الجاية.
              ولو مش مناسب، بقولها ليك بصراحة وبوجهك للبديل الأنسب.
            </p>
            {cta('final')}
            <div>{trustLine}</div>
            <p className="f-guarantee">
              <Shield size={16} aria-hidden="true" />
              <span>ضمان استرجاع 30 يوم · عدد محدود من الأماكن الشهر دا</span>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer-executive">
        <div className="container">
          <p className="body-small" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>
            هذه خدمة تعليم صحي وتوجيه وتفسير للتحاليل، وليست بديلاً عن التشخيص أو العلاج الطبي المباشر. لا توقف أو تقلل أي علاج موصوف لك دون مراجعة طبيبك.
          </p>
          <p className="caption" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>
            <Link to="/privacy" style={{ color: 'rgba(255,255,255,0.6)' }}>سياسة الخصوصية</Link>
          </p>
          <p className="caption" style={{ color: 'rgba(255,255,255,0.4)' }}>© {new Date().getFullYear()} دكتور معاوية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>

      <div className={`f-sticky ${stickyVisible ? 'show' : ''}`} aria-hidden={!stickyVisible}>
        <button type="button" className="f-btn f-btn-primary" onClick={() => startQuiz('sticky')} tabIndex={stickyVisible ? 0 : -1}>
          ابدأ التقييم المجاني
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Landing;
