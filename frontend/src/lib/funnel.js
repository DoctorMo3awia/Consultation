// Funnel configuration: links, quiz questions, scoring, tracking and lead delivery.
// Everything a non-developer may want to tune lives in this file.

export const LINKS = {
  // Ziina payment link. Leave empty to hide the direct-pay button until the link is ready.
  payment: '',
  paymentProvider: 'Ziina',
  whatsappNumber: '971555519451',
  // Qualified leads book here. A dedicated short qualifying-call event type is recommended.
  calendly: 'https://calendly.com/drmoawia/consultation',
  instagram: 'https://www.instagram.com/doctormoawia',
};

// Program price: "starts from", never a range, and only on the qualified result screen.
export const PRICE_FROM_AED = 2500;
export const PRICE_LABEL = 'يبدأ من 2,500 درهم';
// Set to false to keep the price private entirely (lead gets it from the doctor on WhatsApp).
export const SHOW_PRICE_AFTER_QUALIFICATION = false;

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
      { value: '35-48', label: '35 إلى 48', score: 3 },
      { value: '49+', label: '49 أو أكثر', score: 2 },
    ],
  },
  {
    id: 'complaints',
    title: 'شو أكتر حاجة مزعجاك هسي؟',
    hint: 'اختار كل اللي ينطبق عليك',
    multiple: true,
    maxScore: 3,
    options: [
      { value: 'energy', label: 'طاقة منخفضة وتركيز ضعيف رغم النوم', score: 1 },
      { value: 'belly', label: 'كرش ودهون بطن مش بتنزل رغم المحاولات', score: 1 },
      { value: 'sleep', label: 'نوم متقطع وبصحى تعبان', score: 1 },
      { value: 'mood', label: 'توتر مستمر وتقلب في المزاج', score: 1 },
      { value: 'labs-abnormal', label: 'تحاليلي فيها كلسترول أو سكر أو كبد دهني', score: 1 },
      { value: 'labs-normal', label: 'تحاليلي "طبيعية" بس حاسس إني مش طبيعي', score: 1 },
    ],
  },
  {
    id: 'duration',
    title: 'من متى وانت بتحس بالأعراض دي؟',
    options: [
      { value: 'lt3m', label: 'أقل من 3 شهور', score: 1 },
      { value: '3-12m', label: 'من 3 شهور لسنة', score: 2 },
      { value: 'gt1y', label: 'أكتر من سنة', score: 2 },
    ],
  },
  {
    id: 'tried',
    title: 'شو جربت قبل كدا؟',
    options: [
      { value: 'diet-gym', label: 'دايت أو جيم بدون نتيجة بتدوم', score: 2 },
      { value: 'coach', label: 'مدرب أو أخصائي تغذية', score: 2 },
      { value: 'many', label: 'برامج كتيرة وما استمريت', score: 2 },
      { value: 'nothing', label: 'ولا حاجة، دي أول خطوة جدية', score: 1 },
    ],
  },
  {
    id: 'work',
    title: 'طبيعة شغلك؟',
    options: [
      { value: 'owner', label: 'صاحب عمل أو رائد أعمال', score: 3 },
      { value: 'manager', label: 'مدير أو منصب قيادي', score: 3 },
      { value: 'employee', label: 'موظف بدوام كامل', score: 2 },
      { value: 'student', label: 'طالب أو بدون شغل هسي', score: 0, flag: 'student' },
    ],
  },
  {
    id: 'labs',
    title: 'عندك تحاليل دم من آخر 6 شهور؟',
    options: [
      { value: 'yes', label: 'أيوة، عندي تحاليل حديثة', score: 1 },
      { value: 'no', label: 'لا، ما عملت تحاليل من فترة', score: 1 },
      { value: 'unsure', label: 'مش متأكد', score: 1 },
    ],
  },
  {
    id: 'readiness',
    title: 'البرنامج متابعة طبية مدفوعة لمدة 90 يوم بإشراف دكتور معاوية. جاهز تستثمر وقت وفلوس في صحتك؟',
    options: [
      { value: 'ready', label: 'أيوة، جاهز أبدأ', score: 4 },
      { value: 'learn', label: 'محتاج أفهم التفاصيل أكتر', score: 2 },
      { value: 'no', label: 'لا، مش الوقت المناسب', score: 0, flag: 'not-ready' },
    ],
  },
  {
    id: 'timing',
    title: 'متى تريد تبدأ؟',
    options: [
      { value: 'week', label: 'خلال أسبوع', score: 3 },
      { value: 'month', label: 'خلال شهر', score: 2 },
      { value: 'browsing', label: 'لسه بستكشف', score: 0 },
    ],
  },
  {
    id: 'location',
    title: 'وين ساكن؟',
    options: [
      { value: 'uae', label: 'الإمارات', score: 1 },
      { value: 'ksa', label: 'السعودية', score: 1 },
      { value: 'gcc', label: 'دولة خليجية تانية', score: 1 },
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
    `السلام عليكم دكتور معاوية، أنا ${lead.name}.`,
    'كملت التقييم على الموقع ودي إجاباتي:',
  ];
  QUESTIONS.forEach((q) => {
    const label = labelFor(q.id, lead.answers[q.id]);
    if (label) lines.push(`• ${q.title} ${label}`);
  });
  lines.push('', 'أريد أعرف الخطوة الجاية عشان أنضم للبرنامج.');
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

// The first question can be answered on the landing page; the quiz picks the answer up from here.
export function setPrefill(answers) {
  try {
    sessionStorage.setItem('quiz_prefill', JSON.stringify(answers));
  } catch (e) {
    /* optional */
  }
}

export function takePrefill() {
  try {
    const raw = sessionStorage.getItem('quiz_prefill');
    sessionStorage.removeItem('quiz_prefill');
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

// Calendly scheduling URL with the lead's name, phone, answers and ad source prefilled.
export function buildCalendlyUrl(lead, inline = false) {
  const url = new URL(LINKS.calendly);
  url.searchParams.set('hide_gdpr_banner', '1');
  if (inline) {
    // Calendly renders inside a frame only when told it is embedded.
    url.searchParams.set('embed_domain', window.location.hostname || 'localhost');
    url.searchParams.set('embed_type', 'Inline');
  }
  url.searchParams.set('name', lead.name);
  const summary = QUESTIONS.map((q) => {
    const label = labelFor(q.id, lead.answers[q.id]);
    return label ? `${q.title} ${label}` : '';
  }).filter(Boolean).join(' | ');
  url.searchParams.set('a1', `واتساب: ${lead.phone} | ${summary}`.slice(0, 900));
  const attr = lead.attribution || {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((k) => {
    if (attr[k]) url.searchParams.set(k, attr[k]);
  });
  if (!attr.utm_source) url.searchParams.set('utm_source', 'site-quiz');
  return url.toString();
}
