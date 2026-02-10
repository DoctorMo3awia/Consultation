import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { CheckCircle2, MessageCircle, Clock, FileText, Video, MessageSquare, Calendar, Shield, TrendingUp } from 'lucide-react';

const Offer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  const goToBooking = () => {
    navigate('/booking');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/971555519451?text=تقييم', '_blank');
  };

  const deliverables = [
    {
      icon: Video,
      title: 'جلسة 45 دقيقة عبر Google Meet',
      description: 'استشارة شاملة مع طبيب باطنية مقيم، نناقش أعراضك، نمط حياتك، وأهدافك الصحية',
    },
    {
      icon: FileText,
      title: 'مراجعة التحاليل المخبرية',
      description: 'بناءً على التقييم، سيتم تحديد التحاليل اللازمة لحالتك. إذا كان لديك تحاليل حديثة، سنقوم بمراجعتها وتفسيرها بوضوح.',
    },
    {
      icon: TrendingUp,
      title: 'خطة 30 يوم طبية متكاملة',
      description: 'استراتيجية نوم + بروتوكول كافيين + قواعد تغذية للمطاعم والعشاء + خطة تمارين بأقل جرعة فعالة + خطة سفر + بروتوكول تركيز',
    },
    {
      icon: FileText,
      title: 'ملف PDF خلال 24 ساعة',
      description: 'ملخص شامل لكل ما تم مناقشته مع خطتك المخصصة، جاهز للتطبيق فوراً',
    },
    {
      icon: MessageSquare,
      title: '7 أيام دعم عبر واتساب',
      description: 'نافذتين للرد يومياً للإجابة على أسئلتك ومتابعة تقدمك',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'ادفع عبر PayPal',
      description: 'اضغط "احجز الآن" وأكمل الدفع عبر PayPal ($119)',
    },
    {
      step: '2',
      title: 'اختر موعدك واملأ الاستمارة',
      description: 'ستستلم رابطاً عبر الإيميل لحجز الموعد واستمارة التقييم',
    },
    {
      step: '3',
      title: 'الجلسة والخطة',
      description: '45 دقيقة عبر Google Meet + تستلم خطتك الكاملة خلال 24 ساعة + 7 أيام دعم',
    },
  ];

  const differentiators = [
    'يقودها طبيب باطنية مقيم - ليست استشارة مدرب عام',
    'مصممة خصيصاً لنمط حياة الخليج (السفر، المطاعم، المجالس، العشاء المتأخر)',
    'بروتوكول الحد الأدنى الفعال - لا وقت مهدر، فقط ما يعمل',
    'بناءً على التقييم، يتم تحديد الفحوصات اللازمة لحالتك',
    'خطة تعمل مع جدولك الحقيقي، لا ضده',
    'دعم مباشر عبر واتساب لمدة 7 أيام',
  ];

  return (
    <div data-testid="offer-page" style={{ background: 'var(--bg-page)', paddingTop: '72px' }}>
      {/* Header */}
      <header className="header-nav">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', cursor: 'pointer', letterSpacing: '0.01em' }} onClick={() => navigate('/')}>
            دكتور معاوية
          </div>
          <div className="nav-actions">
            <Button data-testid="offer-whatsapp-btn" onClick={openWhatsApp} className="btn-outline-light" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', padding: '0.5rem 1rem' }}>
              <MessageCircle size={16} />
              واتساب
            </Button>
            <Button data-testid="offer-book-btn" onClick={goToBooking} className="btn-light" style={{ padding: '0.5rem 1.2rem' }}>
              احجز الآن
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" style={{ minHeight: '70vh', paddingTop: '6rem' }}>
        <div className="hero-content">
          <div className="hero-announcement">
            <Calendar size={14} />
            <span>متبقي 4 مقاعد هذا الأسبوع</span>
          </div>
          
          <h1 className="heading-hero" style={{ marginBottom: '1rem', color: 'white' }}>
            تقييم الصحة والأداء التنفيذي
          </h1>
          
          <p className="body-large" style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            جلسة 45 دقيقة يقودها طبيب + خطة 30 يوم طبية + 7 أيام دعم واتساب
          </p>

          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'baseline', 
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '1rem 2.5rem',
            borderRadius: '0.75rem',
            marginBottom: '2rem',
            border: '1px solid rgba(255,255,255,0.15)'
          }}>
            <span style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 700, color: 'white' }}>
              $119
            </span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>
              USD
            </span>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Button data-testid="offer-hero-book-btn" onClick={goToBooking} className="btn-light" style={{ minWidth: '220px' }}>
              احجز جلستك الآن
            </Button>
            <Button onClick={openWhatsApp} className="btn-outline-light" style={{ minWidth: '220px', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
              <MessageCircle size={18} />
              اكتب "تقييم"
            </Button>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
            <Clock size={14} style={{ display: 'inline', marginLeft: '0.25rem' }} />
            محدودة ل 6 مقاعد أسبوعياً فقط
          </p>
        </div>
      </section>

      {/* Meet Doctor Section */}
      <section style={{ padding: '5rem 1.2rem', background: 'var(--bg-card)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem', textAlign: 'center' }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_gulf-exec-wellness/artifacts/6c16u5hp_Untitled.png"
              alt="Doctor"
              data-testid="offer-doctor-image"
              style={{ 
                width: '260px', 
                height: '260px', 
                borderRadius: '1rem',
                objectFit: 'cover',
                boxShadow: '0 12px 40px rgba(15, 23, 42, 0.12)',
                border: '4px solid white'
              }}
            />
            <div style={{ maxWidth: '700px' }}>
              <div style={{ 
                display: 'inline-block',
                background: 'var(--accent-blue-200)',
                padding: '0.4rem 1rem',
                borderRadius: '0.4rem',
                marginBottom: '1rem'
              }}>
                <span style={{ color: 'var(--blue-elegant)', fontSize: '0.85rem', fontWeight: 600 }}>
                  طبيب باطنية مقيم
                </span>
              </div>
              <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
                استشارة طبية متخصصة، ليست نصائح عامة
              </h2>
              <p className="body-large" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                هذه ليست استشارة مدرب لياقة عام. أنت تحصل على تقييم طبي شامل من طبيب باطنية مقيم متخصص في صحة الرجال، التحاليل المخبرية، واستراتيجيات الأداء العالي.
              </p>
              <p className="body-medium" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                الفهم العميق للفسيولوجيا، الهرمونات، التحاليل، والطب الوقائي - مع خبرة في نمط حياة رواد الأعمال والمدراء التنفيذيين في الخليج.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section style={{ padding: '5rem 1.2rem', background: 'var(--bg-section)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-divider" />
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
              ماذا تحصل بالضبط؟
            </h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              حزمة تقييم طبية شاملة مصممة للرجال المشغولين
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {deliverables.map((item, idx) => (
              <div 
                key={idx} 
                className="voice-card"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1rem',
                  height: '100%',
                  borderTop: '3px solid var(--blue-elegant)'
                }}
              >
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '0.5rem',
                  background: 'var(--accent-blue-200)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <item.icon size={24} color="var(--blue-elegant)" />
                </div>
                <h3 className="heading-3" style={{ marginBottom: '0.25rem' }}>
                  {item.title}
                </h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '5rem 1.2rem', background: 'var(--bg-card)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-divider" />
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
              كيف يعمل؟
            </h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              عملية بسيطة من 3 خطوات
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {howItWorks.map((item, idx) => (
              <div 
                key={idx}
                style={{ 
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'flex-start',
                  padding: '2rem',
                  background: 'var(--bg-section)',
                  borderRadius: '0.75rem',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div style={{ 
                  minWidth: '56px',
                  height: '56px',
                  borderRadius: '0.5rem',
                  background: 'var(--blue-shine)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(30, 64, 175, 0.25)'
                }}>
                  {item.step}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="heading-2" style={{ marginBottom: '0.75rem' }}>
                    {item.title}
                  </h3>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section style={{ padding: '5rem 1.2rem', background: 'var(--bg-section)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-divider" />
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
              لماذا هذا التقييم مختلف؟
            </h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              مصمم خصيصاً للمدراء التنفيذيين ورواد الأعمال في الخليج
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {differentiators.map((item, idx) => (
              <div 
                key={idx}
                className="voice-card"
                style={{ 
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start'
                }}
              >
                <CheckCircle2 size={22} color="var(--blue-elegant)" style={{ minWidth: '22px', marginTop: '0.2rem' }} />
                <p className="body-medium" style={{ lineHeight: 1.7 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="hero-section" style={{ minHeight: '60vh' }}>
        <div className="hero-content">
          <div style={{ 
            background: 'white',
            padding: '3rem 2.5rem',
            borderRadius: '1rem',
            maxWidth: '600px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'baseline', 
                gap: '0.5rem',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)' }}>$119</span>
                <span className="body-medium" style={{ color: 'var(--text-muted)' }}>USD</span>
              </div>
              <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
                استثمار لمرة واحدة في صحتك وأدائك
              </p>
            </div>

            <div style={{ 
              padding: '1.5rem',
              background: 'var(--accent-blue-200)',
              borderRadius: '0.75rem',
              marginBottom: '2rem',
              border: '1px solid rgba(30, 64, 175, 0.1)'
            }}>
              <p className="body-medium" style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--blue-elegant)' }}>ملاحظة مهمة:</strong> بعد الدفع عبر PayPal، ستستلم رابطاً عبر الإيميل لحجز الموعد واستمارة التقييم.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Button data-testid="offer-cta-book-btn" onClick={goToBooking} className="btn-primary" style={{ width: '100%', padding: '1rem' }}>
                احجز جلستك - $119
              </Button>
              <Button onClick={openWhatsApp} className="btn-secondary" style={{ width: '100%', padding: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
                <MessageCircle size={18} />
                أسئلة؟ تواصل واتساب
              </Button>
            </div>

            <p className="body-small" style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
              <Shield size={14} style={{ display: 'inline', marginLeft: '0.25rem' }} />
              محدودة ل 6 مقاعد أسبوعياً · احجز الآن قبل نفاد الأماكن
            </p>
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
    </div>
  );
};

export default Offer;
