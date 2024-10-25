import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/AlarmView.css';
import alarmicon from '../../assets/alarmicon.svg'; 


const AlarmView = () => {
   const navigate = useNavigate();

   const handleGoToSetTimer = () => {
    navigate('/set-timer')
   }
 

    return (
        <div className='alarm-view'>
            <img src={alarmicon} alt='Alarm icon' className='alarm-icon' />
            <h2>Time is up!</h2>
            <button onClick={handleGoToSetTimer}>Set new timer!</button>
        </div>
    )
}


export default AlarmView;