function Footer() {
  return (
    <div className="Footer">
      <div className="FooterContainer">
        <div className="logo">
          <img src="/logo/BetyDecor-Logo-Transparent.png" alt="Logo" />
        </div>
        <div className="content">
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/privacy-policy">Politique de confidentialité</a></li>
            <li><a href="/terms-of-use">Conditions d'utilisation</a></li>
          </ul>
          <p>© 2026 BetyDecor. Tous droits réservés.
            <br />
            Développé par <a target="_blank" href="https://netweerk.studio/" rel="noreferrer">netweerk.studio</a>
          </p>
        </div>
        <div className="socialMedia">
          <a target="_blank" href="https://www.facebook.com/betydecorcom" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
          <a target="_blank" href="https://www.instagram.com/betydecorcom/" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
