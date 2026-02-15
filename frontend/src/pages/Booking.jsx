import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { MessageCircle, CheckCircle2, Shield } from 'lucide-react';

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

  const benefits = [
    'جلسة 45 دقيقة مع طبيب باطنية مقيم',
    'مراجعة شاملة لحالتك الصحية',
    'خطة طبية مخصصة لك',
    'ملف PDF كامل خلال 24 ساعة',
    '7 أيام دعم عبر واتساب',
  ];

  const steps = [
    { num: '1', text: 'اضغط "ادفع الآن" وأكمل الدفع ($119)' },
    { num: '2', text: 'بعد إتمام الدفع، ستستلم رابطاً عبر البريد الإلكتروني لحجز الموعد واستمارة التقييم' },
    { num: '3', text: 'اختر الوقت المناسب واملأ استمارة التقييم' },
    { num: '4', text: 'ستستلم رابط Google Meet قبل 24 ساعة من موعد الجلسة' },
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
            <Button data-testid="booking-whatsapp-btn" onClick={openWhatsApp} className="btn-outline-light" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', padding: '0.5rem 1rem' }}>
              <MessageCircle size={16} />
              واتساب
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section style={{ padding: '3rem 1.2rem 5rem', minHeight: 'calc(100vh - 72px)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ 
              display: 'inline-block',
              background: 'var(--accent-blue-200)',
              padding: '0.4rem 1.2rem',
              borderRadius: '0.4rem',
              marginBottom: '1.5rem'
            }}>
              <span style={{ color: 'var(--blue-elegant)', fontSize: '0.85rem', fontWeight: 600 }}>
                الدفع والحجز
              </span>
            </div>
            
            <h1 className="heading-hero" style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
              استثمر في صحتك وأدائك
            </h1>
            
            <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              ادفع الآن واحصل على جلسة تقييم كاملة مع دكتور معاوية
            </p>
          </div>

          {/* Payment Section */}
          <div style={{ 
            background: 'var(--bg-card)',
            padding: '3rem 2rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 24px rgba(15, 23, 42, 0.06)',
            marginBottom: '2rem',
            textAlign: 'center',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ 
              display: 'flex',
              alignItems: 'baseline', 
              gap: '0.5rem',
              marginBottom: '2rem',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)' }}>$119</span>
              <span className="body-medium" style={{ color: 'var(--text-muted)' }}>USD</span>
            </div>

            <div style={{ 
              background: 'var(--bg-section)',
              padding: '2rem',
              borderRadius: '0.75rem',
              marginBottom: '2rem',
              textAlign: 'right',
              border: '1px solid #e2e8f0'
            }}>
              <h3 className="heading-3" style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'var(--blue-elegant)' }}>
                على ماذا ستحصل:
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {benefits.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <CheckCircle2 size={20} color="var(--blue-elegant)" style={{ minWidth: '20px' }} />
                    <p className="body-medium" style={{ flex: 1 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <Button 
                data-testid="pay-now-btn"
                onClick={openPayPal} 
                className="btn-primary" 
                style={{ 
                  width: '100%',
                  maxWidth: '400px',
                  padding: '1.25rem 2rem',
                  fontSize: '1rem'
                }}
              >
                ادفع الآن — $119
              </Button>
              
              <p className="body-small" style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
                <Shield size={14} style={{ display: 'inline', marginLeft: '0.25rem' }} />
                دفع آمن · ستستلم رابط لحجز الموعد واستمارة التقييم عبر الإيميل
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div style={{ 
            padding: '2rem',
            background: 'var(--accent-blue-200)',
            borderRadius: '0.75rem',
            marginBottom: '2rem',
            border: '1px solid rgba(30, 64, 175, 0.1)'
          }}>
            <h3 className="heading-3" style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'var(--blue-elegant)' }}>
              كيف يعمل:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'right' }}>
              {steps.map((step, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    minWidth: '32px',
                    height: '32px',
                    borderRadius: '0.4rem',
                    background: 'var(--blue-shine)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    boxShadow: '0 2px 8px rgba(30, 64, 175, 0.25)'
                  }}>
                    {step.num}
                  </div>
                  <p className="body-medium" style={{ flex: 1, lineHeight: 1.7, paddingTop: '0.2rem' }}>
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div style={{ textAlign: 'center' }}>
            <p className="body-medium" style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              لديك أسئلة قبل الدفع؟
            </p>
            <Button data-testid="booking-contact-btn" onClick={openWhatsApp} className="btn-secondary" style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center', margin: '0 auto' }}>
              <MessageCircle size={18} />
              تواصل عبر واتساب
            </Button>
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

export default Booking;
