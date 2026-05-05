import { useState, useEffect } from 'react';

function Navbar() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [sectionName, setSectionName] = useState('');

  function getHash() {
    const hash = window.location.hash;
    if (hash.startsWith('#')) setSectionName(hash.substring(1));
  }

  return (
    <>
      <div className="navbar">
        <div className="navbarContainer">
          <h1><a href="/">BetyDecor</a></h1>
          <div className="menu">
            <ul>
              <li onClick={getHash} className={sectionName === 'hero' ? 'active' : ''}><a href="/#hero">Accueil</a></li>
              <li onClick={getHash} className={sectionName === 'about' ? 'active' : ''}><a href="/#about">À propos</a></li>
              <li onClick={getHash} className={sectionName === 'work' ? 'active' : ''}><a href="/#work">Nos travaux</a></li>
              <li onClick={getHash} className={sectionName === 'services' ? 'active' : ''}><a href="/#services">Nos services</a></li>
              <li onClick={getHash} className={sectionName === 'contact' ? 'active' : ''}><a href="/#contact">Contact</a></li>
            </ul>
            <i
              className={toggleSidebar ? 'fa-solid fa-circle-xmark' : 'fa-solid fa-bars-staggered'}
              onClick={() => setToggleSidebar(!toggleSidebar)}
            ></i>
          </div>
        </div>
      </div>
      {toggleSidebar && (
        <div className="Sidebar">
          <div className="SidebarContainer">
            <ul>
              <li onClick={getHash} className={sectionName === 'hero' || sectionName === '' ? 'active' : ''}><a href="/#hero">Accueil</a></li>
              <li onClick={getHash} className={sectionName === 'about' ? 'active' : ''}><a href="/#about">À propos</a></li>
              <li onClick={getHash} className={sectionName === 'work' ? 'active' : ''}><a href="/#work">Nos travaux</a></li>
              <li onClick={getHash} className={sectionName === 'services' ? 'active' : ''}><a href="/#services">Nos services</a></li>
              <li onClick={getHash} className={sectionName === 'contact' ? 'active' : ''}><a href="/#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
