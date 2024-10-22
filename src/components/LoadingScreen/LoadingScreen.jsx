import React from 'react';
import '../../Styles/LoadingScreen.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoadingScreen = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/set-timer')
  };

    return (
      <motion.div 
        className="loading-screen"
        style={{ backgroundColor: 'black', minHeight: '100vh'}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
      >

        <motion.h1
          onClick={handleLogoClick}
          initial={{scale: 1}}
          whileTap={{scale: 1.1}}
        >
          Interval App
        </motion.h1>
        <p>For all your timing needs</p>
      </motion.div>
    );
  }  


export default LoadingScreen;