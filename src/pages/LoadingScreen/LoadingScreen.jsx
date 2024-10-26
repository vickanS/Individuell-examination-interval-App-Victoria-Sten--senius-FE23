import React from 'react';
import '../../Styles/LoadingScreen.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoadingScreen = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    setTimeout(() => {
    navigate('/set-timer')
  }, 500)
  };

    return (
      <motion.div className="loading-screen">
        <motion.h1
          onClick={handleLogoClick}
          whileTap={{scale: 1.1}}
          transition={{ duration: 0.3 }}
        >
          Interval App
        </motion.h1>
        <p>For all your timing needs</p>
      </motion.div>
    );
  }  


export default LoadingScreen;