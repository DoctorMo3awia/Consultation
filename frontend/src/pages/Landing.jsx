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
    { text: 'طاقة أعلى وتركيز أوضح خلال 30 يوم', icon: CheckCircle2 },
    { text: 'نوم أفضل وتحسن ملحوظ في شكل الجسم', icon: CheckCircle2 },
    { text: 'خطة بسيطة تتناسب مع السفر والمطاعم', icon: CheckCircle2 },
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
    },
    {
      name: 'ماجد',
      role: 'الإمارات',
      text: 'بخصوص فحوصات الدم والضغط الحمدلله صارت طبيعية والكلسترول حتى نزل اكثر من ما الدكاترة توقعوا وصارت الفحوصات كلها ممتازة و استغنيت عن فكرة اني ابدا باي حبوب ضغط وكلسترول شكرا لك يادكتور',
    },
    {
      name: 'عمر',
      role: 'السعودية',
      text: 'شكرا يادكتور معاوية يااخي، بكرة ان شاء الله اخر يوم تنشيف. الفضل ليك ياكوتش اجتهدت معانا ووصلنا للشكل الخرافي دا. اكتر شي تعلمته انه مهما كانت ظروفك صعبة بتقدر تحقق اهدافك تعلمت منك الكثير يادكتورماقصرت',
    },
  ];

  const faqs = [
    {
      question: 'ماذا أتوقع من الجلسة؟',
      answer: 'جلسة 45 دقيقة عبر Google Meet مع طبيب باطنية مقيم. نناقش أعراضك، نمط حياتك، نتائج التحاليل، ونضع خطة 30 يوم مخصصة تشمل النوم، التغذية، التمارين، والكافيين. تستلم ملف PDF كامل خلال 24 ساعة.',
    },
    {
      question: 'هل أحتاج تحاليل مخبرية؟',
      answer: 'بناءً على التقييم الأولي لحالتك، سيتم تحديد التحاليل اللازمة المناسبة لك. إذا كان لديك تحاليل حديثة، يمكننا مراجعتها والبناء عليها.',
    },
    {
      question: 'هل هذا تشخيص طبي؟',
      answer: 'هذه خدمة تعليم صحي وتوجيه وتفسير للتحاليل، وليست بديلاً عن التشخيص أو العلاج الطبي المباشر. إذا كان لديك أعراض خطيرة (ألم صدر، ضيق تنفس شديد، إغماء)، يجب عليك مراجعة طبيب فوراً.',
    },
    {
      question: 'كيف يتم الدفع؟',
      answer: 'ادفع عبر PayPal مباشرة ($119). بعد إتمام الدفع، ستستلم رابطاً عبر الإيميل لحجز الموعد واستمارة التقييم.',
    },
    {
      question: 'متى أستلم الخطة؟',
      answer: 'خلال 24 ساعة من انتهاء الجلسة، تستلم ملف PDF كامل يحتوي على خطتك المخصصة. ثم لديك 7 أيام دعم عبر واتساب (نافذتين للرد يومياً).',
    },
  ];

  return (
    <div className="landing-page" style={{ background: 'var(--bg-page)' }}>
      {/* Header */}
      <header className="header-nav">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <div className="logo" style={{ fontFamily: 'SF Mono, monospace', fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            دكتور معاوية
          </div>
          <div className="nav-actions">
            <Button onClick={openWhatsApp} className="btn-secondary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <MessageCircle size={16} />
              واتساب
            </Button>
            <Button onClick={scrollToBooking} className="btn-primary">
              احجز الآن
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-announcement">
            <Shield size={14} />
            <span>يقودها طبيب باطنية مقيم • محدودة ل 6 مقاعد أسبوعياً</span>
          </div>
          
          <h1 className="heading-hero" style={{ marginBottom: '1.2rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            اكتشف العوامل الخفية التي تستنزف طاقتك وتركيزك وشكل جسمك وإنتاجيتك — واصلحها بخطة 30 يوم
          </h1>

          {/* Doctor Image */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_gulf-exec-wellness/artifacts/6c16u5hp_Untitled.png"
              alt="دكتور معاوية"
              style={{ 
                width: '70px', 
                height: '70px', 
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid white',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
              }}
            />
            <div style={{ textAlign: 'right' }}>
              <p className="body-medium" style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                د. معاوية
              </p>
              <p className="body-small" style={{ color: 'var(--text-muted)' }}>
                طبيب باطنية مقيم
              </p>
            </div>
          </div>
          
          <p className="body-large" style={{ marginBottom: '2rem', color: 'var(--text-secondary)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            جلسة تقييم صحة وأداء يقودها طبيب للرجال المشغولين في الإمارات والخليج
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {features.map((feature, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <feature.icon size={20} color="#4D4D4D" />
                <span className="body-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button onClick={scrollToBooking} className="btn-primary" style={{ minWidth: '200px' }}>
              احجز جلسة التقييم
            </Button>
            <Button onClick={openWhatsApp} className="btn-secondary" style={{ minWidth: '200px', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
              <MessageCircle size={18} />
              تواصل واتساب
            </Button>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
              ))}
            </div>
            <span className="body-small" style={{ color: 'var(--text-muted)' }}>
              معدل رضا 4.9/5 من العشرات من العملاء
            </span>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}>
          <ChevronDown size={32} color="var(--text-muted)" style={{ animation: 'bounce 2s infinite' }} />
        </div>
      </section>

      {/* For Who Section */}
      <section style={{ padding: '5rem 1.2rem', background: 'var(--bg-card)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
              هذا التقييم مصمم خصيصاً لك إذا كنت:
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
                  borderRadius: '50%', 
                  background: 'var(--accent-grey-200)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontFamily: 'SF Mono, monospace',
                  fontWeight: 600,
                  color: 'var(--text-primary)'
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
            <Button onClick={scrollToBooking} className="btn-primary" style={{ minWidth: '250px' }}>
              نعم، هذا أنا - احجز الآن
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section style={{ padding: '5rem 1.2rem', background: 'var(--bg-section)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
              نتائج العملاء
            </h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              رجال أعمال وموظفين أصحاب مسؤوليات عالية حولوا صحتهم وأدائهم
            </p>
          </div>

          <div className="voice-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="voice-card accent-purple" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="#FFB800" color="#FFB800" />
                  ))}
                </div>
                <p className="body-medium" style={{ lineHeight: 1.7, flex: 1 }}>
                  "{testimonial.text}"
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <div className="body-medium" style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
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
      <section style={{ padding: '5rem 1.2rem', background: 'var(--bg-card)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="heading-1" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            الأسئلة الشائعة
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="heading-3" style={{ textAlign: 'right' }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="body-medium" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
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
          <h2 className="heading-hero" style={{ marginBottom: '1rem' }}>
            جاهز لاستعادة طاقتك وتركيزك؟
          </h2>
          <p className="body-large" style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            فقط 6 مقاعد متاحة أسبوعياً • $119 USD
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button onClick={scrollToBooking} className="btn-primary" style={{ minWidth: '200px' }}>
              احجز الآن
            </Button>
            <Button onClick={openWhatsApp} className="btn-secondary" style={{ minWidth: '200px', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
              <MessageCircle size={18} />
              اكتب "تقييم"
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 1.2rem', background: 'var(--text-primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <p className="body-small" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>
            هذه خدمة تعليم صحي وتوجيه، وليست بديلاً عن التشخيص أو العلاج الطبي المباشر.
          </p>
          <p className="caption" style={{ color: 'rgba(255,255,255,0.5)' }}>
            © 2025 دكتور معاوية. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
    </div>
  );
};

export default Landing;
