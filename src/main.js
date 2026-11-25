import './style.css';

const shot = (f) => `${import.meta.env.BASE_URL}screenshots/${f}`;

const features = [
  ['📝', '800 Exam-Pattern Questions', 'Written to the latest NTA pattern, unit by unit, across 40 timed unit tests.'],
  ['⏱️', 'Timed Like the Real Exam', '20 questions in 25 minutes, with the same question palette colours and review flags as the NTA test.'],
  ['✅', 'Every Answer Explained', 'Review why each option is right or wrong straight after you submit.'],
  ['📚', 'All 10 Units, Short Notes', 'Unit-wise notes with solved PYQs, plus a 221-page handbook with tables, diagrams and mind maps.'],
  ['🎯', '10 Full-Length Mocks', '150 questions, 300 marks, 3 hours: Paper 1 plus Computer Science Paper 2, in the real exam pattern.'],
  ['📱', 'Free to Start, Built for Phones', 'Free tests need no sign-up, and every unit has free preview pages you can read on any device.'],
];

const steps = [
  { id: 'home', img: '01-home.png', title: 'Open the site and start free',
    text: 'Go to UGC NET Mentor. Click <b>Start Free Test →</b> to jump straight into a unit test, or <b>See Plans from ₹249</b> to compare plans.',
    tip: 'Free tests need no sign-up, so you can try one right now.' },
  { id: 'syllabus', img: '02-syllabus.png', title: 'Check the syllabus',
    text: 'Click <b>Syllabus</b> in the menu. Every one of the 10 units lists its sub-topics, with a <b>Free preview</b> and a <b>Free test</b> button.',
    tip: 'Paper 1 has about 5 questions per unit, so cover all 10.' },
  { id: 'sample', img: '03-free-sample.png', title: 'Look inside the notes',
    text: 'Open <b>Free Sample</b> and pick a tab from <b>Unit 1</b> to <b>Unit 10</b> to flip through the real contents page and “Core concepts at a glance”.' },
  { id: 'reader', img: '04-notes-preview-reader.png', title: 'Read in the notes reader',
    text: 'Use the arrows to turn pages, <b>−</b>/<b>+</b> to zoom and the full-screen icon for focus. <b>← All units</b> takes you back, <b>Next unit →</b> moves on.',
    tip: 'Each unit has 3 free preview pages, no login needed.' },
  { id: 'tests', img: '05-test-series.png', title: 'Pick a test',
    text: 'Click <b>Test Series</b>. Choose <b>Unit-wise tests</b> and press <b>Start free test</b>, or <b>Take a full mock ↓</b> for a 3-hour mock.',
    tip: 'Use the unit filter chips to find a unit fast.' },
  { id: 'rules', img: '06-test-instructions.png', title: 'Read the rules, then start',
    text: '20 questions, 40 marks, 25 minutes, 2 marks per correct answer and no negative marking. Press <b>Start test</b> when ready.' },
  { id: 'attempt', img: '07-test-question.png', title: 'Answer like the real exam',
    text: 'Pick an option and click <b>Save &amp; Next</b>. Use <b>Mark for review</b>, <b>Clear</b> and the <b>Question palette</b> to move around, then <b>Submit</b>.',
    tip: 'Keyboard works too: ← → to move, 1–4 or A–D to choose an option.' },
  { id: 'result', img: '08-test-result.png', title: 'See your score',
    text: 'Your score, correct, wrong and unattempted counts appear instantly. Choose <b>Retake test</b> or go back to <b>All tests</b>.',
    tip: 'Without login your score is saved on this device only. Log in to keep it across devices.' },
  { id: 'review', img: '09-answer-explanations.png', title: 'Learn from the explanations',
    text: 'Scroll to <b>Review answers</b> and filter by <b>All</b>, <b>Wrong</b>, <b>Unattempted</b> or <b>Correct</b>. Every question has an <b>Explanation</b>.' },
  { id: 'plans', img: '10-plans-pricing.png', title: 'Choose a plan',
    text: 'Open <b>Plans &amp; Pricing</b> to compare the Theory Handbook, Combo, MasterNotes Course and CS MasterNotes, then click <b>Buy this plan</b>.',
    tip: 'Have a coupon? Enter it and press Apply before paying.' },
  { id: 'cs', img: '11-cs-paper-2.png', title: 'Preparing CS Paper 2?',
    text: 'Under <b>More ▾</b> choose <b>CS Paper 2</b>. Open any unit with <b>Read Free Preview</b>, then use <b>Buy Now – ₹749</b> to unlock all 10 units.' },
  { id: 'account', img: '13-signup.png', title: 'Create your free account',
    text: 'Click <b>Log In</b>, then <b>Create a free account</b>. Your account holds your purchases and keeps your scores across devices.',
    tip: 'You can stay signed in on up to 2 devices, such as your phone and laptop.' },
];

const phones = [
  ['m1-home.png', 'Home page on a phone'],
  ['m2-menu-open.png', 'Mobile menu with every page'],
  ['m3-test-question.png', 'Taking a timed test on a phone'],
  ['m4-notes-preview.png', 'Reading free preview notes on a phone'],
];

const faqs = [
  ['Is UGC NET Mentor free to use?', 'You can start free. The Test Series page marks free unit tests in every unit and full Mocks 1–3 as FREE, and every unit has free preview pages of the notes. The full notes, handbook and remaining tests are paid plans.'],
  ['Do I need to sign up to take a test?', 'No. Free tests need no sign-up. Without an account your score is saved on that device only; create a free account to keep scores across devices.'],
  ['What does each plan cost?', 'At launch prices: Theory Handbook ₹249, MasterNotes Course ₹399, Combo (all 40 tests + MasterNotes) ₹499 and Computer Science MasterNotes ₹749. Every plan gives 1-year access.'],
  ['How do I pay and when does access open?', 'Pay by UPI with Google Pay or PhonePe and enter your 12-digit UTR. Access opens once the payment is confirmed, usually within a few hours (9 AM–9 PM) and always within 24 hours, with a receipt and invoice by email.'],
  ['Can I download the notes as PDF?', 'Paid users can download through secure one-time links. Every copy is personalised with your name, email, phone number and order ID. Notes can also be read in the secure online viewer on any device.'],
  ['Are the notes updated for the current syllabus?', 'Yes. They follow the current UGC NET Paper 1 syllabus, including NEP 2020 topics, and updates are added to your account free of charge.'],
];

const $ = (s) => document.querySelector(s);
const img = (f, alt, cls = '') =>
  `<img src="${shot(f)}" alt="${alt}" loading="lazy" decoding="async" class="zoomable w-full block ${cls}" />`;

$('[data-shot]').src = shot($('[data-shot]').dataset.shot);

$('#features').innerHTML = features.map(([icon, t, d]) => `
  <article class="reveal rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition">
    <div class="w-12 h-12 grid place-items-center rounded-xl bg-indigo-50 text-2xl">${icon}</div>
    <h3 class="mt-4 font-semibold text-lg text-slate-900">${t}</h3>
    <p class="mt-2 text-slate-600">${d}</p>
  </article>`).join('');

$('#steps').innerHTML = steps.map((s, i) => {
  const flip = i % 2 === 1;
  return `
  <article id="step-${i + 1}" class="scroll-mt-24 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
    <div class="reveal ${flip ? 'from-right lg:order-2' : 'from-left'}">
      <div class="rounded-xl overflow-hidden border border-slate-200 shadow-xl bg-white">${img(s.img, `Step ${i + 1}: ${s.title}`)}</div>
    </div>
    <div class="reveal ${flip ? 'from-left lg:order-1' : 'from-right'}">
      <span class="step-num inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold text-white">Step ${i + 1}</span>
      <h3 class="mt-4 text-2xl md:text-3xl font-bold text-slate-900">${s.title}</h3>
      <p class="mt-3 text-lg text-slate-600 [&_b]:text-slate-900">${s.text}</p>
      ${s.tip ? `<div class="mt-5 rounded-xl border-l-4 border-accent bg-amber-50 p-4 text-slate-700">💡 <b>Tip:</b> ${s.tip}</div>` : ''}
    </div>
  </article>`;
}).join('');

$('#stepNav').innerHTML = steps.map((s, i) =>
  `<a href="#step-${i + 1}" title="${s.title}" class="nav-link w-8 h-8 grid place-items-center rounded-full text-slate-500 hover:bg-indigo-50 hover:text-brand">${i + 1}</a>`
).join('') + '<a href="#faq" class="px-3 text-slate-500 hover:text-brand">FAQ</a>';

$('#phones').innerHTML = phones.map(([f, alt]) => `
  <figure class="reveal text-center">
    <div class="phone">${img(f, alt)}</div>
    <figcaption class="mt-4 text-sm text-slate-600">${alt}</figcaption>
  </figure>`).join('');

$('#faqList').innerHTML = faqs.map(([q, a]) => `
  <details class="reveal group rounded-xl border border-slate-200 bg-white p-5">
    <summary class="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900">${q}
      <span class="chev ml-4 text-2xl text-brand transition">+</span></summary>
    <p class="mt-3 text-slate-600">${a}</p>
  </details>`).join('');

// Scroll reveal
const io = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
}), { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Highlight current step in navbar
const links = [...document.querySelectorAll('.nav-link')];
const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (!e.isIntersecting) return;
  links.forEach((l) => l.classList.toggle('!bg-brand', l.hash === `#${e.target.id}`));
  links.forEach((l) => l.classList.toggle('!text-white', l.hash === `#${e.target.id}`));
}), { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('[id^="step-"]').forEach((el) => spy.observe(el));

// Lightbox
const lb = $('#lightbox'), lbImg = $('#lbImg');
const close = () => { lb.classList.add('hidden'); lb.classList.remove('flex'); };
document.addEventListener('click', (e) => {
  const t = e.target.closest('.zoomable');
  if (t) { lbImg.src = t.src; lbImg.alt = t.alt; lb.classList.remove('hidden'); lb.classList.add('flex'); }
  else if (e.target === lb || e.target.id === 'lbClose') close();
});
document.addEventListener('keydown', (e) => e.key === 'Escape' && close());
