document.addEventListener('DOMContentLoaded', () => {
  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // small entrance animations
  gsap.from('#name', {opacity:0, y:18, duration:0.8, ease:'power3.out'});
  gsap.from('.subtitle', {opacity:0, y:14, duration:0.8, delay:0.12});
  gsap.from('.hero-text', {opacity:0, y:10, duration:0.9, delay:0.24});
  gsap.from('.hero-actions .btn', {
    opacity:0, y:8, duration:0.9, delay:0.36, stagger:0.08
  });

  // floating badges subtle bob
  gsap.to('.floating-badges .badge', {
    y: -6, repeat: -1, yoyo: true, ease: 'sine.inOut', duration: 2, stagger: 0.25
  });

  // profile card gentle tilt on mouse move
  const card = document.querySelector('.profile-card');
  if(card){
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (py - 0.5) * 6;
      const ry = (px - 0.5) * -8;
      gsap.to(card, {rotationX: rx, rotationY: ry, scale:1.02, transformPerspective:800, duration:0.45, ease:'power2.out'});
    });
    card.addEventListener('mouseleave', () => gsap.to(card, {rotationX:0, rotationY:0, scale:1, duration:0.6, ease:'power2.out'}));
  }

  // project cards reveal on scroll
  gsap.utils.toArray('.project-card').forEach(card => {
    gsap.from(card, {
      scrollTrigger: {trigger: card, start: 'top 85%'},
      opacity: 0,
      y: 20,
      duration: 0.9,
      ease: 'power3.out'
    });
  });

  // about stats animation
  gsap.utils.toArray('.stat').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: {trigger: el, start: 'top 90%'},
      opacity: 0, y: 12, duration:0.9, delay:i*0.08
    });
  });

  // skill bars animate when visible
  gsap.utils.toArray('.skill-fill').forEach(fill => {
    const target = parseInt(fill.dataset.fill || 70, 10);
    gsap.to(fill, {
      width: target + '%',
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {trigger: fill, start: 'top 90%'}
    });
  });

  // small parallax for hero-right on scroll
  gsap.to('.profile-card', {
    scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=400', scrub: true },
    y: -20, ease: 'none'
  });

  // subtle nav show on scroll down
  gsap.from('.topbar', {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // accessibility: reduce motion if user prefers reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if(prefersReduced.matches) {
    gsap.globalTimeline.timeScale(0.2);
  }

  // Blender images/videos reveal
gsap.utils.toArray('.blender-grid img, .blender-grid video').forEach(el => {
  gsap.from(el, {
    scrollTrigger: {trigger: el, start: 'top 90%'},
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power3.out'
  });
});

});
