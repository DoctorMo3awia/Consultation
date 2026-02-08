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
    window.open('https://wa.me/971XXXXXXXXX?text=تقييم', '_blank');
  };

  const deliverables = [
    {
      icon: Video,
      title: 'جلسة 60 دقيقة عبر Google Meet',
      description: 'استشارة شاملة مع طبيب باطنية مقيم باللغة العربية، نناقش أعراضك، نمط حياتك، وأهدافك الصحية',
    },
    {
      icon: FileText,
      title: 'مراجعة التحاليل المخبرية',
      description: 'تفسير واضح لنتائج تحاليلك الحالية، أو نقترح 5 فحوصات أساسية فقط (ليس عشرات التحاليل غير الضرورية)',
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
      title: 'املأ نموذج الحجز',
      description: 'استبيان سريع عن صحتك ونمط حياتك + اختر 2-3 أوقات مفضلة للجلسة',
    },
    {
      step: '2',
      title: 'الدفع وتأكيد الموعد',
      description: 'حول المبلغ وأرسل إثبات التحويل عبر واتساب. نرسل لك رابط Google Meet فوراً',
    },
    {
      step: '3',
      title: 'الجلسة والخطة',
      description: '60 دقيقة نناقش كل شيء + تستلم خطتك الكاملة خلال 24 ساعة + 7 أيام دعم',
    },
  ];

  const differentiators = [
    'يقودها طبيب باطنية مقيم - ليست استشارة مدرب عام',
    'مصممة خصيصاً لنمط حياة الخليج (السفر، المطاعم، المجالس، العشاء المتأخر)',
    'بروتوكول الحد الأدنى الفعال - لا وقت مهدر، فقط ما يعمل',
    '5 مقاييس صحية أساسية فقط - ليس عشرات الفحوصات المربكة',
    'خطة تعمل مع جدولك الحقيقي، لا ضده',
    'دعم مباشر عبر واتساب لمدة 7 أيام',
  ];

  return (
    <div className="offer-page" style={{ background: 'var(--bg-page)', paddingTop: '80px' }}>
      {/* Header */}
      <header className="header-nav">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <div className="logo" style={{ fontFamily: 'SF Mono, monospace', fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', cursor: 'pointer' }} onClick={() => navigate('/')}>
            Dr. Health Audit
          </div>
          <div className="nav-actions">
            <Button onClick={openWhatsApp} className="btn-secondary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <MessageCircle size={16} />
              واتساب
            </Button>
            <Button onClick={goToBooking} className="btn-primary">
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
          
          <h1 className="heading-hero" style={{ marginBottom: '1rem' }}>
            تقييم الصحة والأداء التنفيذي
          </h1>
          
          <p className="body-large" style={{ marginBottom: '2rem', color: 'var(--text-secondary)', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            جلسة 60 دقيقة يقودها طبيب + خطة 30 يوم طبية + 7 أيام دعم واتساب
          </p>

          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'baseline', 
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.4)',
            padding: '1rem 2rem',
            borderRadius: '2rem',
            marginBottom: '2rem',
            backdropFilter: 'blur(4px)'
          }}>
            <span className="heading-1" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 600 }}>
              $119
            </span>
            <span className="body-medium" style={{ color: 'var(--text-muted)' }}>
              USD
            </span>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Button onClick={goToBooking} className="btn-primary" style={{ minWidth: '220px' }}>
              احجز جلستك الآن
            </Button>
            <Button onClick={openWhatsApp} className="btn-secondary" style={{ minWidth: '220px', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
              <MessageCircle size={18} />
              اكتب "تقييم"
            </Button>
          </div>

          <p className="body-small" style={{ color: 'var(--text-muted)' }}>
            <Clock size={14} style={{ display: 'inline', marginLeft: '0.25rem' }} />
            محدودة ل 6 مقاعد أسبوعياً فقط
          </p>
        </div>
      </section>

      {/* Meet Doctor Section */}
      <section style={{ padding: '5rem 1.2rem', background: 'var(--bg-card)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', textAlign: 'center' }}>
              <div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_gulf-exec-wellness/artifacts/6c16u5hp_Untitled.png"
                  alt="Doctor"
                  style={{ 
                    width: '280px', 
                    height: '280px', 
                    borderRadius: '1rem',
                    objectFit: 'cover',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
                  }}
                />
              </div>
              <div style={{ maxWidth: '700px' }}>
                <div style={{ 
                  display: 'inline-block',
                  background: 'var(--accent-purple-200)',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  marginBottom: '1rem'
                }}>
                  <span className="mono-text" style={{ color: 'var(--text-primary)' }}>
                    طبيب باطنية مقيم
                  </span>
                </div>
                <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
                  استشارة طبية متخصصة، ليست نصائح عامة
                </h2>
                <p className="body-large" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  هذه ليست استشارة مدرب لياقة عام. أنت تحصل على تقييم طبي شامل من طبيب باطنية مقيم متخصص في صحة الرجال، التحاليل المخبرية، واستراتيجيات الأداء العالي.
                </p>
                <p className="body-medium" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  الفهم العميق للفسيولوجيا، الهرمونات، التحاليل، والطب الوقائي - مع خبرة في نمط حياة رواد الأعمال والمدراء التنفيذيين في الخليج.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section style={{ padding: '5rem 1.2rem', background: 'var(--bg-section)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
              ماذا تحصل بالضبط؟
            </h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              حزمة تقييم طبية شاملة مصممة للرجال المشغولين
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {deliverables.map((item, idx) => (
              <div 
                key={idx} 
                className="voice-card accent-blue"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1rem',
                  height: '100%'
                }}
              >
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <item.icon size={24} color="var(--text-primary)" />
                </div>
                <h3 className="heading-3" style={{ marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>
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
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
              كيف يعمل؟
            </h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              عملية بسيطة من 3 خطوات
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {howItWorks.map((item, idx) => (
              <div 
                key={idx}
                style={{ 
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'flex-start',
                  padding: '2rem',
                  background: 'var(--bg-section)',
                  borderRadius: '1rem'
                }}
              >
                <div style={{ 
                  minWidth: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'var(--text-primary)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  fontFamily: 'SF Mono, monospace'
                }}>
                  {item.step}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="heading-2" style={{ marginBottom: '0.75rem' }}>
                    {item.title}
                  </h3>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
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
                <CheckCircle2 size={24} color="#4D4D4D" style={{ minWidth: '24px', marginTop: '0.25rem' }} />
                <p className="body-medium" style={{ lineHeight: 1.6 }}>
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
            background: 'var(--bg-card)',
            padding: '3rem 2rem',
            borderRadius: '1.5rem',
            maxWidth: '600px',
            boxShadow: '0 12px 48px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'baseline', 
                gap: '0.5rem',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '3rem', fontWeight: 600 }}>$119</span>
                <span className="body-medium" style={{ color: 'var(--text-muted)' }}>USD</span>
              </div>
              <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
                استثمار لمرة واحدة في صحتك وأدائك
              </p>
            </div>

            <div style={{ 
              padding: '1.5rem',
              background: 'var(--accent-orange-200)',
              borderRadius: '1rem',
              marginBottom: '2rem'
            }}>
              <p className="body-medium" style={{ lineHeight: 1.7 }}>
                <strong>ملاحظة مهمة:</strong> الدفع عبر تحويل بنكي. بعد تعبئة النموذج، سترسل تفاصيل التحويل. يتم تأكيد الموعد بعد إرسال إثبات التحويل عبر واتساب.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Button onClick={goToBooking} className="btn-primary" style={{ width: '100%', padding: '1rem' }}>
                احجز جلستك - $119
              </Button>
              <Button onClick={openWhatsApp} className="btn-secondary" style={{ width: '100%', padding: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
                <MessageCircle size={18} />
                أسئلة؟ تواصل واتساب
              </Button>
            </div>

            <p className="body-small" style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
              <Shield size={14} style={{ display: 'inline', marginLeft: '0.25rem' }} />
              محدودة ل 6 مقاعد أسبوعياً • احجز الآن قبل نفاد الأماكن
            </p>
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
            © 2025 Dr. Health Audit. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Offer;
