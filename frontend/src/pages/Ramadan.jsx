import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { MessageCircle, Moon, AlertCircle, Coffee, Utensils, Activity, Clock, Brain, Zap } from 'lucide-react';

const Ramadan = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/971555519451?text=رمضان', '_blank');
  };

  const goToBooking = () => {
    navigate('/booking');
  };

  const ramadanMistakes = [
    {
      icon: Clock,
      title: 'انقلاب النوم الكامل',
      description: 'السهر حتى الفجر والنوم طول النهار يدمر الهرمونات (كورتيزول، تستوستيرون، هرمون النمو) وينهي طاقتك وتركيزك.',
      fix: 'نظام نوم محسّن لرمضان يحافظ على هرموناتك',
    },
    {
      icon: Coffee,
      title: 'توقيت الكافيين الخاطئ',
      description: 'كافيين بعد الإفطار مباشرة أو قبل النوم = أرق وقلق وطاقة متقلبة طول اليوم التالي.',
      fix: 'بروتوكول كافيين مخصص لساعات الصيام',
    },
    {
      icon: Utensils,
      title: 'إفطار ثقيل = انهيار طاقة',
      description: 'تعبئة المعدة بكميات ضخمة من الطعام الثقيل يسبب هبوط سكر، نعاس، وضعف هضم.',
      fix: 'استراتيجية إفطار ذكية تعطيك طاقة مستدامة',
    },
    {
      icon: Zap,
      title: 'نقص السوائل والأملاح',
      description: 'الجفاف ونقص الإلكتروليتات = صداع، تعب، ضعف تركيز، تشنجات عضلية.',
      fix: 'خطة ترطيب وأملاح محسوبة بدقة',
    },
    {
      icon: Activity,
      title: 'التوقف الكامل عن الحركة',
      description: 'عدم التمرين في رمضان = خسارة عضلات، زيادة دهون، ضعف عام.',
      fix: 'تمارين الحد الأدنى الفعال المناسبة للصيام',
    },
    {
      icon: Clock,
      title: 'توقيت التمرين العشوائي',
      description: 'التمرين في وقت خاطئ يستنزف طاقتك ويضعف أداءك ونتائجك.',
      fix: 'أفضل 2-3 أوقات للتمرين حسب جدولك',
    },
    {
      icon: Brain,
      title: 'التوتر + الدعوات الاجتماعية',
      description: 'الضغط من العزايم والمجالس والعشاء المتأخر يخرّب أي خطة صحية.',
      fix: 'استراتيجيات عملية للمناسبات والعزايم',
    },
    {
      icon: AlertCircle,
      title: 'تقلبات المزاج والعصبية',
      description: 'الجوع + قلة النوم + الضغط = عصبية وتقلبات مزاج تؤثر على عملك وعلاقاتك.',
      fix: 'بروتوكول استقرار مزاج مبني على العلم',
    },
  ];

  return (
    <div className="ramadan-page" style={{ background: 'var(--bg-page)', paddingTop: '80px' }}>
      {/* Header */}
      <header className="header-nav">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <div className="logo" style={{ fontFamily: 'SF Mono, monospace', fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', cursor: 'pointer' }} onClick={() => navigate('/')}>
            دكتور معاوية
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
      <section className="hero-section" style={{ background: 'var(--alternate-gradient-hero-warm)' }}>
        <div className="hero-content">
          <div className="hero-announcement" style={{ background: 'rgba(152, 125, 156, 0.2)' }}>
            <Moon size={14} />
            <span>عرض رمضان الخاص • خطة 30 يوم لأعلى صحة وأداء في رمضان</span>
          </div>
          
          <h1 className="heading-hero" style={{ marginBottom: '1rem' }}>
            أغلب رواد الأعمال يطلعوا من رمضان أسوأ صحياً
          </h1>
          
          <p className="body-large" style={{ marginBottom: '2rem', color: 'var(--text-secondary)', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.8 }}>
            السبب مو الصيام... بل <strong>8 أخطاء</strong> تدمر طاقتك، تركيزك، جسمك، ومزاجك طول الشهر
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Button onClick={goToBooking} className="btn-primary" style={{ minWidth: '220px' }}>
              احجز استشارة رمضان
            </Button>
            <Button onClick={openWhatsApp} className="btn-secondary" style={{ minWidth: '220px', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
              <MessageCircle size={18} />
              اكتب "رمضان"
            </Button>
          </div>

          <p className="body-medium" style={{ color: 'var(--text-muted)' }}>
            جلسة 60 دقيقة + خطة رمضان كاملة مخصصة لك • $119
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section style={{ padding: '5rem 1.2rem', background: 'var(--bg-card)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
              الحقيقة القاسية:
            </h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
              معظم الناس يدخلون رمضان بهدف تحسين صحتهم... لكن يطلعون منه بـ <strong>زيادة وزن، طاقة أقل، تركيز أسوأ، ومزاج متقلب</strong>.
            </p>
          </div>

          <div style={{ 
            background: 'var(--accent-pink-200)',
            padding: '2.5rem 2rem',
            borderRadius: '1.5rem',
            marginBottom: '2rem'
          }}>
            <p className="body-large" style={{ lineHeight: 1.9, textAlign: 'center', fontWeight: 500 }}>
              المشكلة مو الصيام نفسه... المشكلة في <strong>8 أخطاء شائعة</strong> تحوّل رمضان من فرصة ذهبية للصحة إلى شهر من التدهور الجسدي والذهني.
            </p>
          </div>

          <p className="body-large" style={{ textAlign: 'center', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            لكن إذا عرفت <strong>كيف تتجنب هذه الأخطاء</strong>، رمضان ممكن يكون أفضل شهر لصحتك، طاقتك، تركيزك، وشكل جسمك.
          </p>
        </div>
      </section>

      {/* 8 Mistakes */}
      <section style={{ padding: '5rem 1.2rem', background: 'var(--bg-section)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
              الأخطاء الـ 8 التي تدمر صحتك في رمضان
            </h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              وكيف تصلحها بخطة طبية مخصصة
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {ramadanMistakes.map((mistake, idx) => (
              <div 
                key={idx}
                className="voice-card"
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  background: idx % 4 === 0 ? 'var(--accent-purple-200)' : 
                             idx % 4 === 1 ? 'var(--accent-blue-200)' : 
                             idx % 4 === 2 ? 'var(--accent-orange-200)' : 
                             'var(--accent-green-200)'
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
                  <mistake.icon size={24} color="var(--text-primary)" />
                </div>
                
                <div>
                  <h3 className="heading-3" style={{ marginBottom: '0.75rem' }}>
                    {mistake.title}
                  </h3>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {mistake.description}
                  </p>
                  <div style={{ 
                    padding: '0.75rem 1rem',
                    background: 'rgba(255, 255, 255, 0.5)',
                    borderRadius: '0.75rem',
                    borderRight: '3px solid var(--text-primary)'
                  }}>
                    <p className="body-small" style={{ fontWeight: 500, color: 'var(--text-primary)' }}>
                      ✓ الحل: {mistake.fix}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section style={{ padding: '5rem 1.2rem', background: 'var(--bg-card)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
              استشارة رمضان الطبية المتخصصة
            </h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              خطة 30 يوم مبنية على حالتك الصحية، تحاليلك، ونمط حياتك
            </p>
          </div>

          <div style={{ 
            background: 'var(--accent-blue-200)',
            padding: '3rem 2rem',
            borderRadius: '1.5rem',
            marginBottom: '3rem'
          }}>
            <h3 className="heading-2" style={{ marginBottom: '2rem', textAlign: 'center' }}>
              ماذا تحصل في استشارة رمضان:
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              {[
                'جلسة 60 دقيقة مع طبيب باطنية متخصص في صحة الرجال',
                'تحليل شامل لنمط حياتك وتحدياتك الخاصة في رمضان',
                'بناءً على التقييم، سيتم تحديد التحاليل اللازمة لحالتك',
                'بروتوكول نوم محسّن للصيام (حتى مع السهر والدوام)',
                'استراتيجية كافيين دقيقة لأعلى طاقة وتركيز',
                'خطة إفطار + سحور + وجبات ذكية (مطاعم، عزايم، سفر)',
                'توقيت التمارين الأمثل + برنامج الحد الأدنى الفعال',
                'بروتوكول ترطيب وأملاح لتجنب الجفاف والصداع',
                'استراتيجيات للتعامل مع العزايم والمجالس',
                'ملف PDF كامل خلال 24 ساعة + 7 أيام دعم واتساب',
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    minWidth: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--text-primary)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    marginTop: '0.125rem'
                  }}>
                    ✓
                  </div>
                  <p className="body-medium" style={{ flex: 1, lineHeight: 1.7 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ 
            background: 'var(--accent-orange-200)',
            padding: '2rem',
            borderRadius: '1rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <p className="heading-2" style={{ marginBottom: '0.5rem' }}>
              $119 فقط
            </p>
            <p className="body-medium" style={{ color: 'var(--text-muted)' }}>
              استثمار لمرة واحدة لأفضل رمضان صحياً في حياتك
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button onClick={goToBooking} className="btn-primary" style={{ minWidth: '220px', padding: '1rem 2rem' }}>
                احجز استشارة رمضان
              </Button>
              <Button onClick={openWhatsApp} className="btn-secondary" style={{ minWidth: '220px', padding: '1rem 2rem', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
                <MessageCircle size={18} />
                اكتب "رمضان"
              </Button>
            </div>
            <p className="body-small" style={{ color: 'var(--text-muted)', marginTop: '1.5rem' }}>
              محدودة ل 6 مقاعد أسبوعياً فقط
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="hero-section" style={{ minHeight: '60vh', background: 'var(--alternate-gradient-hero-warm)' }}>
        <div className="hero-content">
          <h2 className="heading-hero" style={{ marginBottom: '1.5rem' }}>
            النتيجة؟
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.9 }}>
            بدل ما تطلع من رمضان <strong>متعب، زايد وزن، ومتوتر</strong>... تطلع منه بـ <strong>طاقة عالية، تركيز أفضل، جسم محسّن، ومزاج مستقر</strong>.
          </p>
          <Button onClick={goToBooking} className="btn-primary" style={{ minWidth: '250px', padding: '1rem 2rem' }}>
            ابدأ الآن - $119
          </Button>
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
    </div>
  );
};

export default Ramadan;
