/* ============================================================
   Portfolio — Yogesh Pandian
   main.js

   HOW TO ADD / EDIT PROJECTS:
   - Add your image files to:  images/projects/
   - Update the projectItems array below with the correct src path and name
   - Each entry: { name: 'Project Title', src: 'images/projects/your-file.jpg' }
   ============================================================ */

const projectItems = [
  { name: 'Business Presentation',       src: 'images/projects/Business Presentation.jpg.jpeg' },
  { name: 'Data and Report Presentation',src: 'images/projects/Data and Report Presentation.jpg.jpeg' },
  { name: 'Educational Presentation',    src: 'images/projects/Educational Presentation.jpg.jpeg' },
  { name: 'Food Ad',                      src: 'images/projects/Foodad-RecoveredNew.jpg.jpeg' },
  { name: 'Social Post',                  src: 'images/projects/NEWpost7.jpg.jpeg' },
  { name: 'Pitch Deck Presentation',     src: 'images/projects/Pitch Deck Presentation.jpg.jpeg' },
  { name: 'Thief of Heart',              src: 'images/projects/Thiefofheart.jpg.jpeg' },
  { name: 'Art of War',                  src: 'images/projects/artofwar.jpg.jpeg' },
  { name: 'Axe Ad',                      src: 'images/projects/axead.jpg.jpeg' },
  { name: 'Cars',                         src: 'images/projects/cars.jpg.jpeg' },
  { name: 'Class Perfume',               src: 'images/projects/classperfume.jpg.jpeg' },
  { name: 'Instagram Post',              src: 'images/projects/insta+vepost111.jpg.jpeg' },
  { name: 'Layer Styles Mask',           src: 'images/projects/layeratylesmask1.jpg.jpeg' },
  { name: 'Leo 100th',                   src: 'images/projects/leo100th.jpg.jpeg' },
  { name: 'Love Movie Poster',           src: 'images/projects/lovemovieposter.jpg.jpeg' },
  { name: 'Majestic Sips',              src: 'images/projects/majesticsipsnew.jpg.jpeg' },
  { name: 'New Shoe',                    src: 'images/projects/newshoe2.jpg.jpeg' },
  { name: 'Nike',                         src: 'images/projects/nike.jpg.jpeg' },
  { name: 'Royal Elixir Ad',            src: 'images/projects/royalelixirad.jpg.jpeg' },
  { name: 'Shoe Sale',                   src: 'images/projects/shoesaleend2.jpg.jpeg' },
  { name: 'Thriller',                    src: 'images/projects/thriller.jpg.jpeg' },
  { name: 'Wars',                         src: 'images/projects/wars2.jpg.jpeg' },
  { name: 'Watch Ad',                    src: 'images/projects/watchadee.jpg.jpeg' }
];

/* Placeholder shown when a project image is missing */
const PLACEHOLDER_SRC = 'https://picsum.photos/1600/1000?grayscale';

function createCardElement(item, index) {
  const card = document.createElement('div');
  card.className = 'card';
  const img = document.createElement('img');
  img.src = item.src;
  img.alt = item.name;
  img.onerror = function() { this.src = PLACEHOLDER_SRC; this.onerror = null; };
  img.tabIndex = 0;
  card.appendChild(img);
  img.addEventListener('click', function(e) { e.stopPropagation(); openLightboxAt(index); });
  img.addEventListener('keydown', (e) => { if (e.key === 'Enter') openLightboxAt(index); });
  return card;
}

/* Build carousel (duplicated for infinite loop effect) */
const track = document.getElementById('carousel-track');
for (let pass = 0; pass < 2; pass++) {
  projectItems.forEach((item, idx) => { track.appendChild(createCardElement(item, idx)); });
}

/* ── RAF-based carousel motion ──
   Speed is lerped so hover slow-down and resume are seamless.
   NORMAL_SPEED  = px moved per frame at 60 fps (increase to go faster)
   HOVER_SPEED   = px per frame while hovered (decrease to go slower)
   LERP_FACTOR   = how quickly speed transitions (0 = instant, 1 = never) */
const carousel = document.getElementById('projects-carousel');

const NORMAL_SPEED = 1.2;
const HOVER_SPEED  = 0.08;
const LERP_FACTOR  = 0.04;

let position    = 0;
let curSpeed    = NORMAL_SPEED;
let targetSpeed = NORMAL_SPEED;
let halted      = false;   // true when paused for visibility / lightbox / blur

carousel.addEventListener('mouseenter', () => { targetSpeed = HOVER_SPEED; });
carousel.addEventListener('mouseleave', () => { targetSpeed = NORMAL_SPEED; });

let halfWidth = 0;
function cacheHalfWidth() { halfWidth = track.scrollWidth / 2; }
// Measure after images have had a chance to load
requestAnimationFrame(() => requestAnimationFrame(cacheHalfWidth));
window.addEventListener('resize', cacheHalfWidth);

function tick() {
  if (!halted) {
    curSpeed += (targetSpeed - curSpeed) * LERP_FACTOR;
    position -= curSpeed;
    if (halfWidth > 0 && position <= -halfWidth) position += halfWidth;
    track.style.transform = `translateX(${position}px)`;
  }
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

function pauseCarousel()  { halted = true; }
function resumeCarousel() { halted = false; }

/* ── LIGHTBOX ── */
const lightbox      = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn      = document.getElementById('lightbox-close');
const prevBtn       = document.getElementById('lightbox-prev');
const nextBtn       = document.getElementById('lightbox-next');
let currentIndex = 0;

function showLightboxImage() {
  const item = projectItems[currentIndex];
  lightboxImage.src = item.src;
  lightboxImage.alt = item.name;
}

function openLightboxAt(index) {
  currentIndex = ((index % projectItems.length) + projectItems.length) % projectItems.length;
  showLightboxImage();
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  pauseCarousel();
  document.addEventListener('keydown', lightboxKeyHandler);
  closeBtn.focus();
}

function closeLightbox() {
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  resumeCarousel();
  document.removeEventListener('keydown', lightboxKeyHandler);
}

closeBtn.addEventListener('click', function(e) { e.stopPropagation(); closeLightbox(); });
lightbox.addEventListener('click', closeLightbox);
lightboxImage.addEventListener('click', (e) => e.stopPropagation());

prevBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + projectItems.length) % projectItems.length;
  showLightboxImage();
});
nextBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % projectItems.length;
  showLightboxImage();
});

function lightboxKeyHandler(e) {
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % projectItems.length;
    showLightboxImage();
  } else if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + projectItems.length) % projectItems.length;
    showLightboxImage();
  } else if (e.key === 'Escape') {
    closeLightbox();
  }
}

/* Pause carousel when scrolled out of view */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) resumeCarousel(); else pauseCarousel();
  });
}, { threshold: 0.2 });
observer.observe(carousel);

window.addEventListener('blur', () => pauseCarousel());
window.addEventListener('focus', () => {
  if (lightbox.getAttribute('aria-hidden') !== 'false') resumeCarousel();
});

