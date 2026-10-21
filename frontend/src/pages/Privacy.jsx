import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from '../lib/funnel';
import '../styles/funnel.css';

const Privacy = () => {
  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="funnel" data-testid="privacy-page">
      <header className="header-nav">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Link to="/" className="f-brand" style={{ textDecoration: 'none' }}>دكتور معاوية</Link>
        </div>
      </header>
      <main className="f-section">
        <div className="f-legal">
          <h1 className="heading-1">سياسة الخصوصية</h1>
          <p>نحترم خصوصيتك. هذه الصفحة توضح ما نجمعه من بيانات عبر هذا الموقع وكيف نستخدمه.</p>
          <h2>ما الذي نجمعه</h2>
          <p>عند إكمال التقييم نجمع اسمك، رقم الواتساب، وإجاباتك على أسئلة التقييم. كما قد نسجّل مصدر زيارتك (مثل إنستغرام) لقياس أداء الإعلانات.</p>
          <h2>كيف نستخدمها</h2>
          <p>نستخدم بياناتك للتواصل معك بخصوص البرنامج والرد على استفساراتك. لا نبيع بياناتك ولا نشاركها مع أي طرف ثالث لأغراض تسويقية.</p>
          <h2>الأدوات الخارجية</h2>
          <p>يتم الدفع عبر Ziina والتواصل عبر واتساب، ولكل منهما سياسة خصوصية خاصة به. قد نستخدم أدوات قياس مثل Meta Pixel لفهم أداء الصفحة.</p>
          <h2>حذف بياناتك</h2>
          <p>بتقدر تطلب حذف بياناتك في أي وقت عبر مراسلتنا على واتساب على الرقم +{LINKS.whatsappNumber}.</p>
          <p style={{ marginTop: '2rem' }}><Link to="/">العودة للصفحة الرئيسية</Link></p>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
