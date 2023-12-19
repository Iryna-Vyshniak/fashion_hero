new hoverEffect({
  parent: document.querySelector('.displacement'),
  intensity: 0.5,
  image1: './images/01.png',
  image2: './images/02.png',
  displacementImage: './images/displacement.png',
  imagesRatio: 380 / 300,
});

// NAVBAR
gsap.from('.navbar div', {
  duration: 1.5,
  delay: 1.5,
  opacity: 0,
  y: 20,
  ease: 'expo.inOut',
  stagger: 0.08,
});

// MEDIA
gsap.from('.media ul li', {
  duration: 1.5,
  delay: 1.5,
  opacity: 0,
  x: -20,
  ease: 'expo.inOut',
  stagger: 0.08,
});

// TEXT
gsap.from('.text h1 .hidetext', {
  duration: 1.5,
  delay: 1,
  y: '100%',
  ease: 'expo.inOut',
});

gsap.from('.text h3 .hidetext', {
  duration: 1.5,
  delay: 1.2,
  y: '100%',
  ease: 'expo.inOut',
});

gsap.from('.text p .hidetext', {
  duration: 1.5,
  delay: 1.3,
  y: '100%',
  ease: 'expo.inOut',
});

gsap.from('.text h2', {
  duration: 1.5,
  delay: 1.5,
  opacity: 0,
  x: -10000,
  ease: 'expo.inOut',
});

// SPONSOR
gsap.from('.sponsor img', {
  duration: 1.5,
  delay: 1.5,
  opacity: 0,
  y: 20,
  ease: 'expo.inOut',
});

gsap.from('.sponsor p', {
  duration: 1.5,
  delay: 1.6,
  opacity: 0,
  y: 20,
  ease: 'expo.inOut',
});

// DISTORTION
gsap.from('.distortion', {
  duration: 1.5,
  delay: 2,
  opacity: 0,
  y: 20,
  ease: 'expo.inOut',
});

// OVERLAY
gsap.to('.first', {
  duration: 1.5,
  delay: 0.5,
  top: '-100%',
  ease: 'expo.inOut',
});

gsap.to('.second', {
  duration: 1.5,
  delay: 0.7,
  top: '-100%',
  ease: 'expo.inOut',
});

gsap.to('.third', {
  duration: 1.5,
  delay: 0.9,
  top: '-100%',
  ease: 'expo.inOut',
});
