import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { MessageCircle, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import { Checkbox } from '../components/ui/checkbox';

const Booking = () => {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/971XXXXXXXXX?text=تقييم', '_blank');
  };

  const openGoogleForm = () => {
    // Placeholder - replace with actual Google Form URL
    window.open('https://forms.google.com/YOUR_FORM_ID', '_blank');
    setFormSubmitted(true);
  };

  const redFlagSymptoms = [
    'ألم في الصدر أو ضيق تنفس شديد',
    'إغماء أو فقدان وعي',
    'نزيف غير طبيعي أو شديد',
    'ألم حاد مفاجئ في البطن',
    'تغيرات مفاجئة في الرؤية أو النطق',
    'حمى شديدة مستمرة (أعلى من 39°C)',
  ];

  const formFields = [
    { category: 'معلومات أساسية', fields: ['الاسم الكامل', 'العمر', 'المدينة', 'رقم الواتساب'] },
    { category: 'الأهداف والمشاكل', fields: ['الهدف الأساسي (طاقة، تركيز، نوم، وزن، تحاليل)', 'أهم 3 مشاكل تعاني منها حالياً'] },
    { category: 'النوم والطاقة', fields: ['عدد ساعات النوم', 'هل تعاني من الشخير؟', 'مستوى الطاقة (1-10)'] },
    { category: 'الكافيين والتغذية', fields: ['كمية الكافيين اليومية', 'وقت آخر كافيين', 'عدد مرات الأكل في المطاعم أسبوعياً', 'أكبر تحدي غذائي (عشاء متأخر، سفر، مجالس)'] },
    { category: 'النشاط البدني', fields: ['عدد مرات التمرين أسبوعياً', 'تقدير عدد الخطوات اليومية'] },
    { category: 'التاريخ الطبي', fields: ['أمراض مزمنة أو أدوية حالية', 'مكملات غذائية تتناولها', 'رفع التحاليل (اختياري)'] },
    { category: 'المواعيد المفضلة', fields: ['اختر 2-3 أوقات مناسبة للجلسة'] },
  ];

  return (
    <div className="booking-page" style={{ background: 'var(--bg-page)', paddingTop: '80px' }}>
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section style={{ padding: '3rem 1.2rem 5rem', minHeight: 'calc(100vh - 80px)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {!formSubmitted ? (
            <>
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
                    الخطوة الأخيرة
                  </span>
                </div>
                
                <h1 className="heading-hero" style={{ marginBottom: '1rem' }}>
                  احجز جلسة التقييم الخاصة بك
                </h1>
                
                <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                  املأ النموذج أدناه لنفهم حالتك الصحية ونمط حياتك بشكل أفضل
                </p>
              </div>

              {/* Red Flag Warning */}
              <div style={{ 
                background: 'var(--accent-pink-200)',
                padding: '2rem',
                borderRadius: '1rem',
                marginBottom: '3rem',
                border: '2px solid rgba(220, 38, 38, 0.2)'
              }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <AlertTriangle size={24} color="#DC2626" style={{ minWidth: '24px', marginTop: '0.25rem' }} />
                  <div>
                    <h3 className="heading-3" style={{ color: '#DC2626', marginBottom: '0.75rem' }}>
                      تنبيه مهم - الأعراض الخطيرة
                    </h3>
                    <p className="body-medium" style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
                      إذا كنت تعاني من أي من الأعراض التالية، يجب عليك مراجعة طبيب فوراً أو الذهاب لأقرب مستشفى:
                    </p>
                    <ul style={{ paddingRight: '1.5rem', marginBottom: '1rem' }}>
                      {redFlagSymptoms.map((symptom, idx) => (
                        <li key={idx} className="body-medium" style={{ marginBottom: '0.5rem', lineHeight: 1.6 }}>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                    <p className="body-medium" style={{ lineHeight: 1.7, fontWeight: 500 }}>
                      هذه الاستشارة مخصصة للتحسين الصحي والوقاية، وليست بديلاً عن الرعاية الطبية الطارئة.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Preview */}
              <div style={{ 
                background: 'var(--bg-card)',
                padding: '3rem 2rem',
                borderRadius: '1.5rem',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                marginBottom: '3rem'
              }}>
                <h2 className="heading-2" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                  ماذا سيتم سؤالك في النموذج؟
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {formFields.map((section, idx) => (
                    <div key={idx} style={{ 
                      padding: '1.5rem',
                      background: 'var(--bg-section)',
                      borderRadius: '1rem'
                    }}>
                      <h3 className="heading-3" style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        {section.category}
                      </h3>
                      <ul style={{ paddingRight: '1.5rem' }}>
                        {section.fields.map((field, fieldIdx) => (
                          <li key={fieldIdx} className="body-medium" style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                            {field}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA to Open Form */}
              <div style={{ 
                background: 'var(--accent-blue-200)',
                padding: '3rem 2rem',
                borderRadius: '1.5rem',
                textAlign: 'center'
              }}>
                <h2 className="heading-2" style={{ marginBottom: '1rem' }}>
                  جاهز للبدء؟
                </h2>
                <p className="body-large" style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
                  النموذج يستغرق 5-7 دقائق فقط للتعبئة
                </p>
                
                <Button 
                  onClick={openGoogleForm} 
                  className="btn-primary" 
                  style={{ 
                    minWidth: '280px',
                    padding: '1rem 2rem',
                    display: 'inline-flex',
                    gap: '0.5rem',
                    alignItems: 'center'
                  }}
                >
                  افتح نموذج الحجز
                  <ExternalLink size={18} />
                </Button>

                <p className="body-small" style={{ color: 'var(--text-muted)', marginTop: '1.5rem' }}>
                  بعد تعبئة النموذج، سنرسل لك تفاصيل الدفع عبر البريد الإلكتروني
                </p>
              </div>

              {/* Payment Instructions */}
              <div style={{ 
                marginTop: '3rem',
                padding: '2rem',
                background: 'var(--bg-card)',
                borderRadius: '1rem',
                border: '1px solid var(--border-light)'
              }}>
                <h3 className="heading-3" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                  كيف يتم الدفع والتأكيد؟
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ 
                      minWidth: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--accent-purple-200)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 600,
                      fontFamily: 'SF Mono, monospace'
                    }}>
                      1
                    </div>
                    <p className="body-medium" style={{ lineHeight: 1.7, paddingTop: '0.25rem' }}>
                      بعد إرسال النموذج، ستستلم رسالة تحتوي على تفاصيل التحويل البنكي
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ 
                      minWidth: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--accent-blue-200)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 600,
                      fontFamily: 'SF Mono, monospace'
                    }}>
                      2
                    </div>
                    <p className="body-medium" style={{ lineHeight: 1.7, paddingTop: '0.25rem' }}>
                      قم بتحويل $119 USD إلى الحساب المذكور
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ 
                      minWidth: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--accent-orange-200)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 600,
                      fontFamily: 'SF Mono, monospace'
                    }}>
                      3
                    </div>
                    <p className="body-medium" style={{ lineHeight: 1.7, paddingTop: '0.25rem' }}>
                      أرسل إثبات التحويل (صورة/لقطة شاشة) عبر واتساب
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ 
                      minWidth: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--accent-green-200)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 600,
                      fontFamily: 'SF Mono, monospace'
                    }}>
                      4
                    </div>
                    <p className="body-medium" style={{ lineHeight: 1.7, paddingTop: '0.25rem' }}>
                      بعد التأكيد، ستستلم رابط Google Meet خلال 24 ساعة قبل موعد الجلسة
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)', textAlign: 'center' }}>
                  <Button onClick={openWhatsApp} className="btn-secondary" style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
                    <MessageCircle size={18} />
                    تواصل عبر واتساب
                  </Button>
                </div>
              </div>
            </>
          ) : (
            /* Thank You Message */
            <div style={{ 
              background: 'var(--bg-card)',
              padding: '4rem 2rem',
              borderRadius: '1.5rem',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
            }}>
              <div style={{ 
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'var(--accent-green-200)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem'
              }}>
                <CheckCircle2 size={40} color="#16A34A" />
              </div>

              <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
                شكراً لك!
              </h2>
              
              <p className="body-large" style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.8 }}>
                بعد إكمال النموذج، ستستلم رسالة تحتوي على تفاصيل الدفع خلال دقائق.
              </p>

              <div style={{ 
                background: 'var(--accent-blue-200)',
                padding: '2rem',
                borderRadius: '1rem',
                marginBottom: '2rem'
              }}>
                <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
                  الخطوات التالية:
                </h3>
                <div style={{ textAlign: 'right' }}>
                  <p className="body-medium" style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}>
                    ✓ تحقق من بريدك الإلكتروني لتفاصيل التحويل البنكي
                  </p>
                  <p className="body-medium" style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}>
                    ✓ قم بالتحويل وأرسل الإثبات عبر واتساب
                  </p>
                  <p className="body-medium" style={{ lineHeight: 1.7 }}>
                    ✓ انتظر تأكيد الموعد ورابط Google Meet
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button onClick={openWhatsApp} className="btn-primary" style={{ minWidth: '200px', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageCircle size={18} />
                  تواصل واتساب
                </Button>
                <Button onClick={() => navigate('/')} className="btn-secondary" style={{ minWidth: '200px' }}>
                  العودة للرئيسية
                </Button>
              </div>
            </div>
          )}

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

export default Booking;
