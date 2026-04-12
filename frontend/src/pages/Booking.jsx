import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { MessageCircle, CheckCircle2, Shield, Clock } from 'lucide-react';

const Booking = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/971555519451?text=تقييم', '_blank');
  };

  const openPayPal = () => {
    window.open('https://www.paypal.com/ncp/payment/2BKK55L2RNQHY', '_blank');
  };

  const valueStack = [
    {
      title: 'تقييم شامل + خطة طبية مخصصة لك',
      desc: 'جلسة تقييم أولية شاملة عبر Google Meet مع طبيب باطنية مقيم + خطة متكاملة (تغذية، تمارين، نوم، مكملات)',
      oldPrice: '$500',
    },
    {
      title: 'تحليل شامل للتحاليل المخبرية',
      desc: 'نحلل تحاليلك ونتابع التغيرات طوال فترة البرنامج',
      oldPrice: '$300',
    },
    {
      title: 'متابعة تقدمك لمدة 3 أشهر كاملة',
      desc: 'هذا الفرق الحقيقي — نراقب نتائجك ونتأكد إنك ماشي على الطريق الصح',
      oldPrice: '$1,200',
    },
    {
      title: 'تعديل الخطة حسب استجابة جسمك',
      desc: 'نعدّل التغذية والتمارين والمكملات بناءً على تقدمك ونتائجك الفعلية',
      oldPrice: '$400',
    },
    {
      title: 'دعم مستمر عبر واتساب لمدة 3 أشهر',
      desc: 'تواصل مباشر مع دكتور معاوية — أي سؤال نجاوبك',
      oldPrice: '$600',
    },
  ];

  const steps = [
    { num: '1', title: 'سجّل الآن', desc: 'اضغط الزر وأكمل الدفع — يأخذ دقيقة واحدة' },
    { num: '2', title: 'استلم رابط الحجز', desc: 'فوراً على إيميلك — رابط لاختيار موعد أول جلسة + استمارة التقييم' },
    { num: '3', title: 'املأ الاستمارة واحجز', desc: 'اختر الوقت المناسب لك واملأ استمارة شاملة عن حالتك' },
    { num: '4', title: 'ابدأ البرنامج', desc: 'تبدأ أول جلسة عبر Google Meet — ثم متابعة مستمرة لمدة 3 أشهر' },
  ];

  const faqs = [
    {
      q: 'أنا عندي دكتور، ليش أحتاج هالبرنامج؟',
      a: 'دكتور معاوية ما يستبدل دكتورك — هو يعطيك الصورة الكاملة. أغلب الأطباء يعطونك 5 دقائق ويعطونك خطة بدون متابعة. هنا تحصل على خطة شاملة + متابعة شخصية لمدة 3 أشهر كاملة.',
    },
    {
      q: '$680 غالي...',
      a: 'كم صرفت على تحاليل وزيارات ما أعطتك نتيجة؟ هنا دكتور معاوية يشتغل معك بشكل مباشر 3 أشهر كاملة — يوفر عليك آلاف الدولارات ومئات الساعات. وإذا ما عجبك، فلوسك ترجع.',
    },
    {
      q: 'هل الجلسات أونلاين فقط؟',
      a: 'نعم، عبر Google Meet. هذا يسمح لنا نخدم عملاء من أي مكان في العالم بنفس الجودة.',
    },
    {
      q: 'ما هو ضمان استرداد الأموال؟',
      a: 'إذا لم تستفد من البرنامج — نرد لك كامل المبلغ بلا أسئلة. نحن واثقون من النتائج.',
    },
  ];

  return (
    <div data-testid="booking-page" style={{ background: 'var(--bg-page)', paddingTop: '72px' }}>
      {/* Header */}
      <header className="header-nav">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', cursor: 'pointer', letterSpacing: '0.01em' }} onClick={() => navigate('/')}>
            دكتور معاوية
          </div>
          <div className="nav-actions">
            {/* Real scarcity badge */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '2rem',
              padding: '0.3rem 0.8rem',
              fontSize: '0.8rem',
              color: '#fbbf24'
            }}>
              <Clock size={12} />
              <span style={{ fontWeight: 600 }}>الأماكن محدودة</span>
            </div>
            <Button data-testid="booking-whatsapp-btn" onClick={openWhatsApp} className="btn-outline-light" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', padding: '0.5rem 1rem' }}>
              <MessageCircle size={16} />
              واتساب
            </Button>
          </div>
        </div>
      </header>

      {/* ===== HERO: PAIN HEADLINE ===== */}
      <section className="hero-section" style={{ minHeight: '50vh', paddingTop: '4rem', paddingBottom: '3rem' }}>
        <div className="hero-content">
          <div className="hero-announcement">
            <Clock size={14} />
            <span>الدكتور يشتغل معك بشكل مباشر · تحت اشراف طبيب باطنية مقيم</span>
          </div>

          <h1 className="heading-hero" style={{ marginBottom: '1.5rem', color: 'white', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            تعبان، مرهق، وما تعرف ليش؟
            <br />
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>
              خلّنا نحل المشكلة من جذورها.
            </span>
          </h1>

          <p className="body-large" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '580px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '1.5rem', lineHeight: 1.8 }}>
            أغلب الناس يقضون <strong style={{ color: 'white' }}>سنوات</strong> يدورون بين دكتور ودكتور، تحليل وتحليل، بدون أي خطة واضحة.
            النتيجة؟ فلوس ضايعة. وقت ضايع. وصحتك تزداد سوءاً.
          </p>

          <p className="body-large" style={{ color: 'white', fontWeight: 600, marginBottom: '2rem' }}>
            3 أشهر دكتور معاوية يشتغل معك شخصياً = تحوّل حقيقي ينقلك من الضياع إلى السيطرة الكاملة على صحتك.
          </p>

          <Button data-testid="hero-pay-btn" onClick={openPayPal} className="btn-light" style={{ minWidth: '280px', padding: '1rem 2rem', fontSize: '1rem' }}>
            سجّل الآن — $680
          </Button>

          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: '1rem' }}>
            <Shield size={14} style={{ display: 'inline', marginLeft: '0.25rem' }} />
            ضمان استرداد كامل · دفع آمن عبر PayPal
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 1.2rem 5rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>

          {/* ===== VALUE STACK ===== */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="section-divider" />
              <h2 className="heading-1" style={{ marginBottom: '0.5rem' }}>
                هذا ما ستحصل عليه:
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {valueStack.map((item, idx) => (
                <div 
                  key={idx} 
                  className="voice-card"
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    borderRight: '3px solid var(--blue-elegant)',
                    cursor: 'default'
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flex: 1 }}>
                    <CheckCircle2 size={22} color="var(--blue-elegant)" style={{ minWidth: '22px' }} />
                    <div>
                      <p className="body-medium" style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                        {item.title}
                      </p>
                      <p className="body-small" style={{ color: 'var(--text-muted)' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <span style={{ 
                    textDecoration: 'line-through', 
                    color: 'var(--text-muted)', 
                    fontSize: '0.95rem',
                    minWidth: '50px',
                    textAlign: 'left'
                  }}>
                    {item.oldPrice}
                  </span>
                </div>
              ))}
            </div>

            {/* Total vs Price */}
            <div style={{ 
              background: 'var(--accent-blue-200)',
              border: '1px solid rgba(30, 64, 175, 0.15)',
              borderRadius: '0.75rem',
              padding: '1.5rem 2rem',
              textAlign: 'center',
              marginTop: '1.5rem'
            }}>
              <p className="body-medium" style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                القيمة الإجمالية: <span style={{ textDecoration: 'line-through' }}>$3,000</span>
              </p>
              <p className="body-medium" style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                أنت تدفع اليوم فقط:
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', justifyContent: 'center' }}>
                <span style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--blue-elegant)' }}>$680</span>
                <span className="body-medium" style={{ color: 'var(--text-muted)' }}>USD</span>
              </div>
              <p className="body-small" style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                توفير 77% من القيمة الحقيقية
              </p>
            </div>
          </div>

          {/* ===== PRICE COMPARISON ===== */}
          <div style={{ 
            background: 'var(--bg-card)',
            border: '1px solid #e2e8f0',
            borderRadius: '0.75rem',
            padding: '1.5rem 2rem',
            marginBottom: '2.5rem',
            textAlign: 'center'
          }}>
            <p className="body-medium" style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', textDecoration: 'line-through' }}>
              متابعة شخصية مع طبيب خاص في الإمارات: $2,000–$4,000 لثلاث أشهر
            </p>
            <p className="body-medium" style={{ color: 'var(--blue-elegant)', fontWeight: 700 }}>
              هنا بـ $680 فقط: خطة مخصصة + متابعة تقدمك لمدة 3 أشهر كاملة ✓
            </p>
          </div>

          {/* ===== GUARANTEE ===== */}
          <div style={{ 
            background: '#f0fdf4',
            border: '1px solid #86efac',
            borderRadius: '0.75rem',
            padding: '2rem',
            textAlign: 'center',
            marginBottom: '2.5rem'
          }}>
            <Shield size={32} color="#166534" style={{ marginBottom: '0.75rem' }} />
            <h3 className="heading-3" style={{ color: '#166534', marginBottom: '0.75rem' }}>
              ضمان 100% — بدون مخاطرة
            </h3>
            <p className="body-medium" style={{ color: '#334155', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto' }}>
              إذا ما حسّيت إن البرنامج أعطاك قيمة حقيقية وخطة واضحة لصحتك، 
              <strong style={{ color: '#166534' }}> نرجع لك فلوسك كاملة. بدون أسئلة.</strong>
              <br />
              المخاطرة كلها علينا. أنت ما تخسر شي.
            </p>
          </div>

          {/* ===== SCARCITY + CTA ===== */}
          <div style={{ 
            background: 'var(--bg-card)',
            padding: '2.5rem 2rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 24px rgba(15, 23, 42, 0.06)',
            marginBottom: '2.5rem',
            textAlign: 'center',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--accent-blue-200)',
              border: '1px solid rgba(30, 64, 175, 0.15)',
              borderRadius: '2rem',
              padding: '0.5rem 1.2rem',
              marginBottom: '1.5rem'
            }}>
              <Clock size={14} color="var(--blue-elegant)" />
              <span className="body-small" style={{ color: 'var(--blue-elegant)', fontWeight: 600 }}>
                الأماكن محدودة — الدكتور يشتغل معك بشكل مباشر
              </span>
            </div>

            <p className="body-medium" style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '460px', marginLeft: 'auto', marginRight: 'auto' }}>
              لأن دكتور معاوية يشتغل مع كل عميل بشكل مباشر، يقدر يستقبل عدد محدود من العملاء. سجّل مكانك قبل ما تمتلئ الأماكن.
            </p>

            <Button 
              data-testid="pay-now-btn"
              onClick={openPayPal} 
              className="btn-primary" 
              style={{ 
                width: '100%',
                maxWidth: '400px',
                padding: '1.25rem 2rem',
                fontSize: '1.05rem',
                boxShadow: '0 6px 20px rgba(30, 64, 175, 0.35)'
              }}
            >
              سجّل الآن — $680
            </Button>

            <p className="body-small" style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem' }}>
              <Shield size={14} style={{ display: 'inline', marginLeft: '0.25rem' }} />
              دفع آمن عبر PayPal · تستلم رابط حجز أول جلسة فوراً
            </p>
          </div>

          {/* ===== HOW IT WORKS ===== */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="section-divider" />
              <h2 className="heading-1">
                كيف تبدأ (4 خطوات بسيطة):
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    display: 'flex', 
                    gap: '1.5rem', 
                    alignItems: 'flex-start',
                    padding: '1.5rem',
                    background: 'var(--bg-card)',
                    borderRadius: '0.75rem',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  <div style={{ 
                    minWidth: '44px',
                    height: '44px',
                    borderRadius: '0.5rem',
                    background: 'var(--blue-shine)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    boxShadow: '0 4px 12px rgba(30, 64, 175, 0.25)'
                  }}>
                    {step.num}
                  </div>
                  <div style={{ flex: 1, paddingTop: '0.2rem' }}>
                    <p className="body-medium" style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {step.title}
                    </p>
                    <p className="body-small" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== FAQ / OBJECTION HANDLING ===== */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="section-divider" />
              <h2 className="heading-1">
                أسئلة شائعة
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="voice-card"
                  style={{ cursor: 'default' }}
                >
                  <p className="body-medium" style={{ fontWeight: 600, color: 'var(--blue-elegant)', marginBottom: '0.5rem' }}>
                    {faq.q}
                  </p>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ===== FINAL CTA ===== */}
          <div className="hero-section" style={{ 
            minHeight: 'auto', 
            borderRadius: '1rem', 
            padding: '3rem 2rem',
            marginBottom: '2rem'
          }}>
            <div className="hero-content">
              <h2 className="heading-hero" style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
                صحتك ما تستنى.
              </h2>
              <p className="body-large" style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', lineHeight: 1.7 }}>
                كل يوم تأجّل = يوم ضايع من حياتك بأداء أقل مما تستحق.
                <br />
                احجز الآن. خذ خطوة وحدة. ودعنا نهتم بالباقي.
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button data-testid="final-pay-btn" onClick={openPayPal} className="btn-light" style={{ minWidth: '240px', padding: '1rem 2rem' }}>
                  سجّل الآن — $680
                </Button>
                <Button data-testid="booking-contact-btn" onClick={openWhatsApp} className="btn-outline-light" style={{ minWidth: '200px', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageCircle size={18} />
                  عندك سؤال؟ كلمنا واتساب
                </Button>
              </div>

              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <Shield size={16} color="rgba(255,255,255,0.8)" />
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}>
                  ضمان استرداد كامل — إذا لم تستفد من البرنامج، نرد لك كامل المبلغ بلا أسئلة
                </span>
              </div>
            </div>
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

      <style>{``}</style>
    </div>
  );
};

export default Booking;
