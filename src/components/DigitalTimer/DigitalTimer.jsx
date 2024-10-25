import React from 'react';
import { useTimer } from '../../HandleTimer/HandleTimer';
import '../../Styles/DigitalTimer.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const DigitalTimer = () => {
    const { time, handleAbort } = useTimer();
    const navigate = useNavigate();

    const minutes = Math.floor(time / 60); 
    const seconds = time % 60; 

    const formattedMinutes = ('0' + minutes).slice(-2); 
    const formattedSeconds = ('0' + seconds).slice(-2);

    const abortTimer = () => {
        handleAbort();
        navigate('/set-timer'); 
    };

    return (
        <div className="digital-timer">
            <h2>Digital Timer</h2>
            <div className="timer-display">
                <h1>{formattedMinutes}:{formattedSeconds}</h1> 
            </div>
            <motion.button onClick={abortTimer}>Abort Timer</motion.button>
        </div>
    );
};

export default DigitalTimer;