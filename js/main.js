(function () {
  'use strict';

  // Header scroll
  const header = document.getElementById('header');
  function updateHeader() {
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', updateHeader);
  updateHeader();

  // Mobile menu
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  menuBtn.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    menuIconOpen.style.display = isOpen ? 'none' : 'block';
    menuIconClose.style.display = isOpen ? 'block' : 'none';
  });

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      menuIconOpen.style.display = 'block';
      menuIconClose.style.display = 'none';
    });
  });

  // Fade-in on scroll
  const fadeEls = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '-80px' }
  );
  fadeEls.forEach(function (el) { fadeObserver.observe(el); });

  // Animated counters
  function animateCounter(el) {
    const end = parseFloat(el.dataset.end);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = parseFloat(el.dataset.duration || '2') * 1000;
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = prefix + (eased * end).toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const counters = document.querySelectorAll('[data-counter]');
  const counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach(function (el) { counterObserver.observe(el); });

  // FAQ Accordion
  document.querySelectorAll('.accordion-item').forEach(function (item) {
    const trigger = item.querySelector('.accordion-trigger');
    trigger.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item').forEach(function (i) {
        i.classList.remove('open');
      });
      if (!isOpen) item.classList.add('open');
    });
  });

  // Testimonials slider
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach(function (s, i) {
      s.classList.toggle('active', i === currentSlide);
    });
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === currentSlide);
    });
  }

  document.getElementById('prev-slide').addEventListener('click', function () {
    showSlide(currentSlide - 1);
    resetInterval();
  });
  document.getElementById('next-slide').addEventListener('click', function () {
    showSlide(currentSlide + 1);
    resetInterval();
  });
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      showSlide(i);
      resetInterval();
    });
  });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(function () { showSlide(currentSlide + 1); }, 6000);
  }
  slideInterval = setInterval(function () { showSlide(currentSlide + 1); }, 6000);

  // Contact form
  const form = document.getElementById('contact-form');
  const formWrap = document.getElementById('contact-form-wrap');
  const successWrap = document.getElementById('contact-success');
  const resetBtn = document.getElementById('reset-form');

  function validateForm(data) {
    const errors = {};
    if (!data.firstName.trim()) errors.firstName = 'Le prénom est requis';
    if (!data.lastName.trim()) errors.lastName = 'Le nom est requis';
    if (!data.company.trim()) errors.company = 'La société est requise';
    if (!data.phone.trim()) {
      errors.phone = 'Le téléphone est requis';
    } else if (!/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(data.phone.replace(/\s/g, ''))) {
      errors.phone = 'Numéro de téléphone invalide';
    }
    if (!data.email.trim()) {
      errors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Email invalide';
    }
    if (!data.employees) errors.employees = 'Veuillez sélectionner une option';
    if (!data.revenue) errors.revenue = 'Veuillez sélectionner une option';
    return errors;
  }

  function showErrors(errors) {
    document.querySelectorAll('.form-error').forEach(function (el) { el.textContent = ''; });
    document.querySelectorAll('.form-input, .form-select').forEach(function (el) {
      el.classList.remove('invalid');
    });
    Object.keys(errors).forEach(function (key) {
      const errEl = document.getElementById('error-' + key);
      const inputEl = document.getElementById(key);
      if (errEl) errEl.textContent = errors[key];
      if (inputEl) inputEl.classList.add('invalid');
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      company: form.company.value,
      phone: form.phone.value,
      email: form.email.value,
      employees: form.employees.value,
      revenue: form.revenue.value,
      message: form.message.value,
    };
    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      showErrors(errors);
      return;
    }

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<svg class="animate-spin icon-md" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> Envoi en cours...';

    setTimeout(function () {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Envoyer ma demande <i data-lucide="send" class="icon-md"></i>';
      formWrap.classList.add('hidden');
      successWrap.classList.add('show');
      if (window.lucide) lucide.createIcons();
    }, 1500);
  });

  resetBtn.addEventListener('click', function () {
    successWrap.classList.remove('show');
    formWrap.classList.remove('hidden');
  });

  // Lucide icons
  if (window.lucide) lucide.createIcons();

  // Footer year
  document.getElementById('footer-year').textContent = new Date().getFullYear();
})();
