// src/components/Preloader.jsx
import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1500); // 1.5s timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={hidden ? 'hidden' : ''}>
      <div className="preloader-content">
        <div className="spinner"></div>
        <h1 className="brand-name">AP's <span>Kitchen</span></h1>
      </div>
    </div>
  );
};

export default Preloader;
