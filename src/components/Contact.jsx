import { useState, useEffect } from 'react';

function Contact() {
  const [Message, setMessage] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contactTop, setContactTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = document.querySelector('.Contact');
    if (el) setContactTop(el.getBoundingClientRect().top + window.scrollY);
  }, []);

  return (
    <div id="contact" className="Contact">
      <div className="contactBlob"></div>
      <h1 className="title">Contactez-nous</h1>
      <div className={contactTop < scrollPosition + 400 ? 'ContactContainer animate' : 'ContactContainer'}>

        {/* ── Left: info panel ── */}
        <div className="contactContent">
          <p className="contactIntro">
            Prêt à transformer votre espace avec BetyDecor ?<br />
            Contactez-nous dès aujourd'hui pour une consultation et laissez-nous
            vous aider à réaliser vos rêves de design d'intérieur.
          </p>
          <div className="details">
            <div className="detailItem">
              <div className="detailIcon"><i className="fa-solid fa-phone"></i></div>
              <div className="detailText">
                <span>Téléphone</span>
                <a href="tel:+212700784594">+212 7 00 784594</a>
              </div>
            </div>
            <div className="detailItem">
              <div className="detailIcon"><i className="fa-solid fa-envelope"></i></div>
              <div className="detailText">
                <span>Email</span>
                <a href="mailto:contact@betydecor.com">contact@betydecor.com</a>
              </div>
            </div>
            <div className="detailItem">
              <div className="detailIcon"><i className="fa-solid fa-location-dot"></i></div>
              <div className="detailText">
                <span>Adresse</span>
                <p>Tanger, Maroc</p>
              </div>
            </div>
          </div>
          <div className="contactSocials">
            <a href="https://www.facebook.com/betydecorcom" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/betydecorcom/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://wa.me/+212700784594" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

        {/* ── Right: form panel ── */}
        <div className="contactForm">
          <div className="formCard">
            <h3>Envoyez-nous un message</h3>
            <p>Nous vous répondrons via WhatsApp dans les plus brefs délais.</p>
            <div className="formGroup">
              <textarea
                id="Message"
                value={Message}
                onChange={(e) => setMessage(e.currentTarget.value)}
                placeholder="Écrivez votre message ici..."
                maxLength={500}
              />
              <span className="charCount">{Message.length}/500</span>
            </div>
            <div className="button">
              <a
                href={`https://wa.me/+212700784594?text=${encodeURIComponent(Message)}`}
                target="_blank"
                rel="noreferrer"
                className={Message.trim() ? '' : 'disabled'}
              >
                <i className="fa-brands fa-whatsapp"></i> Envoyer via WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Contact;
