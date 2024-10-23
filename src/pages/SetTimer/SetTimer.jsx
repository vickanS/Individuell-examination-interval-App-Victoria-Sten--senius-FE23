import React, { useState  } from 'react';
import { motion } from 'framer-motion';
import { useTimer } from '../../HandleTimer/HandleTimer';
import { useNavigate } from 'react-router-dom';
import menuicon from '../../assets/menuicon.svg'
import '../../Styles/SetTimer.css';


const SetTimer = () => {
    const {time, setTime} = useTimer();
    const navigate = useNavigate();
  
    const increaseTime = () => {
      if (time < 60) {
        setTime(prevTime => prevTime + 1)
      }
    };
      
    const decreaseTime = () => {
      if (time > 1) {
        setTime(prevTime => prevTime - 1)
      }
    }
  
    const handleStartTimer = () => {
      navigate(`/analog-timer?time=${time}`)
    }
  
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