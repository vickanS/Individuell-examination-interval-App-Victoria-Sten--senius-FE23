import React, { useEffect, useRef } from 'react';
import { useTimer } from '../../HandleTimer/HandleTimer';
import '../../Styles/AnalogTimer.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AnalogTimer = () => {
    const { time, handleAbort } = useTimer();
    const minutesRef = useRef(null);
    const secondsRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const totalSeconds = time;
        const seconds = totalSeconds % 60; 
        const minutes = Math.floor(totalSeconds / 60); 

        const secondsAngle = (seconds / 60) * 360; 
        const minutesAngle = (minutes / 60) * 360; 

        if (secondsRef.current) {
            secondsRef.current.style.transform = `rotate(${secondsAngle}deg)`;
        }
        if (minutesRef.current) {
            minutesRef.current.style.transform = `rotate(${minutesAngle}deg)`;
        }
    }, [time]);

    const abortTimer = () => {
        handleAbort();
        navigate('/set-timer'); 
    };

    return (
        <div className="analog-timer">
            <h2>Analog Timer</h2>
            <div className='analogtimer'>
                <div className='clock'>
                    <div className='hand minute-hand' ref={minutesRef}></div>
                    <div className='hand second-hand' ref={secondsRef}></div>
                </div>
            </div>
            <motion.button onClick={abortTimer}>Abort Timer</motion.button>
        </div>
    );
};

export default AnalogTimer;