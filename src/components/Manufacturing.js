import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const useIsLargeScreen = () => {
  const [isLarge, setIsLarge] = useState(window.innerWidth > 1024);
  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth > 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isLarge;
};

const Manufacturing = () => {
  const isLarge = useIsLargeScreen();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: 'backOut',
      },
    }),
  };

  const styles = {
    section: {
      background: 'linear-gradient(to bottom, #f8fff8, #ffffff)',
      padding: isLarge ? '100px 20px' : '60px 15px',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      overflow: 'hidden',
      marginTop: '-100px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '60px',
    },
    heading: {
      fontSize: isLarge ? '2.8rem' : '2rem',
      fontWeight: 800,
      color: '#2e7d32',
      position: 'relative',
      fontFamily: "'Playfair Display', serif",
      marginBottom: '15px',
      textAlign: 'center',
    },
    headingUnderline: {
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #2e7d32, #c62828)',
      borderRadius: '2px',
    },
    quote: {
      fontSize: isLarge ? '1.1rem' : '1rem',
      fontStyle: 'italic',
      color: '#666',
      textAlign: 'center',
      marginBottom: '25px',
    },
    contentRow: {
      display: 'grid',
      gridTemplateColumns: isLarge ? '1fr 1fr' : '1fr',
      gap: '40px',
      alignItems: 'center',
    },
    textContainer: {
      padding: '30px',
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(46, 125, 50, 0.1)',
      border: '1px solid #e8f5e9',
    },
    paragraph: {
      fontSize: isLarge ? '1.15rem' : '1rem',
      lineHeight: 1.8,
      color: '#333',
      marginBottom: '30px',
    },
    processList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    processItem: {
      fontSize: isLarge ? '1.05rem' : '0.95rem',
      marginBottom: '18px',
      color: '#444',
      display: 'flex',
      alignItems: 'center',
      padding: '12px 15px',
      background: 'rgba(233, 245, 233, 0.5)',
      borderRadius: '10px',
      transition: 'all 0.3s ease',
    },
    processIcon: {
      fontSize: '1.6rem',
      marginRight: '15px',
      minWidth: '30px',
      color: '#c62828',
    },
    imagesContainer: {
      display: 'grid',
      gridTemplateColumns: isLarge ? 'repeat(2, 1fr)' : '1fr',
      gap: '20px',
    },
    image: {
      width: '100%',
      height: isLarge ? '220px' : '180px',
      objectFit: 'cover',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(46, 125, 50, 0.2)',
      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
      border: '3px solid white',
    },
    featuredImage: {
      gridColumn: isLarge ? '1 / -1' : '1',
      height: isLarge ? '250px' : '200px',
    },
    docRow: {
      display: 'flex',
      flexDirection: isLarge ? 'row' : 'column',
      gap: '20px',
      marginTop: '30px',
    },
    docImage: {
      width: isLarge ? '48%' : '100%',
      height: 'auto',
      borderRadius: '12px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
      border: '2px solid #f1f1f1',
    },
  };

  return (
    <section style={styles.section} id="manufacture">
      <motion.div
        style={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2 style={styles.heading} variants={itemVariants}>
          The Craft of Authentic Pickle Manufacturing
          <div style={styles.headingUnderline}></div>
        </motion.h2>

        <motion.p style={styles.quote} variants={itemVariants}>
          “Good food is the foundation of genuine happiness – and it all begins with how it's made.”
        </motion.p>

        {/* Text and Process */}
        <div style={styles.contentRow}>
          <motion.div style={styles.textContainer} variants={containerVariants}>
            <motion.p style={styles.paragraph} variants={itemVariants}>
              At <strong>APS Kitchen</strong>, every jar is crafted with a perfect blend of tradition and innovation.
              Our small-batch process ensures premium quality and authentic flavors in every bite.
            </motion.p>

            <motion.ul style={styles.processList} variants={containerVariants}>
              {[
                ['🌱', 'Ingredients sourced from organic farms within 100km radius'],
                ['🧴', 'Triple-washed and naturally sun-dried for purity'],
                ['👩‍🍳', 'Handcrafted in small batches by our master pickle makers'],
                ['🌞', 'Slow-cured in sunlight for 21 days to develop flavors'],
                ['🛡️', 'Packed in sterilized glass jars with FSSAI certification'],
              ].map(([icon, text], index) => (
                <motion.li
                  key={index}
                  style={styles.processItem}
                  whileHover={{ background: 'rgba(233, 245, 233, 0.8)', x: 5 }}
                  variants={itemVariants}
                >
                  <span style={styles.processIcon}>{icon}</span> {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Images */}
          <motion.div style={styles.imagesContainer}>
            {[1, 2, 3].map((i) => (
              <motion.img
                key={i}
                src={`/images/make${i}.jpeg`}
                alt={`Process step ${i}`}
                style={{
                  ...styles.image,
                  ...(i === 1 ? styles.featuredImage : {}),
                }}
                custom={i}
                variants={imageVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: i % 2 === 0 ? 2 : -2,
                  boxShadow: '0 12px 35px rgba(198, 40, 40, 0.3)',
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Certificates */}
        <div style={styles.docRow}>
          <motion.img
            src="/images/doc1.jpg"
            alt="FSSAI Certificate 1"
            style={styles.docImage}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.img
            src="/images/doc2.jpg"
            alt="FSSAI Certificate 2"
            style={styles.docImage}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Manufacturing;
