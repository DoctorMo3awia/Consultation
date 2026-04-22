import React, { useEffect, useRef } from 'react';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { CheckCircle2, Star, Clock, Shield, Video, FileText, TrendingUp, MessageSquare } from 'lucide-react';

const Landing = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addSectionRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const openPayment = () => {
    window.open('https://www.paypal.com/ncp/payment/2BKK55L2RNQHY', '_blank');
  };

  const features = [
    { text: 'طاقة أعلى وتركيز أوضح', icon: CheckCircle2 },
    { text: 'نوم أفضل وتحسن ملحوظ في شكل الجسم', icon: CheckCircle2 },
    { text: 'خطة مخصصة لك تتناسب مع طبيعة عملك', icon: CheckCircle2 },
  ];

  const targetAudience = [
    'تعاني من ضعف التركيز والطاقة رغم النوم الكافي',
    'تشعر بالتوتر المستمر وتقلبات المزاج تؤثر على قراراتك',
    'زيادة الوزن والدهون الحشوية رغم محاولات التمرين',
    'نوم متقطع أو غير مريح يؤثر على أدائك اليومي',
    'قلق حول صحتك ولا تعرف أي فحوصات مهمة أو كيف تحسنها',
    'تريد خطة صحية بسيطة تعمل رغم ضغوط طبيعة عملك',
  ];

  const dreamOutcomes = [
    'طاقة عالية وتركيز حاد طوال اليوم',
    'هدوء نفسي وثبات في المزاج والقرارات',
    'جسم أخف وشكل أفضل بدون حرمان',
    'نوم عميق ومنتظم تصحى منه جاهز',
    'راحة بال مع صورة واضحة عن صحتك وأرقامك',
    'خطة صحية تعمل ضمن جدولك بدون تعقيد',
  ];

  const faqs = [
    {
      question: 'ماذا أتوقع من البرنامج؟',
      answer: 'برنامج متابعة 1:1 مع طبيب باطنية مقيم لمدة 90 يوم. نبدأ بتقييم شامل لحالتك عبر Google Meet، نبني خطة مخصصة تشمل النوم، التغذية، المكملات والتمارين، ثم نتابع تقدمك ونعدّل الخطة حسب استجابة جسمك طوال فترة البرنامج.',
    },
    {
      question: 'هل أحتاج تحاليل مخبرية؟',
      answer: 'بناءً على التقييم الأولي لحالتك، نحدد التحاليل اللازمة المناسبة لك، مش تخمين.',
    },
    {
      question: 'هل هذا تشخيص طبي؟',
      answer: 'هذه خدمة تعليم صحي وتوجيه وتفسير للتحاليل، وليست بديلاً عن التشخيص أو العلاج الطبي المباشر. إذا كان لديك أعراض خطيرة (ألم صدر، ضيق تنفس شديد، إغماء)، يجب عليك مراجعة طبيب فوراً.',
    },
    {
      question: 'كيف يتم الدفع؟',
      answer: 'ادفع مباشرة ($680). بعد إتمام الدفع، ستستلم رابطاً عبر الإيميل لتنزيل التطبيق الخاص بالمتابعة وسيتواصل معك الدكتور مباشرة.',
    },
    {
      question: 'متى أستلم الخطة؟',
      answer: 'بعد أول جلسة تقييم، تستلم خطتك المخصصة. بعدها نتابع تقدمك لمدة 90 يوم ونعدّل الخطة حسب استجابة جسمك ونتائجك.',
    },
    {
      question: 'ما هو ضمان استرداد الأموال؟',
      answer: 'إذا لم تستفد من البرنامج، نرد لك المبلغ كاملاً بلا أسئلة. نحن واثقون من النتائج.',
    },
  ];

  const deliverables = [
    {
      icon: Video,
      title: 'تقييم شامل وبناء خطة مخصصة لك',
      description: 'جلسة تقييم أولية شاملة عبر Google Meet مع طبيب باطنية مقيم، نفهم حالتك ونبني خطة طبية متكاملة مصممة خصيصاً لك',
    },
    {
      icon: FileText,
      title: 'تحليل شامل للتحاليل المخبرية',
      description: 'بناءً على التقييم، سيتم تحديد التحاليل اللازمة لحالتك مع متابعة التغيرات طوال الـ 3 أشهر.',
    },
    {
      icon: TrendingUp,
      title: 'خطة طبية مخصصة لك متكاملة',
      description: 'استراتيجية الاستشفاء، دليل للتغذية العلاجية، قواعد للتغذية في المطاعم، خطة تمارين مخصصة لك بأقل جرعة فعالة، بروتوكول تحسين المزاج والتركيز',
    },
    {
      icon: Clock,
      title: 'متابعة تقدمك لمدة 3 أشهر كاملة',
      description: 'هذا الفرق الحقيقي، مش بس خطة وخلاص. نتابع تقدمك، نراقب النتائج، ونعدّل الخطة حسب استجابة جسمك طوال 3 أشهر',
    },
    {
      icon: MessageSquare,
      title: 'دعم مستمر عبر واتساب طوال البرنامج',
      description: 'تواصل مباشر مع دكتور معاوية لمدة 3 أشهر، أي سؤال أو استفسار نجاوبك ونوجهك',
    },
  ];

  const testimonials = [
    {
      name: 'عبدالرحمن',
      role: 'الإمارات',
      text: 'الحمد الله أنا وصلت لأفضل مستوى لياقة وصحة من ايام المدرسة بفضل اللّٰه ثم مختبر العقل الي كان مو بس نظام غذائي وتمرين بس, غير أسلوب حياتي كامل للأفضل الحمدالله مشكورين يادكتور ومستمرين ان شاءالله',
      result: '✅ النتيجة: أفضل مستوى لياقة في حياته خلال 8 أسابيع',
    },
    {
      name: 'ماجد',
      role: 'الإمارات',
      text: 'بخصوص فحوصات الدم والضغط الحمدلله صارت طبيعية والكلسترول حتى نزل اكثر من ما الدكاترة توقعوا وصارت الفحوصات كلها ممتازة و استغنيت عن فكرة اني ابدا باي حبوب ضغط وكلسترول شكرا لك يادكتور',
      result: '✅ النتيجة: ضغط الدم والكلسترول عادا للطبيعي بدون حبوب',
    },
    {
      name: 'عمر',
      role: 'السعودية',
      text: 'شكرا يادكتور معاوية يااخي، بكرة ان شاء الله اخر يوم تنشيف. الفضل ليك ياكوتش اجتهدت معانا ووصلنا للشكل الخرافي دا. اكتر شي تعلمته انه مهما كانت ظروفك صعبة بتقدر تحقق اهدافك تعلمت منك الكثير يادكتورماقصرت',
      result: '✅ النتيجة: تغير شكل الجسم بالكامل رغم جدول العمل الضاغط',
    },
    {
      name: 'راشد',
      role: 'الإمارات',
      text: 'اليوم كملت سنة كاملة مع الدكتور معاوية، والنتيجة ما كانت بس في الجسم، الي الناس ما يتكلمون عنه هو الصلابة الذهنية والنفسية بعد. تفصيل على كيفك، متابعة من القلب، والعقل السليم في الجسم السليم.',
      result: '✅ النتيجة: تغيير جذري في الجسم والعقلية خلال سنة كاملة',
    },
  ];

  const darkSection = (shade) => ({
    padding: '5rem 1.2rem',
    background: shade === 'deeper'
      ? 'linear-gradient(180deg, #0c1a3a 0%, #0f172a 100%)'
      : 'linear-gradient(180deg, #0f1e4a 0%, #0c1a3a 100%)',
  });

  const darkCard = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    transition: 'all 0.3s ease',
  };

  return (
    <div data-testid="landing-page" style={{ background: '#0a1128' }}>
      {/* Header */}
      <header className="header-nav">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', letterSpacing: '0.01em' }}>
            دكتور معاوية
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" data-testid="hero-section">
        <div className="hero-content">
          <div className="hero-announcement">
            <Shield size={14} />
            <span>تحت اشراف طبيب باطنية مقيم · الأماكن محدودة</span>
          </div>

          {/* Large Doctor Image with Glow */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                borderRadius: '1rem',
                background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)',
                filter: 'blur(30px)',
                zIndex: 0,
              }} />
              <img
                src="https://customer-assets.emergentagent.com/job_gulf-exec-wellness/artifacts/6c16u5hp_Untitled.png"
                alt="دكتور معاوية"
                data-testid="doctor-image"
                style={{
                  width: 'clamp(250px, 40vw, 380px)',
                  height: 'clamp(250px, 40vw, 380px)',
                  borderRadius: '1rem',
                  objectFit: 'cover',
                  border: '3px solid rgba(37, 99, 235, 0.3)',
                  boxShadow: '0 0 60px 15px rgba(37, 99, 235, 0.3)',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <p style={{ fontWeight: 700, color: 'white', fontSize: '1.15rem' }}>
              د. معاوية
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              طبيب باطنية مقيم
            </p>
          </div>

          <h1 className="heading-hero" style={{ marginBottom: '1.5rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', color: 'white' }}>
            استعد طاقتك، صفاء ذهنك، وشكل جسمك خلال 90 يوم بخطة طبية مدروسة
          </h1>

          <p className="body-large" style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            برنامج صحة وأداء 1:1 بإشراف مباشر من طبيب، للرجال المشغولين في الإمارات والخليج
          </p>

          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {features.map((feature, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <feature.icon size={18} color="rgba(255,255,255,0.9)" strokeWidth={2.5} />
                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>{feature.text}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button data-testid="hero-book-btn" onClick={openPayment} className="btn-glow" style={{ minWidth: '200px', background: 'white', color: '#1e40af', border: 'none', borderRadius: '0.5rem', padding: '0.85rem 1.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
              سجّل في البرنامج
            </Button>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
              ))}
            </div>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
              معدل رضا 4.9/5 من العشرات من العملاء
            </span>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section ref={addSectionRef} className="scroll-reveal" data-testid="pain-points-section" style={darkSection('deeper')}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-divider" />
            <h2 className="heading-1" style={{ marginBottom: '1rem', color: 'white' }}>
              مشكلتك مش في الالتزام لكن في غياب تشخيص صحيح لحالتك وبرنامج مبني خصيصاً لك
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem' }}>
            {targetAudience.map((item, idx) => (
              <div key={idx} className="dark-card-hover" style={{ ...darkCard, display: 'flex', gap: '1rem', alignItems: 'flex-start', transitionDelay: `${idx * 0.1}s` }}>
                <CheckCircle2 size={22} color="#60a5fa" style={{ minWidth: '22px', marginTop: '0.2rem' }} />
                <p style={{ flex: 1, color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.7 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section ref={addSectionRef} className="scroll-reveal" data-testid="program-details-section" style={darkSection('lighter')}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-divider" />
            <h2 className="heading-1" style={{ marginBottom: '1rem', color: 'white' }}>
              برنامج صحة صمم خصيصاً لك
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {deliverables.map((item, idx) => (
              <div key={idx} className="dark-card-hover" style={{ ...darkCard, display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', borderTop: '3px solid #2563eb', transitionDelay: `${idx * 0.1}s` }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '0.5rem',
                  background: 'rgba(37, 99, 235, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <item.icon size={24} color="#60a5fa" />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginBottom: '0.25rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, flex: 1 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button onClick={openPayment} className="btn-glow" style={{ minWidth: '250px', background: 'white', color: '#1e40af', border: 'none', borderRadius: '0.5rem', padding: '0.85rem 1.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
              سجّل في البرنامج
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={addSectionRef} className="scroll-reveal" data-testid="testimonials-section" style={darkSection('deeper')}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-divider" />
            <h2 className="heading-1" style={{ marginBottom: '1rem', color: 'white' }}>
              آراء العملاء
            </h2>
            <p className="body-large" style={{ color: 'rgba(255,255,255,0.7)' }}>
              رجال أعمال وموظفين أصحاب مسؤوليات عالية حولوا صحتهم وأدائهم
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="dark-card-hover" style={{ ...darkCard, display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '3px solid #2563eb', transitionDelay: `${idx * 0.1}s` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <p style={{ lineHeight: 1.8, flex: 1, color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
                  "{testimonial.text}"
                </p>
                <div style={{
                  background: 'rgba(22, 101, 52, 0.2)',
                  border: '1px solid rgba(74, 222, 128, 0.3)',
                  borderRadius: '0.5rem',
                  padding: '0.6rem 1rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#4ade80'
                }}>
                  {testimonial.result}
                </div>
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontWeight: 600, marginBottom: '0.25rem', color: 'white' }}>
                    {testimonial.name}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dream Outcomes Section */}
      <section ref={addSectionRef} className="scroll-reveal" data-testid="target-audience-section" style={darkSection('lighter')}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-divider" />
            <h2 className="heading-1" style={{ marginBottom: '1rem', color: 'white' }}>
              النتائج التي ستحققها
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem' }}>
            {dreamOutcomes.map((item, idx) => (
              <div key={idx} className="dark-card-hover" style={{ ...darkCard, display: 'flex', gap: '1rem', alignItems: 'flex-start', transitionDelay: `${idx * 0.1}s` }}>
                <div style={{
                  minWidth: '40px',
                  height: '40px',
                  borderRadius: '0.5rem',
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  color: 'white',
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 12px rgba(30, 64, 175, 0.4)'
                }}>
                  {idx + 1}
                </div>
                <p style={{ flex: 1, paddingTop: '0.5rem', color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.7 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={addSectionRef} className="scroll-reveal" data-testid="faq-section" style={darkSection('deeper')}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-divider" />
            <h2 className="heading-1" style={{ color: 'white' }}>
              الأسئلة الشائعة
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <AccordionTrigger style={{ textAlign: 'right', color: 'white', fontSize: '1.05rem', fontWeight: 600 }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={addSectionRef} className="scroll-reveal hero-section" style={{ minHeight: '60vh' }}>
        <div className="hero-content">
          <h2 className="heading-hero" style={{ marginBottom: '1rem', color: 'white' }}>
            اشترك الآن واستعد طاقتك
          </h2>

          <div style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '1rem',
            padding: '1.2rem 2rem',
            marginBottom: '1.5rem',
            maxWidth: '480px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '0.5rem', textDecoration: 'line-through' }}>
              متابعة شخصية مع طبيب خاص في الإمارات: $2,000–$4,000 لثلاث أشهر
            </p>
            <p style={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>
              هنا بـ $680 فقط: خطة مخصصة، متابعة تقدمك لمدة 3 أشهر كاملة ✓
            </p>
          </div>

          <p className="body-large" style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.8)' }}>
            الأماكن محدودة · $680 USD
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button data-testid="cta-book-btn" onClick={openPayment} className="btn-glow" style={{ minWidth: '200px', background: 'white', color: '#1e40af', border: 'none', borderRadius: '0.5rem', padding: '0.85rem 1.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
              سجّل في البرنامج
            </Button>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Shield size={16} color="rgba(255,255,255,0.8)" />
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}>
              ضمان استرداد كامل، إذا لم تستفد من البرنامج نرد لك كامل المبلغ بلا أسئلة
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-executive">
        <div className="container">
          <p className="body-small" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>
            هذه خدمة تعليم صحي وتوجيه، وليست بديلاً عن التشخيص أو العلاج الطبي المباشر.
          </p>
          <p className="caption" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © 2025 دكتور معاوية. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 15px rgba(37, 99, 235, 0.4), 0 0 30px rgba(37, 99, 235, 0.2); }
          50% { box-shadow: 0 0 25px rgba(37, 99, 235, 0.7), 0 0 50px rgba(37, 99, 235, 0.4); }
        }
        .btn-glow {
          animation: glow-pulse 2s ease-in-out infinite;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .btn-glow:hover {
          transform: translateY(-2px);
        }

        .dark-card-hover:hover {
          border-color: rgba(37, 99, 235, 0.4) !important;
          box-shadow: 0 0 20px rgba(37, 99, 235, 0.15);
          transform: translateY(-3px);
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .scroll-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-divider {
          background: linear-gradient(90deg, transparent 0%, rgba(96, 165, 250, 0.4) 50%, transparent 100%) !important;
        }
      `}</style>
    </div>
  );
};

export default Landing;
