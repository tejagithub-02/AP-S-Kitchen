// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    setTimeout(() => setLoaded(true), 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`custom-header ${scrolled ? 'scrolled' : ''} ${loaded ? 'loaded' : ''}`}>
      <div className="header-container">
        {/* Left side - Logo and Brand Name */}
        <div className="logo-box" onClick={() => handleLinkClick('top')}>
          <img src="/images/logo.png" alt="APS Kitchen Logo" className={`logo ${loaded ? 'loaded' : ''}`} />
          <span
  className={`brand-name ${loaded ? 'loaded' : ''}`}
  style={{
    color: '#F26C63',
  
  }}
>
  APS Kitchen
</span>

        </div>

        {/* Right side - Navigation */}
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button className={`nav-link ${loaded ? 'loaded' : ''}`} onClick={() => handleLinkClick('top')}>
            <span className="nav-text">Home</span><span className="nav-hover" />
          </button>
          <button className={`nav-link ${loaded ? 'loaded' : ''}`} onClick={() => handleLinkClick('about-us')}>
            <span className="nav-text">About Us</span><span className="nav-hover" />
          </button>
          <button className={`nav-link ${loaded ? 'loaded' : ''}`} onClick={() => handleLinkClick('products')}>
            <span className="nav-text">Products</span><span className="nav-hover" />
          </button>
          <button className={`nav-link ${loaded ? 'loaded' : ''}`} onClick={() => handleLinkClick('manufacture')}>
            <span className="nav-text">Manufacture</span><span className="nav-hover" />
          </button>
        </nav>

        {/* Toggle Hamburger */}
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <span className="close-icon">✕</span>
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;