import React, {useEffect, useRef} from 'react';
import { useTimer } from '../../HandleTimer/HandleTimer'; 
import EasyTimer from 'easytimer.js';
import '../../Styles/AnalogTimer.css';


const AnalogTimer = () => {
    const { time } = useTimer();
    const timerRef = useRef(null);
    const secondsRef = useRef(null);
    const minutesRef = useRef(null);


    useEffect(() => {
        if (!timerRef.current) {
            timerRef.current = new EasyTimer();
        }

        if (time) {
            timerRef.current.start({ countdown: true, startValues: { seconds: time * 60 } });
        }

        const interval = setInterval(() => {
            const totalSeconds = timerRef.current.getTimeValues().seconds + 
                                (timerRef.current.getTimeValues().minutes * 60);
            const seconds = totalSeconds % 60;
            const minutes = Math.floor(totalSeconds / 60);

            if (secondsRef.current && minutesRef.current) {
                secondsRef.current.style.transform = `rotate(${(seconds / 60) * 360}deg)`;
                minutesRef.current.style.transform = `rotate(${(minutes / 60) * 360}deg)`;
            }
        }, 1000);

        return () => {
            clearInterval(interval);
            timerRef.current.stop();
        };
    }, [time]);

    return (
        <div className="analog-timer">
            <h2>Analog Timer</h2>
            <div className='analogtimer'>
                <div className='clock'>
                    <div className='hand minute-hand' ref={minutesRef}></div>
                    <div className='hand second-hand' ref={secondsRef}></div>
                </div>
            </div>
        </div>
    );
};


export default AnalogTimer;
