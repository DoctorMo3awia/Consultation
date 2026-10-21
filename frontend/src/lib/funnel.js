// Funnel configuration: links, quiz questions, scoring, tracking and lead delivery.
// Everything a non-developer may want to tune lives in this file.

export const LINKS = {
  paypal: 'https://www.paypal.com/ncp/payment/2BKK55L2RNQHY',
  whatsappNumber: '971555519451',
  instagram: 'https://www.instagram.com/doctormoawia',
};

export const PRICE_USD = 680;

// Optional: a webhook (Google Apps Script, Make, Zapier, n8n ...) that receives every lead as JSON.
// Set REACT_APP_LEAD_WEBHOOK_URL at build time. When empty, leads are only delivered through WhatsApp.
export const LEAD_WEBHOOK_URL = process.env.REACT_APP_LEAD_WEBHOOK_URL || '';

// A lead is "qualified" when its score reaches this value and no answer disqualified it.
export const QUALIFY_THRESHOLD = 11;

export const QUESTIONS = [
  {
    id: 'age',
    title: 'كم عمرك؟',
    options: [
      { value: 'under25', label: 'أقل من 25', score: 0 },
      { value: '25-34', label: '25 إلى 34', score: 2 },
      { value: '35-45', label: '35 إلى 45', score: 3 },
      { value: '46+', label: '46 أو أكثر', score: 2 },
    ],
  },
  {
    id: 'complaints',
    title: 'أكثر شيء يزعجك حالياً؟',
    hint: 'اختر كل ما ينطبق عليك',
    multiple: true,
    maxScore: 3,
    options: [
      { value: 'energy', label: 'طاقة منخفضة وتركيز ضعيف رغم النوم', score: 1 },
      { value: 'weight', label: 'زيادة وزن ودهون في البطن رغم المحاولات', score: 1 },
      { value: 'sleep', label: 'نوم متقطع أو ما أصحى مرتاح', score: 1 },
      { value: 'mood', label: 'توتر مستمر وتقلب في المزاج', score: 1 },
      { value: 'labs', label: 'قلق على تحاليلي وصحتي بشكل عام', score: 1 },
    ],
  },
  {
    id: 'duration',
    title: 'من متى وأنت تحس بهذي الأعراض؟',
    options: [
      { value: 'lt3m', label: 'أقل من 3 أشهر', score: 1 },
      { value: '3-12m', label: 'من 3 أشهر إلى سنة', score: 2 },
      { value: 'gt1y', label: 'أكثر من سنة', score: 2 },
    ],
  },
  {
    id: 'tried',
    title: 'وش جربت قبل كذا؟',
    options: [
      { value: 'diet-gym', label: 'حمية أو نادي بدون نتيجة تدوم', score: 2 },
      { value: 'coach', label: 'مدرب أو أخصائي تغذية', score: 2 },
      { value: 'many', label: 'برامج كثيرة وما استمريت', score: 2 },
      { value: 'nothing', label: 'ولا شي، هذي أول خطوة جدية', score: 1 },
    ],
  },
  {
    id: 'work',
    title: 'طبيعة عملك؟',
    options: [
      { value: 'owner', label: 'صاحب عمل أو رائد أعمال', score: 3 },
      { value: 'manager', label: 'مدير أو منصب قيادي', score: 3 },
      { value: 'employee', label: 'موظف بدوام كامل', score: 2 },
      { value: 'student', label: 'طالب أو بدون عمل حالياً', score: 0, flag: 'student' },
    ],
  },
  {
    id: 'labs',
    title: 'عندك تحاليل دم خلال آخر 6 أشهر؟',
    options: [
      { value: 'yes', label: 'نعم، عندي تحاليل حديثة', score: 1 },
      { value: 'no', label: 'لا، ما سويت تحاليل من فترة', score: 1 },
      { value: 'unsure', label: 'مو متأكد', score: 1 },
    ],
  },
  {
    id: 'readiness',
    title: `البرنامج 90 يوم بإشراف طبيب، وقيمته $${PRICE_USD}. هل أنت جاهز تستثمر في صحتك؟`,
    options: [
      { value: 'ready', label: 'نعم، جاهز أبدأ', score: 4 },
      { value: 'learn', label: 'أحتاج أفهم التفاصيل أكثر', score: 2 },
      { value: 'no', label: 'لا، مو الوقت المناسب', score: 0, flag: 'not-ready' },
    ],
  },
  {
    id: 'timing',
    title: 'متى تبي تبدأ؟',
    options: [
      { value: 'week', label: 'خلال أسبوع', score: 3 },
      { value: 'month', label: 'خلال شهر', score: 2 },
      { value: 'browsing', label: 'بس أستكشف حالياً', score: 0 },
    ],
  },
  {
    id: 'location',
    title: 'وين تسكن؟',
    options: [
      { value: 'uae', label: 'الإمارات', score: 1 },
      { value: 'ksa', label: 'السعودية', score: 1 },
      { value: 'gcc', label: 'دولة خليجية أخرى', score: 1 },
      { value: 'other', label: 'خارج الخليج', score: 0 },
    ],
  },
];

export const TOTAL_STEPS = QUESTIONS.length + 1; // questions + contact form

export function scoreAnswers(answers) {
  let score = 0;
  const flags = [];
  QUESTIONS.forEach((q) => {
    const picked = answers[q.id];
    if (picked == null) return;
    const values = Array.isArray(picked) ? picked : [picked];
    let qScore = 0;
    values.forEach((v) => {
      const opt = q.options.find((o) => o.value === v);
      if (!opt) return;
      qScore += opt.score;
      if (opt.flag) flags.push(opt.flag);
    });
    if (q.maxScore != null) qScore = Math.min(qScore, q.maxScore);
    score += qScore;
  });
  const disqualified = flags.includes('not-ready') || flags.includes('student');
  const qualified = !disqualified && score >= QUALIFY_THRESHOLD;
  const hot = qualified && answers.readiness === 'ready' && answers.timing === 'week';
  return { score, flags, qualified, hot };
}

export function labelFor(questionId, value) {
  const q = QUESTIONS.find((x) => x.id === questionId);
  if (!q) return '';
  const values = Array.isArray(value) ? value : [value];
  return values
    .map((v) => q.options.find((o) => o.value === v)?.label)
    .filter(Boolean)
    .join('، ');
}

// UTM / click ids are read from the query string once and kept for the session,
// so the hash router and later navigation do not lose them.
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'trakyo_id'];

export function captureAttribution() {
  try {
    const params = new URLSearchParams(window.location.search);
    const found = {};
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) found[k] = v;
    });
    if (Object.keys(found).length) {
      sessionStorage.setItem('attribution', JSON.stringify(found));
    }
    if (!sessionStorage.getItem('landing_referrer') && document.referrer) {
      sessionStorage.setItem('landing_referrer', document.referrer);
    }
  } catch (e) {
    /* storage unavailable: attribution is optional */
  }
}

export function getAttribution() {
  try {
    const raw = sessionStorage.getItem('attribution');
    const data = raw ? JSON.parse(raw) : {};
    const ref = sessionStorage.getItem('landing_referrer');
    if (ref) data.referrer = ref;
    return data;
  } catch (e) {
    return {};
  }
}

// Fires an event to whichever pixels are installed on the page. Safe to call when none are.
export function track(event, data = {}) {
  try {
    if (typeof window.fbq === 'function') {
      const standard = ['ViewContent', 'Lead', 'InitiateCheckout', 'Contact'];
      if (standard.includes(event)) window.fbq('track', event, data);
      else window.fbq('trackCustom', event, data);
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, data);
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event, ...data });
    }
  } catch (e) {
    /* tracking must never break the funnel */
  }
}

export function buildWhatsAppMessage(lead) {
  const lines = [
    `مرحباً دكتور معاوية، أنا ${lead.name}.`,
    'أكملت التقييم على الموقع وهذي إجاباتي:',
  ];
  QUESTIONS.forEach((q) => {
    const label = labelFor(q.id, lead.answers[q.id]);
    if (label) lines.push(`• ${q.title.replace(/\$\d+/, '').trim()} ${label}`);
  });
  lines.push('', 'أبي أعرف الخطوة التالية للانضمام للبرنامج.');
  return lines.join('\n');
}

export function whatsappUrl(message) {
  return `https://wa.me/${LINKS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export async function deliverLead(lead) {
  try {
    localStorage.setItem('last_lead', JSON.stringify(lead));
  } catch (e) {
    /* optional */
  }
  if (!LEAD_WEBHOOK_URL) return;
  try {
    await fetch(LEAD_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(lead),
      keepalive: true,
    });
  } catch (e) {
    /* the WhatsApp hand-off still carries the lead */
  }
}
