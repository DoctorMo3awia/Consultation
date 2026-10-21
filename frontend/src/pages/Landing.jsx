import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { CheckCircle2, XCircle, Star, Shield, Lock, Video, FileText, TrendingUp, Clock, MessageSquare, Smartphone, ArrowLeft, Check } from 'lucide-react';
import { QUESTIONS, TOTAL_STEPS, captureAttribution, track, setPrefill } from '../lib/funnel';
import '../styles/funnel.css';

const DOCTOR_IMG = 'https://customer-assets.emergentagent.com/job_gulf-exec-wellness/artifacts/6c16u5hp_Untitled.png';

const features = ['طاقة أعلى وتركيز أوضح', 'نوم أفضل وتحسن ملحوظ في شكل الجسم', 'خطة مخصصة لك تتناسب مع طبيعة عملك'];

// Each symptom is paired with what the program does about it.
const symptoms = [
  { pain: 'تعاني من ضعف التركيز والطاقة رغم النوم الكافي', fix: 'نبحث عن السبب في التحاليل والنوم والتغذية، ونبني بروتوكول طاقة وتركيز مبني على أرقامك.' },
  { pain: 'زيادة الوزن والدهون الحشوية رغم محاولات التمرين', fix: 'نعالج الهرمونات والنوم والأكل كحزمة واحدة، بدل حمية جديدة تفشل بعد شهر.' },
  { pain: 'نوم متقطع أو غير مريح يؤثر على أدائك اليومي', fix: 'نظام نوم عملي يناسب جدولك وسفرك، مع تعديل الكافيين والتوقيت.' },
  { pain: 'تشعر بالتوتر المستمر وتقلبات المزاج تؤثر على قراراتك', fix: 'بروتوكول استشفاء ومزاج، ونراقب أثره على طاقتك خلال البرنامج.' },
  { pain: 'قلق حول صحتك ولا تعرف أي فحوصات مهمة أو كيف تحسنها', fix: 'نحدد التحاليل اللازمة لحالتك، نفسرها لك بوضوح، ونتابع تغيرها.' },
  { pain: 'تريد خطة صحية بسيطة تعمل رغم ضغوط طبيعة عملك', fix: 'كل شي مصمم حول يومك: اجتماعات، مطاعم، سفر، ومجالس.' },
];

const steps = [
  { icon: Video, when: 'الأسبوع الأول', title: 'تقييم طبي شامل', text: 'جلسة عبر Google Meet مع طبيب باطنية مقيم. نفهم أعراضك ونمط حياتك، ونحدد التحاليل اللازمة لحالتك بدل التخمين.' },
  { icon: TrendingUp, when: 'بعد التقييم مباشرة', title: 'خطة مبنية عليك', text: 'نوم، تغذية في البيت والمطاعم والسفر، تمارين بأقل جرعة فعالة، مكملات عند الحاجة، وبروتوكول للمزاج والتركيز.' },
  { icon: Clock, when: 'طوال 90 يوم', title: 'متابعة وتعديل مستمر', text: 'نراقب نتائجك ونعدّل الخطة حسب استجابة جسمك، مع تواصل مباشر على واتساب لأي سؤال.' },
];

const deliverables = [
  { icon: Video, title: 'تقييم شامل وبناء خطة مخصصة لك', text: 'جلسة تقييم أولية شاملة عبر Google Meet مع طبيب باطنية مقيم، نفهم حالتك ونبني خطة طبية متكاملة مصممة خصيصاً لك.' },
  { icon: FileText, title: 'تحليل شامل للتحاليل المخبرية', text: 'بناءً على التقييم، نحدد التحاليل اللازمة لحالتك ونتابع التغيرات طوال الـ 3 أشهر.' },
  { icon: TrendingUp, title: 'خطة طبية مخصصة لك متكاملة', text: 'استراتيجية الاستشفاء، دليل للتغذية العلاجية، قواعد للتغذية في المطاعم، خطة تمارين بأقل جرعة فعالة، بروتوكول تحسين المزاج والتركيز.' },
  { icon: Clock, title: 'متابعة تقدمك لمدة 3 أشهر كاملة', text: 'هذا الفرق الحقيقي، مش بس خطة وخلاص. نتابع تقدمك، نراقب النتائج، ونعدّل الخطة حسب استجابة جسمك.' },
  { icon: MessageSquare, title: 'دعم مستمر عبر واتساب طوال البرنامج', text: 'تواصل مباشر مع دكتور معاوية لمدة 3 أشهر، أي سؤال أو استفسار نجاوبك ونوجهك.' },
  { icon: Smartphone, title: 'تطبيق متابعة خاص', text: 'تسجّل تقدمك وتشوف خطتك في مكان واحد.' },
];

const testimonials = [
  { name: 'عبدالرحمن', place: 'الإمارات', text: 'الحمد الله أنا وصلت لأفضل مستوى لياقة وصحة من ايام المدرسة بفضل اللّٰه ثم مختبر العقل الي كان مو بس نظام غذائي وتمرين بس, غير أسلوب حياتي كامل للأفضل الحمدالله مشكورين يادكتور ومستمرين ان شاءالله', result: 'النتيجة: أفضل مستوى لياقة في حياته خلال 8 أسابيع' },
  { name: 'ماجد', place: 'الإمارات', text: 'بخصوص فحوصات الدم والضغط الحمدلله صارت طبيعية والكلسترول حتى نزل اكثر من ما الدكاترة توقعوا وصارت الفحوصات كلها ممتازة و استغنيت عن فكرة اني ابدا باي حبوب ضغط وكلسترول شكرا لك يادكتور', result: 'النتيجة: ضغط الدم والكلسترول عادا للطبيعي بدون حبوب' },
  { name: 'عمر', place: 'السعودية', text: 'شكرا يادكتور معاوية يااخي، بكرة ان شاء الله اخر يوم تنشيف. الفضل ليك ياكوتش اجتهدت معانا ووصلنا للشكل الخرافي دا. اكتر شي تعلمته انه مهما كانت ظروفك صعبة بتقدر تحقق اهدافك تعلمت منك الكثير يادكتورماقصرت', result: 'النتيجة: تغير شكل الجسم بالكامل رغم جدول العمل الضاغط' },
  { name: 'راشد', place: 'الإمارات', text: 'اليوم كملت سنة كاملة مع الدكتور معاوية، والنتيجة ما كانت بس في الجسم، الي الناس ما يتكلمون عنه هو الصلابة الذهنية والنفسية بعد. تفصيل على كيفك، متابعة من القلب، والعقل السليم في الجسم السليم.', result: 'النتيجة: تغيير جذري في الجسم والعقلية خلال سنة كاملة' },
];

const doctorFacts = [
  { big: 'باطنية', small: 'طبيب باطنية مقيم' },
  { big: '1:1', small: 'الطبيب نفسه يتابعك، مو فريق' },
  { big: '90 يوم', small: 'متابعة وتعديل، مو جلسة وحدة' },
  { big: 'أونلاين', small: 'من أي مكان في الخليج' },
];

const fitYes = [
  'رجل بين 28 و 45 سنة في الإمارات أو الخليج',
  'عندك عمل أو مسؤوليات ضاغطة وما عندك وقت للتجارب',
  'جربت حميات أو نادي أو مدربين وما استمرت النتيجة',
  'جاهز تلتزم 90 يوم بخطة واضحة وتعديل مستمر',
];
const fitNo = [
  'تدور على حبة سحرية أو نتيجة بدون التزام',
  'عندك حالة طبية طارئة تحتاج علاج مباشر',
  'ما تقدر تستثمر وقت ومال في صحتك حالياً',
];

const faqs = [
  { q: 'ماذا أتوقع من البرنامج؟', a: 'برنامج متابعة 1:1 مع طبيب باطنية مقيم لمدة 90 يوم. نبدأ بتقييم شامل لحالتك عبر Google Meet، نبني خطة مخصصة تشمل النوم، التغذية، المكملات والتمارين، ثم نتابع تقدمك ونعدّل الخطة حسب استجابة جسمك طوال فترة البرنامج.' },
  { q: 'هل أحتاج تحاليل مخبرية؟', a: 'بناءً على التقييم الأولي لحالتك، نحدد التحاليل اللازمة المناسبة لك، مش تخمين.' },
  { q: 'هل هذا تشخيص طبي؟', a: 'هذه خدمة تعليم صحي وتوجيه وتفسير للتحاليل، وليست بديلاً عن التشخيص أو العلاج الطبي المباشر. إذا كان لديك أعراض خطيرة (ألم صدر، ضيق تنفس شديد، إغماء)، يجب عليك مراجعة طبيب فوراً.' },
  { q: 'كم تكلفة البرنامج وكيف يتم الدفع؟', a: 'نعرض التفاصيل والتكلفة بعد التقييم القصير، لأن البرنامج مو مناسب لكل أحد ونبي نتأكد أولاً إنه يناسبك. الدفع يتم عبر رابط آمن، وبعدها تستلم رابط التطبيق ويتواصل معك الدكتور مباشرة.' },
  { q: 'متى أستلم الخطة؟', a: 'بعد أول جلسة تقييم، تستلم خطتك المخصصة. بعدها نتابع تقدمك لمدة 90 يوم ونعدّل الخطة حسب استجابة جسمك ونتائجك.' },
  { q: 'ما هو ضمان استرداد الأموال؟', a: 'إذا لم تستفد من البرنامج، نرد لك المبلغ كاملاً بلا أسئلة. نحن واثقون من النتائج.' },
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
      <span>سري تماماً · بدون التزام · مقاعد محدودة شهرياً</span>
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
              <span>تحت اشراف طبيب باطنية مقيم · الأماكن محدودة</span>
            </div>

            <div className="f-hero-glow">
              <img src={DOCTOR_IMG} alt="دكتور معاوية، طبيب باطنية مقيم" width="640" height="640" fetchpriority="high" decoding="async" data-testid="doctor-image" />
            </div>
            <p style={{ fontWeight: 700, color: 'white', fontSize: '1.15rem' }}>د. معاوية</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>طبيب باطنية مقيم</p>

            <h1 className="heading-hero" style={{ color: 'white', maxWidth: '800px', margin: '0 auto 1.25rem' }}>
              استعد طاقتك، صفاء ذهنك، وشكل جسمك خلال 90 يوم بخطة طبية مدروسة
            </h1>
            <p className="body-large" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
              برنامج صحة وأداء 1:1 بإشراف مباشر من طبيب، للرجال المشغولين في الإمارات والخليج.
              جاوب على {TOTAL_STEPS - 1} أسئلة قصيرة ونقول لك بصراحة هل البرنامج مناسب لك.
            </p>

            <div className="f-hero-features">
              {features.map((f) => (
                <span key={f}><CheckCircle2 size={18} strokeWidth={2.5} />{f}</span>
              ))}
            </div>

            <div className="f-inline-quiz" data-testid="hero-quiz">
              <p className="f-inline-quiz-step">الخطوة 1 من {TOTAL_STEPS} · اضغط اختيار واحد</p>
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
            {sectionHead('مشكلتك مش في الالتزام لكن في غياب تشخيص صحيح لحالتك وبرنامج مبني خصيصاً لك', 'إذا تحس بواحدة من هذي، هذا بالضبط اللي نشتغل عليه:')}
            <ul className="f-grid-2">
              {symptoms.map((s) => (
                <li key={s.pain} className="f-card f-pair">
                  <p className="pain"><CheckCircle2 size={22} aria-hidden="true" /><span>{s.pain}</span></p>
                  <p className="fix">{s.fix}</p>
                </li>
              ))}
            </ul>
            <div className="f-center" style={{ marginTop: '3rem' }}>
              {cta('pain', 'اعرف إذا كنت مؤهلاً للبرنامج')}
              <div>{trustLine}</div>
            </div>
          </div>
        </section>

        <section className="f-section lighter f-reveal" data-testid="program-details-section">
          <div className="f-wrap">
            {sectionHead('كيف يشتغل البرنامج', 'ثلاث مراحل، كلها تحت إشراف الطبيب نفسه من أول يوم لآخر يوم.')}
            <ol className="f-grid-3">
              {steps.map((s) => (
                <li key={s.title} className="f-card top">
                  <div className="f-icon"><s.icon size={24} /></div>
                  <p style={{ color: '#60a5fa', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.3rem' }}>{s.when}</p>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <p className="body-large f-center" style={{ color: 'rgba(255,255,255,0.75)', marginTop: '2.5rem' }}>
              بنهاية الـ 90 يوم عندك خطة تفهمها وتقدر تمشي عليها سنة بعد سنة، مبنية على جسمك أنت.
            </p>
          </div>
        </section>

        <section className="f-section deeper f-reveal" data-testid="deliverables-section">
          <div className="f-wrap">
            {sectionHead('برنامج صحة صمم خصيصاً لك')}
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
              {cta('testimonials', 'شوف هل البرنامج مناسب لك')}
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
                أنا د. معاوية، طبيب باطنية مقيم. أشتغل مع رجال الأعمال والموظفين أصحاب المسؤوليات العالية اللي يبون يفهمون أجسامهم بالأرقام، مو بالتخمين.
              </p>
              <p className="body-large" style={{ marginTop: '1rem' }}>
                الهدف مو بس إنك تنزل وزن أو تتمرن أكثر. نحدد وين الخلل الحقيقي من التحاليل والنوم والتغذية، ونغيّر اللي يحتاج يتغيّر أولاً، ونتابع الأثر.
              </p>
              <ul className="f-facts">
                {doctorFacts.map((f) => <li key={f.small}><strong>{f.big}</strong><span>{f.small}</span></li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="f-section lighter f-reveal" data-testid="target-audience-section">
          <div className="f-wrap">
            {sectionHead('البرنامج مو لكل أحد', 'نقبل عدد محدود كل شهر عشان نقدر نتابع كل مشترك بنفسنا. التقييم يحدد إذا كنت مناسباً، وإذا ما كنت مناسباً نقولها لك بوضوح.')}
            <div className="f-grid-2">
              <div className="f-card top f-fit-col yes">
                <h3>البرنامج لك إذا</h3>
                <ul>{fitYes.map((i) => <li key={i}><CheckCircle2 size={20} aria-hidden="true" /><span>{i}</span></li>)}</ul>
              </div>
              <div className="f-card f-fit-col no">
                <h3>مو لك إذا</h3>
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
              تقييم قصير يأخذ دقيقة. إذا كان البرنامج مناسباً لك نتواصل معك مباشرة ونشرح لك التفاصيل والخطوة التالية.
              وإذا ما كان مناسباً، نقولها لك بصراحة ونوجهك للبديل الأنسب.
            </p>
            {cta('final')}
            <div>{trustLine}</div>
            <p className="f-guarantee">
              <Shield size={16} aria-hidden="true" />
              <span>ضمان استرداد كامل، إذا لم تستفد من البرنامج نرد لك كامل المبلغ بلا أسئلة</span>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer-executive">
        <div className="container">
          <p className="body-small" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>
            هذه خدمة تعليم صحي وتوجيه، وليست بديلاً عن التشخيص أو العلاج الطبي المباشر.
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
