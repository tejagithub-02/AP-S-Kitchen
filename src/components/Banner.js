// src/components/Banner.jsx
import React, { useEffect, useState } from 'react';
import './Banner.css';

const banners = [
  {
    image: '/images/banner1.jpg',
    heading: 'Authentic Indian Spices',
    subtext: 'Handcrafted with traditional recipes passed down through generations',
    tagline: 'Experience the fiery taste of our premium chilli blends',
    special: true,
    spices: ['chilli', 'turmeric', 'coriander', 'cumin', 'cardamom']
  },
  {
    image: '/images/banner2.jpg',
    heading: 'Farm to Kitchen',
    subtext: 'Sourced directly from local farms for maximum freshness',
    tagline: '100% Natural • No Preservatives • Pure Flavor'
  },
 
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [spiceElements, setSpiceElements] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % banners.length);
        setFade(true);
      }, 800);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (banners[index].special) {
      // Create floating spice elements
      const spices = [];
      for (let i = 0; i < 15; i++) {
        const spiceType = banners[index].spices[Math.floor(Math.random() * banners[index].spices.length)];
        spices.push({
          id: i,
          type: spiceType,
          left: Math.random() * 100,
          delay: Math.random() * 15,
          duration: 10 + Math.random() * 20
        });
      }
      setSpiceElements(spices);
    } else {
      setSpiceElements([]);
    }
  }, [index]);

  const handleDotClick = (i) => {
    setFade(false);
    setTimeout(() => {
      setIndex(i);
      setFade(true);
    }, 500);
  };

  const { image, heading, subtext, tagline, special } = banners[index];

  return (
    <section className="banner" id="top">
      <div 
        className={`banner-slide ${fade ? 'fade-in' : 'fade-out'} ${special ? 'special-animation' : ''}`}
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${image})`
        }}
      >
        {special && (
          <div className="spice-animation">
            {spiceElements.map(spice => (
              <div 
                key={spice.id}
                className="spice-icon"
                style={{
                  left: `${spice.left}%`,
                  backgroundImage: `url(/images/${spice.type}.png)`,
                  animationDelay: `${spice.delay}s`,
                  animationDuration: `${spice.duration}s`
                }}
              />
            ))}
          </div>
        )}
        
        <div className="banner-content">
          <h1 className="animated-text">
            {heading.split(' ').map((word, i) => (
              <span 
                key={i} 
                className="word" 
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  color: special ? '#ffd700' : 'white'
                }}
              >
                {word}&nbsp;
              </span>
            ))}
          </h1>
          <p className="sub-text">{subtext}</p>
          <div className="tagline-container">
            <p className="tagline">{tagline}</p>
          </div>
        </div>
      </div>
      
      <div className="banner-nav">
        {banners.map((_, i) => (
          <div
            key={i}
            className={`banner-dot ${i === index ? 'active' : ''}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;