import React, { useEffect } from 'react';
import { useTimer } from '../../HandleTimer/HandleTimer';
import '../../Styles/DigitalTimer.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const DigitalTimer = () => {
    const { time, setTime } = useTimer();
    const navigate = useNavigate();

    useEffect(() => {
        if (time <= 0) {
            return;
        }

        const intervalId = setInterval(() => {
            setTime(prevTime => {
                if (prevTime > 0) {
                    return prevTime - 1; 
                } else {
                    clearInterval(intervalId); 
                    return 0; 
                }
            });
        }, 1000);

        return () => clearInterval(intervalId); 
    }, [time, setTime]);

    const handleAbort = () => {
        setTime(0); 
        navigate('/set-timer'); 
    };

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div className="digital-timer">
            <h2>Digital Timer</h2>
            <div className="timer-display">
                <h1>{minutes}:{('0' + seconds).slice(-2)}</h1>
            </div>
            <motion.button onClick={handleAbort}>Abort Timer</motion.button>
        </div>
    );
};

export default DigitalTimer;