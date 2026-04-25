/* ============================================================
   Portfolio — Yaswant Sreenivasan  |  main.js
   ============================================================ */

/* ── Ticker 1: Carousel groups ── */
const carousels = [
  {
    name: 'Danush',
    images: [
      'images/carosuels/1 Danush- (1).jpg',
      'images/carosuels/1 Danush- (2).jpg',
      'images/carosuels/1 Danush- (3).jpg',
      'images/carosuels/1 Danush- (4).jpg',
      'images/carosuels/1 Danush- (5).jpg',
      'images/carosuels/1 Danush- (6).jpg',
      'images/carosuels/1 Danush- (7).jpg',
    ]
  },
  {
    name: 'Actress',
    images: [
      'images/carosuels/2 actress  (1).jpg',
      'images/carosuels/2 actress  (2).jpg',
      'images/carosuels/2 actress  (3).jpg',
      'images/carosuels/2 actress  (4).jpg',
      'images/carosuels/2 actress  (5).jpg',
      'images/carosuels/2 actress  (6).jpg',
      'images/carosuels/2 actress  (7).jpg',
      'images/carosuels/2 actress  (8).jpg',
      'images/carosuels/2 actress  (9).jpg',
    ]
  },
  {
    name: 'Soori',
    images: [
      'images/carosuels/3 Soori  (1).jpg',
      'images/carosuels/3 Soori  (2).jpg',
      'images/carosuels/3 Soori  (3).jpg',
      'images/carosuels/3 Soori  (4).jpg',
      'images/carosuels/3 Soori  (5).jpg',
      'images/carosuels/3 Soori  (6).jpg',
    ]
  },
  {
    name: 'Rajini',
    images: [
      'images/carosuels/4 rajini- (1).jpg',
      'images/carosuels/4 rajini- (2).jpg',
      'images/carosuels/4 rajini- (3).jpg',
      'images/carosuels/4 rajini- (4).jpg',
      'images/carosuels/4 rajini- (5).jpg',
      'images/carosuels/4 rajini- (6).jpg',
      'images/carosuels/4 rajini- (7).jpg',
      'images/carosuels/4 rajini- (8).jpg',
      'images/carosuels/4 rajini- (9).jpg',
      'images/carosuels/4 rajini- (10).jpg',
    ]
  },
  {
    name: 'Simbu',
    images: [
      'images/carosuels/5 simbu  (1).jpg',
      'images/carosuels/5 simbu  (2).jpg',
      'images/carosuels/5 simbu  (3).jpg',
      'images/carosuels/5 simbu  (4).jpg',
      'images/carosuels/5 simbu  (5).jpg',
      'images/carosuels/5 simbu  (6).jpg',
      'images/carosuels/5 simbu  (7).jpg',
      'images/carosuels/5 simbu  (8).jpg',
    ]
  },
  {
    name: 'Icons',
    images: [
      'images/carosuels/6 icons (1).jpg',
      'images/carosuels/6 icons (2).jpg',
      'images/carosuels/6 icons (3).jpg',
      'images/carosuels/6 icons (4).jpg',
      'images/carosuels/6 icons (5).jpg',
      'images/carosuels/6 icons (6).jpg',
      'images/carosuels/6 icons (7).jpg',
      'images/carosuels/6 icons (8).jpg',
      'images/carosuels/6 icons (9).jpg',
      'images/carosuels/6 icons (10).jpg',
    ]
  },
  {
    name: 'Ram',
    images: [
      'images/carosuels/7 ram  (1).jpg',
      'images/carosuels/7 ram  (2).jpg',
      'images/carosuels/7 ram  (3).jpg',
      'images/carosuels/7 ram  (4).jpg',
      'images/carosuels/7 ram  (5).jpg',
      'images/carosuels/7 ram  (6).jpg',
      'images/carosuels/7 ram  (7).jpg',
      'images/carosuels/7 ram  (8).jpg',
    ]
  },
  {
    name: 'Metaphor',
    images: [
      'images/carosuels/8 metaphor  (1).jpg',
      'images/carosuels/8 metaphor  (2).jpg',
      'images/carosuels/8 metaphor  (3).jpg',
      'images/carosuels/8 metaphor  (4).jpg',
      'images/carosuels/8 metaphor  (5).jpg',
      'images/carosuels/8 metaphor  (6).jpg',
      'images/carosuels/8 metaphor  (7).jpg',
      'images/carosuels/8 metaphor  (8).jpg',
      'images/carosuels/8 metaphor  (9).jpg',
      'images/carosuels/8 metaphor  (10).jpg',
    ]
  },
];

/* ── Ticker 2: Single designs ── */
const singleItems = [
  { name: 'Chocos',              src: 'images/designs/Chocos.jpg' },
  { name: 'Himalaya Men',        src: 'images/designs/Himalaya men.jpg' },
  { name: 'MSD Edit',            src: 'images/designs/MSd edit copy.jpg' },
  { name: 'Poster Edit',         src: 'images/designs/Poster edit trial.jpg' },
  { name: 'Sq Ad 10',            src: 'images/designs/Sq ad 10 copy.jpg' },
  { name: 'Sq Ad 11',            src: 'images/designs/Sq ad 11 copy.jpg' },
  { name: 'Apple Edit',          src: 'images/designs/apple edit.jpg' },
  { name: 'Coke Ad',             src: 'images/designs/coke ad.jpg' },
  { name: 'Momster Edit',        src: 'images/designs/momster edit.jpg' },
  { name: 'Orange Edit',         src: 'images/designs/orange edit.jpg' },
  { name: 'Tata Salt Ad',        src: 'images/designs/tata salt ad copy ii.jpg' },
];

const PLACEHOLDER_SRC = 'https://picsum.photos/800/1000?grayscale';

/* ── Card builders ── */
function createCarouselCard(carousel, carouselIndex) {
  const card = document.createElement('div');
  card.className = 'card';
  card.tabIndex = 0;

  const img = document.createElement('img');
  img.src = carousel.images[0];
  img.alt = carousel.name;
  img.onerror = function () { this.src = PLACEHOLDER_SRC; this.onerror = null; };
  card.appendChild(img);

  const dotsEl = document.createElement('div');
  dotsEl.className = 'card-dots';
  carousel.images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'card-dot' + (i === 0 ? ' active' : '');
    dotsEl.appendChild(dot);
  });
  card.appendChild(dotsEl);

  card.addEventListener('click', () => openLightbox(carousel.images, 0));
  card.addEventListener('keydown', e => { if (e.key === 'Enter') openLightbox(carousel.images, 0); });
  return card;
}

function createSingleCard(item, index, allSrcs) {
  const card = document.createElement('div');
  card.className = 'card';
  card.tabIndex = 0;

  const img = document.createElement('img');
  img.src = item.src;
  img.alt = item.name;
  img.onerror = function () { this.src = PLACEHOLDER_SRC; this.onerror = null; };
  card.appendChild(img);

  card.addEventListener('click', () => openLightbox(allSrcs, index));
  card.addEventListener('keydown', e => { if (e.key === 'Enter') openLightbox(allSrcs, index); });
  return card;
}

/* ── Build tickers ── */
const track1 = document.getElementById('carousel-track');
for (let pass = 0; pass < 2; pass++) {
  carousels.forEach((c, i) => track1.appendChild(createCarouselCard(c, i)));
}

const allSingleSrcs = singleItems.map(i => i.src);
const track2 = document.getElementById('carousel-track-2');
if (singleItems.length > 0) {
  for (let pass = 0; pass < 2; pass++) {
    singleItems.forEach((item, i) => track2.appendChild(createSingleCard(item, i, allSingleSrcs)));
  }
}

/* ── RAF animation — two independent tickers ── */
const NORMAL_SPEED = 1.2;
const HOVER_SPEED  = 0.1;
const LERP_FACTOR  = 0.04;

const t1 = {
  el: document.getElementById('projects-carousel'),
  track: track1,
  pos: 0,
  half: 0,
  cur: NORMAL_SPEED,
  target: NORMAL_SPEED,
  dir: -1,         // left
};
const NORMAL_SPEED_2 = 0.8;

const t2 = {
  el: document.getElementById('projects-carousel-2'),
  track: track2,
  pos: null,       // set after halfWidth measured (starts right-to-left visually)
  half: 0,
  cur: NORMAL_SPEED_2,
  target: NORMAL_SPEED_2,
  dir: 1,          // right
};

t1.el.addEventListener('mouseenter', () => { t1.target = HOVER_SPEED; });
t1.el.addEventListener('mouseleave', () => { t1.target = NORMAL_SPEED; });
t2.el.addEventListener('mouseenter', () => { t2.target = HOVER_SPEED; });
t2.el.addEventListener('mouseleave', () => { t2.target = NORMAL_SPEED_2; });

let halted = false;

function cacheWidths() {
  t1.half = t1.track.scrollWidth / 2;
  t2.half = t2.track.scrollWidth / 2;
  if (t2.pos === null && t2.half > 0) t2.pos = -t2.half; // start so right-moving content is visible
}
requestAnimationFrame(() => requestAnimationFrame(cacheWidths));
window.addEventListener('resize', cacheWidths);

function tickTicker(t) {
  if (halted || t.pos === null) return;
  t.cur += (t.target - t.cur) * LERP_FACTOR;
  t.pos += t.dir * t.cur;
  if (t.half > 0) {
    if (t.dir === -1 && t.pos <= -t.half) t.pos += t.half; // left-moving loop
    if (t.dir ===  1 && t.pos >= 0)       t.pos -= t.half; // right-moving loop
  }
  t.track.style.transform = `translateX(${t.pos}px)`;
}

function tick() {
  tickTicker(t1);
  tickTicker(t2);
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

function pauseTickers()  { halted = true; }
function resumeTickers() { halted = false; }

/* ── LIGHTBOX ── */
const lightbox      = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn      = document.getElementById('lightbox-close');
const lbDotsEl      = document.getElementById('lb-dots');
const lbPrevBtn     = document.getElementById('lb-carousel-prev');
const lbNextBtn     = document.getElementById('lb-carousel-next');

let currentImages = [];
let currentIndex  = 0;

function updateLightboxDisplay() {
  lightboxImage.src = currentImages[currentIndex];

  lbDotsEl.innerHTML = '';
  currentImages.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'lb-dot' + (i === currentIndex ? ' active' : '');
    lbDotsEl.appendChild(dot);
  });
}

function openLightbox(images, startIndex) {
  currentImages = images;
  currentIndex  = startIndex;
  updateLightboxDisplay();
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  pauseTickers();
  document.addEventListener('keydown', lightboxKeyHandler);
  closeBtn.focus();
}

function closeLightbox() {
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  resumeTickers();
  document.removeEventListener('keydown', lightboxKeyHandler);
}

lbPrevBtn.addEventListener('click', e => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateLightboxDisplay();
});
lbNextBtn.addEventListener('click', e => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateLightboxDisplay();
});

closeBtn.addEventListener('click', e => { e.stopPropagation(); closeLightbox(); });
lightbox.addEventListener('click', closeLightbox);

function lightboxKeyHandler(e) {
  const n = currentImages.length;
  if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % n; updateLightboxDisplay(); }
  else if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + n) % n; updateLightboxDisplay(); }
  else if (e.key === 'Escape') { closeLightbox(); }
}

/* ── Pause when out of view / window loses focus ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) resumeTickers(); else pauseTickers(); });
}, { threshold: 0.1 });
observer.observe(t1.el);

window.addEventListener('blur', pauseTickers);
window.addEventListener('focus', () => {
  if (lightbox.getAttribute('aria-hidden') !== 'false') resumeTickers();
});
