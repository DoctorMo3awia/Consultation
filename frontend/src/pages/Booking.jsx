import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { MessageCircle } from 'lucide-react';

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

  const confirmPaymentViaWhatsApp = () => {
    window.open('https://wa.me/971555519451?text=تم%20الدفع%20عبر%20PayPal%20%F0%9F%92%B3%0A%0Aأريد%20رابط%20نموذج%20الحجز%20من%20فضلك', '_blank');
  };

  return (
    <div className="booking-page" style={{ background: 'var(--bg-page)', paddingTop: '80px' }}>
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section style={{ padding: '3rem 1.2rem 5rem', minHeight: 'calc(100vh - 80px)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* Payment Page */}
          <div>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ 
                display: 'inline-block',
                background: 'var(--accent-green-200)',
                padding: '0.5rem 1.5rem',
                borderRadius: '2rem',
                marginBottom: '1.5rem'
              }}>
                <span className="mono-text" style={{ color: 'var(--text-primary)' }}>
                  الدفع والحجز
                </span>
              </div>
              
              <h1 className="heading-hero" style={{ marginBottom: '1rem' }}>
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
                borderRadius: '1.5rem',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                marginBottom: '3rem',
                textAlign: 'center'
              }}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'baseline', 
                  gap: '0.5rem',
                  marginBottom: '2rem',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '3rem', fontWeight: 600 }}>$119</span>
                  <span className="body-medium" style={{ color: 'var(--text-muted)' }}>USD</span>
                </div>

                <div style={{ 
                  background: 'var(--accent-blue-200)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  marginBottom: '2rem',
                  textAlign: 'right'
                }}>
                  <h3 className="heading-3" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                    ماذا تحصل:
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      'جلسة 60 دقيقة مع طبيب باطنية مقيم',
                      'مراجعة شاملة لحالتك الصحية',
                      'خطة 30 يوم طبية مخصصة لك',
                      'ملف PDF كامل خلال 24 ساعة',
                      '7 أيام دعم عبر واتساب',
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <div style={{ 
                          minWidth: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: 'var(--text-primary)',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.7rem',
                          fontWeight: 600
                        }}>
                          ✓
                        </div>
                        <p className="body-medium" style={{ flex: 1 }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  <Button 
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
                    دفع آمن عبر PayPal • بعد الدفع، املأ نموذج الحجز
                  </p>
                </div>
              </div>

              {/* Why PayPal */}
              <div style={{ 
                padding: '2rem',
                background: 'var(--accent-orange-200)',
                borderRadius: '1rem',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
                  خطوات الحجز:
                </h3>
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ 
                      minWidth: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'var(--text-primary)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      fontFamily: 'SF Mono, monospace'
                    }}>
                      1
                    </div>
                    <p className="body-medium" style={{ flex: 1, lineHeight: 1.7, paddingTop: '0.125rem' }}>
                      اضغط "ادفع الآن" وأكمل الدفع عبر PayPal
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ 
                      minWidth: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'var(--text-primary)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      fontFamily: 'SF Mono, monospace'
                    }}>
                      2
                    </div>
                    <p className="body-medium" style={{ flex: 1, lineHeight: 1.7, paddingTop: '0.125rem' }}>
                      بعد الدفع، اضغط "أرسل إثبات الدفع" وأرسل لقطة شاشة للدفع عبر واتساب
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ 
                      minWidth: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'var(--text-primary)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      fontFamily: 'SF Mono, monospace'
                    }}>
                      3
                    </div>
                    <p className="body-medium" style={{ flex: 1, lineHeight: 1.7, paddingTop: '0.125rem' }}>
                      سنرسل لك رابط نموذج الحجز فوراً عبر واتساب
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
                <Button 
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

                <Button 
                  onClick={confirmPaymentViaWhatsApp} 
                  className="btn-secondary" 
                  style={{ 
                    width: '100%',
                    maxWidth: '400px',
                    padding: '1.25rem 2rem',
                    fontSize: '1rem',
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <MessageCircle size={20} />
                  أرسل إثبات الدفع
                </Button>
                
                <p className="body-small" style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
                  دفع آمن عبر PayPal • سنرسل رابط النموذج بعد التأكيد
                </p>
              </div>

              {/* Contact */}
              <div style={{ textAlign: 'center' }}>
                <p className="body-medium" style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                  لديك أسئلة قبل الدفع؟
                </p>
                <Button onClick={openWhatsApp} className="btn-secondary" style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center', margin: '0 auto' }}>
                  <MessageCircle size={18} />
                  تواصل عبر واتساب
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
    </div>
  );
};

export default Booking;
