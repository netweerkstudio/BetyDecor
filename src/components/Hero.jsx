import { useState, useEffect, useRef } from 'react';

const SLIDES = [
  { src: '/images/salon-marocain.jpg', label: 'Salon Marocain' },
  { src: '/images/terasse.jpg',        label: 'Terrasse' },
  { src: '/images/chambre.jpg',        label: 'Chambre' },
  { src: '/images/reception.jpg',      label: 'Réception' },
  { src: '/images/salon.jpeg',         label: 'Salon' },
];

const INTERVAL = 7000;

function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState(null);
  const timerRef   = useRef(null);

  const goTo = (index) => {
    setPrev(current);
    setCurrent(index);
  };

  const next = () => goTo((current + 1) % SLIDES.length);
  const back = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(c => {
        setPrev(c);
        return (c + 1) % SLIDES.length;
      });
    }, INTERVAL);

    return () => clearInterval(timerRef.current);
  }, []);

  // reset auto-slide when current changes
  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(c => {
        setPrev(c);
        return (c + 1) % SLIDES.length;
      });
    }, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [current]);

  return (
    <section className="hero" id="hero">
      {/* ── Background slides ── */}
      <div className="hero-slides">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide ${i === current ? 'active' : ''} ${i === prev ? 'leaving' : ''}`}
            style={{ backgroundImage: `url(${slide.src})` }}
          />
        ))}
        {/* Multi-layer overlay */}
        <div className="hero-overlay" />
      </div>

      {/* ── Content ── */}
      <div className="hero-content" key={current}>
        {/* Eye-brow label */}
        <span className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          {SLIDES[current].label}
        </span>

        <h1 className="hero-heading">
          <span className="hero-heading-top">Interior</span>
          <span className="hero-heading-bottom">Design</span>
        </h1>

        <p className="hero-description">
          Toujours choisir le meilleur.
        </p>

        <div className="hero-actions">
          <a href="#work" className="hero-btn-primary">
            Explorer nos réalisations
            <i className="fa-solid fa-arrow-right" />
          </a>
          <a href="#contact" className="hero-btn-secondary">
            Nous contacter
          </a>
        </div>
      </div>

 
      {/* ── Slider controls ── */}
      <div className="hero-controls">


        {/* Arrows */}
        <div className="hero-arrows">
          <button className="hero-arrow" onClick={back} aria-label="Précédent">
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button className="hero-arrow" onClick={next} aria-label="Suivant">
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      </div>

      {/* ── Dot indicators ── */}
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Scroll indicator ── */}
      <a href="#about" className="hero-scroll" aria-label="Défiler vers le bas">
        <span className="hero-scroll-text">Défiler</span>
        <span className="hero-scroll-line">
          <span className="hero-scroll-dot" />
        </span>
      </a>
    </section>
  );
}

export default Hero;
