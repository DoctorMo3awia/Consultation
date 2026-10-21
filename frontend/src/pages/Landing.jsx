import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, X, ChevronDown, Star, ShieldCheck, ArrowLeft } from 'lucide-react';
import { PRICE_USD, captureAttribution, track } from '../lib/funnel';
import '../styles/funnel.css';

const DOCTOR_IMG = 'https://customer-assets.emergentagent.com/job_gulf-exec-wellness/artifacts/6c16u5hp_Untitled.png';

const symptoms = [
  'طاقة منخفضة وتركيز ضعيف رغم إنك تنام كفاية',
  'زيادة وزن ودهون في البطن رغم النادي والحميات',
  'نوم متقطع أو تصحى وأنت مو مرتاح',
  'توتر مستمر وتقلب مزاج يأثر على قراراتك',
  'قلق على صحتك وما تعرف أي تحاليل مهمة',
  'تبي خطة بسيطة تشتغل مع ضغط عملك وسفرك',
];

const steps = [
  {
    when: 'الأسبوع الأول',
    title: 'تقييم طبي شامل',
    text: 'جلسة عبر Google Meet مع طبيب باطنية مقيم. نفهم أعراضك، نمط حياتك، ونحدد التحاليل اللازمة لحالتك بدل التخمين.',
  },
  {
    when: 'بعد التقييم مباشرة',
    title: 'خطة مبنية عليك',
    text: 'نوم، تغذية في البيت والمطاعم والسفر، تمارين بأقل جرعة فعالة، مكملات عند الحاجة، وبروتوكول للمزاج والتركيز.',
  },
  {
    when: 'طوال 90 يوم',
    title: 'متابعة وتعديل مستمر',
    text: 'نراقب نتائجك ونعدّل الخطة حسب استجابة جسمك، مع تواصل مباشر على واتساب لأي سؤال.',
  },
];

const deliverables = [
  { title: 'جلسة تقييم شاملة مع الطبيب', text: 'عبر Google Meet، نفهم حالتك ونبني الخطة من الصفر.' },
  { title: 'تحليل وتفسير تحاليلك', text: 'نحدد التحاليل المناسبة لك ونتابع تغيراتها طوال البرنامج.' },
  { title: 'خطة طبية متكاملة', text: 'استشفاء، تغذية علاجية، قواعد للمطاعم، تمارين، وبروتوكول مزاج وتركيز.' },
  { title: 'متابعة 3 أشهر كاملة', text: 'مو خطة وخلاص. نراقب، نعدّل، ونتأكد إنك ماشي صح.' },
  { title: 'دعم مباشر على واتساب', text: 'أي سؤال أو عقبة خلال البرنامج، نجاوبك ونوجهك.' },
  { title: 'تطبيق متابعة خاص', text: 'تسجّل تقدمك وتشوف خطتك في مكان واحد.' },
];

const testimonials = [
  {
    name: 'عبدالرحمن',
    place: 'الإمارات',
    text: 'الحمد لله وصلت لأفضل مستوى لياقة وصحة من أيام المدرسة. ما كان بس نظام غذائي وتمرين، غيّر أسلوب حياتي كامل للأفضل.',
    result: 'أفضل مستوى لياقة في حياته خلال 8 أسابيع',
  },
  {
    name: 'ماجد',
    place: 'الإمارات',
    text: 'فحوصات الدم والضغط صارت طبيعية، والكلسترول نزل أكثر مما توقع الأطباء. استغنيت عن فكرة إني أبدأ حبوب ضغط وكلسترول.',
    result: 'الضغط والكلسترول رجعوا طبيعي بدون أدوية',
  },
  {
    name: 'عمر',
    place: 'السعودية',
    text: 'اجتهدت معنا ووصلنا للشكل الخرافي هذا. أكثر شي تعلمته إنه مهما كانت ظروفك صعبة تقدر تحقق أهدافك.',
    result: 'تغيّر شكل الجسم بالكامل رغم جدول عمل ضاغط',
  },
  {
    name: 'راشد',
    place: 'الإمارات',
    text: 'كملت سنة كاملة مع الدكتور، والنتيجة ما كانت بس في الجسم. اللي ما يتكلمون عنه هو الصلابة الذهنية والنفسية بعد.',
    result: 'تغيير في الجسم والعقلية خلال سنة',
  },
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
  {
    q: 'ماذا أتوقع من البرنامج؟',
    a: 'برنامج متابعة 1:1 مع طبيب باطنية مقيم لمدة 90 يوم. نبدأ بتقييم شامل عبر Google Meet، نبني خطة مخصصة تشمل النوم والتغذية والمكملات والتمارين، ثم نتابع تقدمك ونعدّل الخطة حسب استجابة جسمك.',
  },
  {
    q: 'هل أحتاج تحاليل مخبرية؟',
    a: 'بناءً على التقييم الأولي نحدد التحاليل اللازمة لحالتك. إذا عندك تحاليل حديثة نبدأ منها.',
  },
  {
    q: 'هل هذا تشخيص طبي؟',
    a: 'هذه خدمة تعليم صحي وتوجيه وتفسير للتحاليل، وليست بديلاً عن التشخيص أو العلاج الطبي المباشر. إذا عندك أعراض خطيرة مثل ألم صدر أو ضيق تنفس شديد، راجع طبيباً فوراً.',
  },
  {
    q: 'كيف يتم الدفع وماذا يحدث بعده؟',
    a: `الدفع عبر PayPal ($${PRICE_USD}). بعد الدفع تستلم رابط التطبيق الخاص بالمتابعة على إيميلك، ويتواصل معك الدكتور مباشرة لتحديد موعد جلسة التقييم.`,
  },
  {
    q: 'متى أستلم الخطة؟',
    a: 'بعد أول جلسة تقييم تستلم خطتك المخصصة، ثم نتابعك 90 يوم ونعدّلها حسب نتائجك.',
  },
  {
    q: 'ما هو ضمان استرداد الأموال؟',
    a: 'إذا التزمت بالبرنامج وما استفدت، نرد لك المبلغ كاملاً بلا أسئلة.',
  },
];

const Landing = () => {
  const navigate = useNavigate();
  const [stickyVisible, setStickyVisible] = useState(false);
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
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            reveal.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    const revealTargets = document.querySelectorAll('.f-reveal');
    revealTargets.forEach((el) => reveal.observe(el));
    // Safety net: never leave content hidden if the observer does not fire.
    const fallback = window.setTimeout(() => revealTargets.forEach((el) => el.classList.add('in')), 2500);

    const hero = heroRef.current;
    const sticky = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
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

  const cta = (source, label = 'ابدأ التقييم المجاني') => (
    <button type="button" className="f-btn f-btn-primary" onClick={() => startQuiz(source)} data-testid={`cta-${source}`}>
      {label}
      <ArrowLeft size={20} aria-hidden="true" />
    </button>
  );

  return (
    <div className="funnel" data-testid="landing-page">
      <header className="f-header">
        <div className="f-wrap">
          <div className="f-brand">
            دكتور معاوية
            <small>طبيب باطنية مقيم</small>
          </div>
          <button type="button" className="f-btn f-btn-primary" onClick={() => startQuiz('header')}>
            <span className="long">ابدأ التقييم</span>
            <span className="short" aria-hidden="true">التقييم</span>
          </button>
        </div>
      </header>

      <main>
        <section className="f-hero" ref={heroRef} data-testid="hero-section">
          <div className="f-wrap">
            <div className="f-hero-copy">
              <h1 className="f-h1">استعد طاقتك وتركيزك وشكل جسمك خلال 90 يوم</h1>
              <p className="f-lead">
                برنامج طبي 1:1 بإشراف طبيب باطنية مقيم، مصمم للرجال المشغولين في الإمارات والخليج.
                جاوب على 9 أسئلة قصيرة ونقول لك بصراحة هل البرنامج مناسب لك.
              </p>
              <div className="f-hero-cta">
                {cta('hero')}
                <p className="f-micro">دقيقة واحدة · بدون التزام · نرد عليك شخصياً</p>
              </div>
              <div className="f-rating" aria-label="تقييم 4.9 من 5">
                <span className="stars" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                </span>
                <span>4.9 من 5 من عشرات العملاء في الخليج</span>
              </div>
            </div>
            <figure className="f-hero-figure">
              <img
                src={DOCTOR_IMG}
                alt="دكتور معاوية، طبيب باطنية مقيم"
                width="640"
                height="640"
                fetchpriority="high"
                decoding="async"
                data-testid="doctor-image"
              />
              <figcaption>
                <strong>د. معاوية</strong>
                <span>طبيب باطنية مقيم · متابعة مباشرة لكل مشترك</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="f-section deep f-reveal" data-testid="pain-points-section">
          <div className="f-wrap">
            <h2 className="f-h2">إذا تحس بواحدة من هذي، المشكلة مو في التزامك</h2>
            <p className="f-lead">
              المشكلة في غياب تشخيص صحيح لحالتك، وخطة مبنية عليك أنت، مو على قالب جاهز.
            </p>
            <ul className="f-check-grid">
              {symptoms.map((s) => (
                <li key={s} className="f-check">
                  <Check size={22} aria-hidden="true" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="f-section paper f-reveal" data-testid="program-details-section">
          <div className="f-wrap">
            <h2 className="f-h2">كيف يشتغل البرنامج</h2>
            <p className="f-lead">ثلاث مراحل، كلها تحت إشراف الطبيب نفسه من أول يوم لآخر يوم.</p>
            <ol className="f-steps">
              {steps.map((s) => (
                <li key={s.title} className="f-step">
                  <span className="when">{s.when}</span>
                  <h3 className="f-h3">{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="f-section f-reveal">
          <div className="f-wrap">
            <h2 className="f-h2">وش يشمل البرنامج</h2>
            <ul className="f-deliverables">
              {deliverables.map((d) => (
                <li key={d.title} className="f-deliverable">
                  <strong>{d.title}</strong>
                  <p>{d.text}</p>
                </li>
              ))}
            </ul>
            <div className="f-center" style={{ marginTop: '2.5rem' }}>
              {cta('deliverables', 'شوف هل البرنامج مناسب لك')}
            </div>
          </div>
        </section>

        <section className="f-section paper f-reveal" data-testid="testimonials-section">
          <div className="f-wrap">
            <h2 className="f-h2">نتائج رجال مثلك، مع نفس ضغط العمل</h2>
            <div className="f-quotes">
              {testimonials.map((t) => (
                <article key={t.name} className="f-quote">
                  <blockquote>{t.text}</blockquote>
                  <p className="result">النتيجة: {t.result}</p>
                  <footer>
                    <strong>{t.name}</strong> · {t.place}
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="f-section light f-reveal" data-testid="target-audience-section">
          <div className="f-wrap">
            <h2 className="f-h2">البرنامج مو لكل أحد</h2>
            <p className="f-lead">نقبل عدد محدود كل شهر عشان نقدر نتابع كل مشترك بنفسنا. التقييم يحدد إذا كنت مناسباً.</p>
            <div className="f-fit">
              <div className="f-fit-col yes">
                <h3 className="f-h3">البرنامج لك إذا</h3>
                <ul>
                  {fitYes.map((i) => (
                    <li key={i}><Check size={20} aria-hidden="true" /><span>{i}</span></li>
                  ))}
                </ul>
              </div>
              <div className="f-fit-col no">
                <h3 className="f-h3">مو لك إذا</h3>
                <ul>
                  {fitNo.map((i) => (
                    <li key={i}><X size={20} aria-hidden="true" /><span>{i}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="f-section f-reveal" data-testid="pricing-section">
          <div className="f-wrap f-price">
            <div>
              <h2 className="f-h2">استثمار واحد، 90 يوم متابعة طبية</h2>
              <p className="f-lead">
                متابعة شخصية مع طبيب خاص في الإمارات تكلف بين $2,000 و $4,000 لثلاثة أشهر. هنا تحصل على نفس المتابعة،
                بخطة مبنية عليك، بجزء من التكلفة.
              </p>
              <div className="f-guarantee">
                <ShieldCheck size={26} aria-hidden="true" />
                <p>
                  <strong>ضمان استرداد كامل.</strong> إذا التزمت بالبرنامج وما استفدت، نرد لك المبلغ كاملاً بلا أسئلة.
                </p>
              </div>
            </div>
            <div className="f-price-card">
              <p className="anchor">القيمة الفعلية $3,000</p>
              <p className="amount">${PRICE_USD}<small>USD · دفعة واحدة</small></p>
              <ul>
                {['جلسة تقييم مع الطبيب', 'تفسير التحاليل', 'خطة طبية متكاملة', 'متابعة وتعديل 90 يوم', 'دعم واتساب مباشر'].map((i) => (
                  <li key={i}><Check size={18} aria-hidden="true" /><span>{i}</span></li>
                ))}
              </ul>
              {cta('pricing')}
              <p className="f-micro">الأماكن محدودة شهرياً</p>
            </div>
          </div>
        </section>

        <section className="f-section paper f-reveal" data-testid="faq-section">
          <div className="f-wrap">
            <h2 className="f-h2 f-center">الأسئلة الشائعة</h2>
            <div className="f-faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>
                    {f.q}
                    <ChevronDown size={20} aria-hidden="true" />
                  </summary>
                  <div className="answer">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="f-section f-final f-reveal">
          <div className="f-wrap">
            <h2 className="f-h2">ابدأ بتقييم يأخذ دقيقة</h2>
            <p className="f-lead">
              جاوب على الأسئلة، وإذا كان البرنامج مناسباً لك نتواصل معك مباشرة ونشرح لك الخطوة التالية.
            </p>
            {cta('final')}
          </div>
        </section>
      </main>

      <footer className="f-footer">
        <div className="f-wrap">
          <div className="f-brand">دكتور معاوية</div>
          <p>هذه خدمة تعليم صحي وتوجيه وتفسير للتحاليل، وليست بديلاً عن التشخيص أو العلاج الطبي المباشر.</p>
          <p>© {new Date().getFullYear()} دكتور معاوية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>

      <div className={`f-sticky ${stickyVisible ? 'show' : ''}`} aria-hidden={!stickyVisible}>
        <button type="button" className="f-btn f-btn-primary" onClick={() => startQuiz('sticky')} tabIndex={stickyVisible ? 0 : -1}>
          ابدأ التقييم المجاني
          <ArrowLeft size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Landing;
