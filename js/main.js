/**
 * AI METHICHAI — 3D ARTIST PORTFOLIO
 * Vanilla JavaScript (Interactivity, Filter System, Lightbox Modal, Mobile Menu)
 */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- 1. Mobile Menu Toggle ----------
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // ---------- 2. Active Link on Scroll (Scrollspy) ----------
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active-link');
        } else {
          targetNavLink.classList.remove('active-link');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ---------- 3. Category Filter System ----------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.projects-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'flex';
          item.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // ---------- 4. Artwork Lightbox Modal ----------
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');

  function openLightbox(imgSrc, title, desc) {
    if (!lightboxModal) return;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = title || 'Artwork Showcase';
    lightboxTitle.textContent = title || 'Artwork Showcase';
    lightboxDesc.textContent = desc || '';
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Bind to project cards
  projectItems.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.getAttribute('data-img') || card.querySelector('img')?.src;
      const title = card.getAttribute('data-title') || card.querySelector('.projects-title')?.textContent;
      const desc = card.getAttribute('data-desc') || card.querySelector('.projects-description')?.textContent;
      openLightbox(img, title, desc);
    });
  });

  // Bind to highlight animation card
  const animationHighlight = document.querySelector('.animation-highlight-image');
  if (animationHighlight) {
    animationHighlight.addEventListener('click', () => {
      const img = animationHighlight.getAttribute('data-lightbox') || animationHighlight.querySelector('img')?.src;
      openLightbox(img, 'We Are Chouri: Cinematic Cutscenes & Python Scripting', 'Applied custom Python scripting to automate animation stamping, batch keyframe processing, and color adjustment pipelines in Unity.');
    });
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  // Close lightbox on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal?.classList.contains('active')) {
      closeLightbox();
    }
  });

  // ---------- 5. Smooth Scroll for Anchor Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

});
