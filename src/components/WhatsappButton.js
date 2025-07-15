import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappButton.css'; // Import the CSS for animation

const WhatsappButton = () => {
  return (
    <div className="whatsapp-button-container">
      <a
        href="https://wa.me/917022947654"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsappButton;
