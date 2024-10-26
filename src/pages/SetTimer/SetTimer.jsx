import React, { useEffect, useState } from 'react';
import { useTimer } from '../../HandleTimer/HandleTimer';
import { motion } from 'framer-motion';
import '../../Styles/SetTimer.css';


const SetTimer = ({setView}) => {
    const {startTimer} = useTimer();
    const [time, setLocalTime] = useState(0);
    const [ isMenuOpen, setIsMenuOpen] = useState(false);
    const [buttonText, setButtonText] = useState('Start Timer')
  
    const increaseTime = () => {
      if (time < 60) {
        setLocalTime(prevTime => prevTime + 1)
      }
    };
      
    const decreaseTime = () => {
      if (time > 1) {
        setLocalTime(prevTime => prevTime - 1)
      }
    }
  
    const handleStartTimer = () => {
      if (time > 0) {
      startTimer(time);
      setIsMenuOpen(true)
      setButtonText('Timer Started')
    }
  };

    useEffect(() => {
      setLocalTime(0);
      startTimer(0);
      setButtonText('Start Timer')
  }, [setView]);
    
    return (
      <div className="set-timer">
        <h2>Set Your Timer</h2>
        <div className='timer'>
          <button className='inc-dec' onClick={decreaseTime}>-</button>
          <h1>{time}</h1>
          <button className='inc-dec' onClick={increaseTime}>+</button>
        </div>
        <p>Minutes</p>
        <motion.button
                onClick={handleStartTimer}
                initial={{ opacity: 1 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ duration: 0.5 }} 
            >
                {buttonText} 
            </motion.button>
      </div>
    );
  };

export default SetTimer;