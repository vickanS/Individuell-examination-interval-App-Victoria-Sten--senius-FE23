import React, { useEffect, useState } from 'react';
import { useTimer } from '../../HandleTimer/HandleTimer';
import '../../Styles/SetTimer.css';


const SetTimer = ({setView}) => {
    const {startTimer} = useTimer();
    const [time, setLocalTime] = useState(0);
    const [ isMenuOpen, setIsMenuOpen] = useState(false);
  
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
    }
  };

    useEffect(() => {
      setLocalTime(0);
      startTimer(0);
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
        <button onClick={handleStartTimer}>Start timer</button>
      </div>
    );
  };

export default SetTimer;