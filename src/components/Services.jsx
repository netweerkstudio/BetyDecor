import { useState, useEffect } from 'react';
import Swipper from './Swipper';

function Services() {
  const services = [
    { name: 'Plan 2D',                imageUrl: '/images/plan2d.jpg' },
    { name: 'Visualisation 3D',        imageUrl: '/images/visualisation3d.jpeg' },
    { name: 'Réalisation des travaux', imageUrl: '/images/Realisation_des_travaux.jpg' },
    { name: 'Suivi de chantier',       imageUrl: '/images/suivi_de_chantier.jpg' },
  ];

  const [serviceIndex, setServiceIndex] = useState(0);
  const servicesLength = services.length;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [servicesTop, setServicesTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = document.querySelector('.Services');
    if (el) setServicesTop(el.getBoundingClientRect().top + window.scrollY);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex(prev => (prev + 1) % servicesLength);
    }, 17000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setServiceIndex(prev => (prev + 1) % servicesLength);
  const back = () => setServiceIndex(prev => (prev - 1 + servicesLength) % servicesLength);

  const getToDisplay = () => {
    const sliced = services.slice(serviceIndex, serviceIndex + 3);
    if (sliced.length < 3) return [...sliced, ...services.slice(0, 3 - sliced.length)];
    return sliced;
  };

  const displayed = getToDisplay();

  return (
    <div id="services" className="Services">
      <h1 className="title">Nos Services</h1>
      <div className={servicesTop < scrollPosition + 400 ? 'ServicesContainer animate' : 'ServicesContainer'}>
        <div className="cards">
          {displayed.map((service, index) => (
            <div
              key={index}
              className={`card ${index === 1 ? 'active' : ''}`}
              style={{
                background: `url(${service.imageUrl}) no-repeat center / cover,
                  ${index === 1 ? 'linear-gradient(to top, rgba(0,0,0,70%), rgba(0,0,0,0))' : 'rgba(0,0,0,70%)'}`,
              }}
              onClick={next}
            >
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <Swipper next={next} back={back} imageIndex={serviceIndex} bgImages={services} />
    </div>
  );
}
export default Services;
