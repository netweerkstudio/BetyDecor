import { useState, useEffect } from 'react';
import Swipper from './Swipper';

function Hero() {
  const bgImages = [
    '/images/salon-marocain.jpg',
    '/images/terasse.jpg',
    '/images/chambre.jpg',
    '/images/reception.jpg',
    '/images/salon.jpeg',
  ];
  const imgLength = bgImages.length;
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prev => (prev + 1) % imgLength);
    }, 9000);
    return () => clearInterval(interval);
  }, [imgLength]);

  const next = () => setImageIndex(prev => (prev + 1) % imgLength);
  const back = () => setImageIndex(prev => (prev - 1 + imgLength) % imgLength);

  return (
    <div
      className="hero"
      id="hero"
      style={{ background: `url(${bgImages[imageIndex]}) rgba(0,0,0,50%) no-repeat center`, backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}
    >
      <div className="heroContainer animate">
        <h1><span>Interior</span><br />Design</h1>
        <p>Toujours choisir le meilleur. BetyDecor transforme vos espaces de vie et de travail avec élégance, de la conception sur mesure à la réalisation complète de vos travaux à Tanger et ses environs.</p>
        <div className="button">
          <a href="#work">EXPLORER</a>
        </div>
      </div>
      <Swipper next={next} back={back} imageIndex={imageIndex} bgImages={bgImages} />
    </div>
  );
}
export default Hero;
