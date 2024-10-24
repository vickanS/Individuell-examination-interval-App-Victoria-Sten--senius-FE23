import React, { useEffect, useRef, useState } from 'react';
import { useTimer } from '../../HandleTimer/HandleTimer';
import { motion } from 'framer-motion'; 
import EasyTimer from 'easytimer.js';
import { useNavigate } from 'react-router-dom';
import '../../Styles/AnalogTimer.css';

const AnalogTimer = ({ setView }) => {
    const { time } = useTimer(); 
    const timerRef = useRef(null);
    const secondsRef = useRef(null);
    const minutesRef = useRef(null);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!timerRef.current) {
            timerRef.current = new EasyTimer();
        }

        const startTimer = () => {
            if (time > 0 && !isTimerRunning) {
                timerRef.current.start({ countdown: true, startValues: { seconds: time * 60 } });
                setIsTimerRunning(true);
            }
        };

        startTimer(); 

        return () => {
            if (timerRef.current) {
                timerRef.current.stop();
                timerRef.current.reset();
            }
        };
    }, [time]); 

    useEffect(() => {
        if (!isTimerRunning) return; 

        const interval = setInterval(() => {
            if (timerRef.current) {
                const totalSeconds = timerRef.current.getTimeValues().seconds + 
                                    (timerRef.current.getTimeValues().minutes * 60);
                const seconds = totalSeconds % 60;
                const minutes = Math.floor(totalSeconds / 60);

                if (secondsRef.current && minutesRef.current) {
                    secondsRef.current.style.transform = `rotate(${(seconds / 60) * 360}deg)`;
                    minutesRef.current.style.transform = `rotate(${(minutes / 60) * 360}deg)`;
                }

                if (totalSeconds <= 0) {
                    clearInterval(interval);
                    setIsTimerRunning(false); 
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [isTimerRunning]); 

    const handleAbort = () => {
        if (timerRef.current) {
            timerRef.current.stop(); 
            timerRef.current.reset(); 
            setIsTimerRunning(false);
        }

        if (secondsRef.current && minutesRef.current) {
            secondsRef.current.style.transform = `rotate(0deg)`;
            minutesRef.current.style.transform = `rotate(0deg)`;
        }

        navigate('/set-timer')
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
            <motion.button 
                onClick={handleAbort}>Abort Timer</motion.button>
        </div>
    );
};

export default AnalogTimer;