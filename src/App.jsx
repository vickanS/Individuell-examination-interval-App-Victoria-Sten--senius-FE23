import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import SetTimer from './components/SetTimer/SetTimer'
import AnalogTimer from './components/AnalogTimer/AnalogTimer'
import DigitalTimer from './components/DigitalTimer/DigitalTimer'
import AlarmView from './components/AlarmView/AlarmView'
import Menu from './components/Menu/Menu'
import './index.css'

function App() {

  return (
    <Router>
      <div >
        <Routes>
          < Route path='/' element={<LoadingScreen />} />
          < Route path='set-timer' element={<SetTimer />} /> 
          < Route path='analog-timer' element={<AnalogTimer />} /> 
          < Route path='digital-timer' element={<DigitalTimer />} /> 
          < Route path='Alarm-view' element={<AlarmView />} /> 
        </Routes> 
          <Menu />
      </div>
    </Router>
  )
}

export default App
