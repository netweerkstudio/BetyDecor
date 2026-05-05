import { useState, useEffect } from 'react';

function About() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [aboutTop, setAboutTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = document.querySelector('.about');
    if (el) setAboutTop(el.getBoundingClientRect().top + window.scrollY);
  }, []);

  return (
    <div id="about" className="about">
      <div className={aboutTop < scrollPosition + 300 ? 'aboutContainer animate' : 'aboutContainer'}>
        <div className="content">
          <h1 className="title">À propos de nous</h1>
          <p>Bienvenue chez BetyDecor, votre agence de design d'intérieur située dans la magnifique ville de Tanger. Nous sommes passionnés par l'art de transformer des espaces ordinaires en lieux extraordinaires, où chaque détail compte et chaque projet est une œuvre d'art unique.</p>
        </div>
        <div className="aboutImage">
          <img src="/images/aboutUs-img.png" alt="About Us Image" />
        </div>
      </div>
    </div>
  );
}
export default About;
