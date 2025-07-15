import React from 'react';
import './Footer.css';
import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Logo and Brand */}
          <div className="footer-column">
          <img src="/images/logo.png" alt="APS Kitchen Logo" className="footer-logo-img" />

            <div className="footer-brand">APS Kitchen</div>
          </div>

          {/* Address */}
          <div className="footer-address">
            <p>
              📍 No. 38/2, Ground Floor, Near Nagarjuna College, Ramgondanahalli <br />
                     Village, Singanayakanahalli, Yelahanka, Bangalore North,<br />
                     Bangalore Urban, Karnataka 560064
            </p>
          </div>

          {/* Phone */}
          <div className="footer-phone">
  <p>
    📞 <a href="tel:+917022947654" style={{ textDecoration: 'none', color: 'inherit' }}>+91 7022947654</a>
  </p>
</div>
        </div>

        {/* Social Links */}
        <div className="footer-bottom-row">
  <div className="footer-socials">
    <a href="https://wa.me/917022947654" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp /> <span>WhatsApp</span>
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram /> <span>Instagram</span>
    </a>
    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
      <FaYoutube /> <span>YouTube</span>
    </a>
  </div>

  <p className="footer-bottom">
    Designed by Bloom IT Solutions.
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
