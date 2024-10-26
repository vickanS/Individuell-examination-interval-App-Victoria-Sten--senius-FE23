import React from 'react';
import { useNavigate } from 'react-router-dom';
import { animate, motion } from 'framer-motion';
import '../../Styles/AlarmView.css';
import alarmicon from '../../assets/alarmicon.svg'; 


const AlarmView = () => {
   const navigate = useNavigate();

   const handleGoToSetTimer = () => {
    navigate('/set-timer')
   }

   const vibratingIconAnimation = {
    animate: {
        x: [0, -5, 5, -5, 0],
        transition: {
            duration: 0.2,
            repeat: Infinity,
            ease: "easeInOut",
        }
    }
   } 
 

    return (
        <div className='alarm-view'>
            <motion.img
                src={alarmicon}
                alt='Alarm icon'
                className='alarm-icon'
                {...vibratingIconAnimation}
            />
            <h2>Time is up!</h2>
            <button onClick={handleGoToSetTimer}>Set new timer!</button>
        </div>
    )
}


export default AlarmView;