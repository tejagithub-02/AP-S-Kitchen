import React, { useState } from 'react';
import './AboutUs.css';
import { FaHeart, FaLeaf, FaHandsHelping, FaSeedling } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const storyCards = [
    {
      title: "Our Roots",
      content: "AP's KITCHEN began as a family passion project, blending generations of culinary wisdom with modern techniques to create authentic flavors.",
      highlight: "Family recipes passed down through generations"
    },
    {
      title: "Our Inspiration",
      content: "The love for homemade food and desire to share it with our community inspired us to create a kitchen that feels like home.",
      highlight: "Bringing people together through food"
    }
  ];

  const missionCards = [
    {
      title: "Nourishment",
      content: "To craft meals that feed both body and soul, using recipes designed for both flavor and wellness.",
      highlight: "Nutritionist-approved balanced menus"
    },
    {
      title: "Sustainability",
      content: "To operate with minimal environmental impact while delivering maximum flavor in every bite.",
      highlight: "Eco-friendly from farm to table"
    }
  ];

  const valueCards = [
    {
      icon: <FaHeart />,
      title: "Quality",
      description: "We are committed to using the freshest and highest quality ingredients in all our dishes.",
      hiddenText: "Each ingredient is hand-selected from trusted local suppliers, with rigorous quality checks."
    },
    {
      icon: <FaHandsHelping />,
      title: "Integrity",
      description: "We take pride in our work and ensure that every meal is prepared with honesty and transparency.",
      hiddenText: "Our kitchen is open for virtual tours, and we share full ingredient lists for every dish."
    },
    {
      icon: <FaLeaf />,
      title: "Care",
      description: "We understand the importance of food in bringing people together.",
      hiddenText: "Every recipe is crafted with love, considering nutritional balance and sensory delight."
    },
    {
      icon: <FaSeedling />,
      title: "Sustainability",
      description: "We are dedicated to reducing our environmental footprint.",
      hiddenText: "We use 100% compostable packaging and source 80% of ingredients within 100 miles."
    }
  ];

  return (
    <section id="about-us" className="about-us">
      <motion.img 
        src="/images/make1.jpeg" 
        className="decorative-spice spice-1" 
        alt="Traditional spices"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.img 
        src="/images/make2.jpeg" 
        className="decorative-spice spice-2" 
        alt="Fresh ingredients"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
      
      <div className="about-container">
        <motion.div 
          className="hero-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="section-heading center-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About AP's KITCHEN
          </motion.h2>
          <motion.p 
            className="section-content center-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where <span className="highlight">tradition meets innovation</span> in every bite. We bring generations of family cooking wisdom to your modern table.
          </motion.p>
        </motion.div>

        <div className="section-wrapper">
          <motion.h2 
            className="section-heading center-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our Story
          </motion.h2>
          <div className="card-grid story-grid">
            {storyCards.map((card, index) => (
              <motion.div
                key={`story-${index}`}
                className="story-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <h3>{card.title}</h3>
                <p>{card.content}</p>
                <div className="card-highlight">{card.highlight}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="section-wrapper">
          <motion.h2 
            className="section-heading center-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our Mission
          </motion.h2>
          <div className="card-grid mission-grid">
            {missionCards.map((card, index) => (
              <motion.div
                key={`mission-${index}`}
                className="mission-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <h3>{card.title}</h3>
                <p>{card.content}</p>
                <div className="card-highlight">{card.highlight}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="section-wrapper">
          <motion.h2 
            className="section-heading center-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Our Values
          </motion.h2>
          <div className="values-list">
            {valueCards.map((card, index) => (
              <motion.div
                key={`value-${index}`}
                className={`value-card ${hoveredCard === index ? 'expanded' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div 
                  className="value-icon"
                  animate={{ 
                    rotate: hoveredCard === index ? [0, 10, -10, 0] : 0,
                    scale: hoveredCard === index ? 1.2 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {card.icon}
                </motion.div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <motion.div
                  className="hidden-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: hoveredCard === index ? 'auto' : 0,
                    opacity: hoveredCard === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{card.hiddenText}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
