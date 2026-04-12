import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ChevronDown, CheckCircle2, MessageCircle, Star, Clock, Shield } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  const scrollToBooking = () => {
    navigate('/offer');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/971555519451?text=تقييم', '_blank');
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
  ];

  const faqs = [
    {
      question: 'ماذا أتوقع من البرنامج؟',
      answer: 'برنامج متابعة 1:1 مع طبيب باطنية مقيم لمدة 90 يوم. نبدأ بتقييم شامل لحالتك عبر Google Meet، نبني خطة مخصصة تشمل النوم، التغذية، المكملات والتمارين، ثم نتابع تقدمك ونعدّل الخطة حسب استجابة جسمك طوال فترة البرنامج.',
    },
    {
      question: 'هل أحتاج تحاليل مخبرية؟',
      answer: 'بناءً على التقييم الأولي لحالتك، نحدد التحاليل اللازمة المناسبة لك — مش تخمين.',
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
      answer: 'إذا لم تستفد من البرنامج — نرد لك المبلغ كاملاً بلا أسئلة. نحن واثقون من النتائج.',
    },
  ];

  return (
    <div data-testid="landing-page" style={{ background: 'var(--bg-page)' }}>
      {/* Header */}
      <header className="header-nav">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', letterSpacing: '0.01em' }}>
            دكتور معاوية
          </div>
          <div className="nav-actions">
            <Button data-testid="header-whatsapp-btn" onClick={openWhatsApp} className="btn-outline-light" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', padding: '0.5rem 1rem' }}>
              <MessageCircle size={16} />
              واتساب
            </Button>
            <Button data-testid="header-book-btn" onClick={scrollToBooking} className="btn-light" style={{ padding: '0.5rem 1.2rem' }}>
              احجز الآن
            </Button>
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
          
          <h1 className="heading-hero" style={{ marginBottom: '1.5rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', color: 'white' }}>
            اكتشف العوامل الخفية التي تستنزف طاقتك وتركيزك وشكل جسمك وإنتاجيتك — واصلحها بخطة طبية متكاملة لمدة 90 يوم
          </h1>

          {/* Doctor Image */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_gulf-exec-wellness/artifacts/6c16u5hp_Untitled.png"
              alt="دكتور معاوية"
              data-testid="doctor-image"
              style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid rgba(255,255,255,0.25)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
              }}
            />
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontWeight: 700, marginBottom: '0.3rem', color: 'white', fontSize: '1.15rem' }}>
                د. معاوية
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                طبيب باطنية مقيم
              </p>
            </div>
          </div>
          
          <p className="body-large" style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            برنامج صحة وأداء 1:1 بإشراف مباشر من طبيب — للرجال المشغولين في الإمارات والخليج
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
            <Button data-testid="hero-book-btn" onClick={scrollToBooking} className="btn-light" style={{ minWidth: '200px' }}>
              سجّل في البرنامج
            </Button>
            <Button data-testid="hero-whatsapp-btn" onClick={openWhatsApp} className="btn-outline-light" style={{ minWidth: '200px', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
              <MessageCircle size={18} />
              تواصل واتساب
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

        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}>
          <ChevronDown size={32} color="rgba(255,255,255,0.4)" style={{ animation: 'bounce 2s infinite' }} />
        </div>
      </section>

      {/* For Who Section */}
      <section data-testid="target-audience-section" style={{ padding: '5rem 1.2rem', background: 'var(--bg-card)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-divider" />
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
              هذا البرنامج مصمم خصيصاً لك إذا كنت:
            </h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
              من رجال الأعمال والموظفين أصحاب المسؤوليات العالية الذين يعانون من تحديات صحية تؤثر على أدائهم
            </p>
          </div>

          <div className="ai-grid">
            {targetAudience.map((item, idx) => (
              <div key={idx} className="voice-card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ 
                  minWidth: '40px', 
                  height: '40px', 
                  borderRadius: '0.5rem', 
                  background: 'var(--blue-shine)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontWeight: 700,
                  color: 'white',
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 12px rgba(30, 64, 175, 0.25)'
                }}>
                  {idx + 1}
                </div>
                <p className="body-medium" style={{ flex: 1, paddingTop: '0.5rem' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button data-testid="audience-book-btn" onClick={scrollToBooking} className="btn-primary" style={{ minWidth: '250px' }}>
              نعم، هذا أنا - احجز الآن
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section data-testid="testimonials-section" style={{ padding: '5rem 1.2rem', background: 'var(--bg-section)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-divider" />
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
              نتائج العملاء
            </h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              رجال أعمال وموظفين أصحاب مسؤوليات عالية حولوا صحتهم وأدائهم
            </p>
          </div>

          <div className="voice-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="voice-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '3px solid var(--blue-elegant)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <p className="body-medium" style={{ lineHeight: 1.8, flex: 1, color: 'var(--text-secondary)' }}>
                  "{testimonial.text}"
                </p>
                {/* Result Box */}
                <div style={{ 
                  background: '#f0fdf4', 
                  border: '1px solid #86efac', 
                  borderRadius: '0.5rem', 
                  padding: '0.6rem 1rem', 
                  fontSize: '0.9rem', 
                  fontWeight: 600, 
                  color: '#166534' 
                }}>
                  {testimonial.result}
                </div>
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0' }}>
                  <div className="body-medium" style={{ fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                    {testimonial.name}
                  </div>
                  <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section data-testid="faq-section" style={{ padding: '5rem 1.2rem', background: 'var(--bg-card)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-divider" />
          <h2 className="heading-1" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            الأسئلة الشائعة
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="heading-3" style={{ textAlign: 'right' }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="body-medium" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-section" style={{ minHeight: '60vh' }}>
        <div className="hero-content">
          <h2 className="heading-hero" style={{ marginBottom: '1rem', color: 'white' }}>
            جاهز لاستعادة طاقتك وتركيزك؟
          </h2>

          {/* Price Comparison Box */}
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            border: '1px solid rgba(255,255,255,0.2)', 
            borderRadius: '1rem', 
            padding: '1.2rem 2rem', 
            marginBottom: '1.5rem', 
            maxWidth: '480px', 
            marginLeft: 'auto', 
            marginRight: 'auto' 
          }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem', textDecoration: 'line-through' }}>
              متابعة شخصية مع طبيب خاص في الإمارات: $2,000–$4,000 لثلاث أشهر
            </p>
            <p style={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>
              هنا بـ $680 فقط: خطة مخصصة + متابعة تقدمك لمدة 3 أشهر كاملة ✓
            </p>
          </div>

          <p className="body-large" style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.8)' }}>
            الأماكن محدودة · $680 USD
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button data-testid="cta-book-btn" onClick={scrollToBooking} className="btn-light" style={{ minWidth: '200px' }}>
              احجز الآن
            </Button>
            <Button data-testid="cta-whatsapp-btn" onClick={openWhatsApp} className="btn-outline-light" style={{ minWidth: '200px', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
              <MessageCircle size={18} />
              واتساب
            </Button>
          </div>

          {/* Guarantee */}
          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Shield size={16} color="rgba(255,255,255,0.8)" />
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}>
              ضمان استرداد كامل — إذا لم تستفد من البرنامج، نرد لك كامل المبلغ بلا أسئلة
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
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
    </div>
  );
};

export default Landing;
