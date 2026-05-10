function Footer() {
  return (
    <footer className="Footer">
      <div className="FooterContainer">
        <div className="FooterTop">
          <div className="FooterCol logo-col">
            <img src="/logo/BetyDecor-Logo-Transparent.png" alt="BetyDecor Logo" />
            <p>Agence de design d'intérieur à Tanger. Nous transformons vos espaces de vie et de travail avec créativité et expertise.</p>
            <div className="socialMedia">
              <a target="_blank" href="https://www.facebook.com/betydecorcom" rel="noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a target="_blank" href="https://www.instagram.com/betydecorcom/" rel="noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
          
          <div className="FooterCol links-col">
            <h3>Nos Services</h3>
            <ul>
              <li><a href="/architecte-interieur-tanger">Architecte d'Intérieur</a></li>
              <li><a href="/design-interieur-tanger">Design d'Intérieur</a></li>
              <li><a href="/decoration-interieur-tanger">Décoration d'Intérieur</a></li>
            </ul>
          </div>

          <div className="FooterCol links-col">
            <h3>Informations</h3>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/privacy-policy">Politique de confidentialité</a></li>
              <li><a href="/terms-of-use">Conditions d'utilisation</a></li>
            </ul>
          </div>
          
          <div className="FooterCol contact-col">
            <h3>Contact</h3>
            <p><i className="fa-solid fa-location-dot"></i> Tanger, Maroc</p>
            <p><i className="fa-solid fa-envelope"></i> contact@betydecor.com</p>
            <p><i className="fa-solid fa-phone"></i> +212 700 78 45 94</p>
          </div>
        </div>
        
        <div className="FooterBottom">
          <p>© {new Date().getFullYear()} BetyDecor. Tous droits réservés.</p>
          <p>Développé par <a target="_blank" href="https://netweerk.studio/" rel="noreferrer">netweerk.studio</a></p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
