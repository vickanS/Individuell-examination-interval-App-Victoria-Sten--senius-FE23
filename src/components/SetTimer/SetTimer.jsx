import React, { useState, useEffect } from 'react';
import '../../Styles/SetTimer.css';
import Timer from 'easytimer.js';

const SetTimer = () => {
    const [time, setTime] = useState('00:00:00');
  
    useEffect(() => {
      const timer = new Timer();
      
      // Starta en timer som räknar upp
      timer.start();
  
      // Uppdatera tiden vid varje tick
      timer.addEventListener('secondsUpdated', () => {
        setTime(timer.getTimeValues().toString());
      });
  
      // Rensa upp efter komponenten när den unmountas
      return () => {
        timer.stop();
      };
    }, []);
  
    return (
      <div className="set-timer">
        <h2>Set Timer</h2>
        <p>{time}</p>
      </div>
    );
  };







export default SetTimer;