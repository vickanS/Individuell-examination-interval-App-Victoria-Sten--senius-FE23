import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TimerProvider, useTimer } from './HandleTimer/HandleTimer'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import SetTimer from './components/SetTimer/SetTimer'
import AnalogTimer from './components/AnalogTimer/AnalogTimer'
import DigitalTimer from './components/DigitalTimer/DigitalTimer'
import AlarmView from './components/AlarmView/AlarmView'
import Menu from './components/Menu/Menu'
import './index.css'

function App() {

  return (
    <TimerProvider>
      <Router>
        <div >
          <Routes>
            <Route path='/' element={<LoadingScreen />} />
            <Route 
              path='set-timer' 
              element={
                <>
                  <SetTimer />
                  <Menu />
                </>
              } 
            /> 
            <Route 
              path='analog-timer' 
              element={
                <>
                  <AnalogTimer />
                  <Menu />
                </>
              } 
            /> 
            <Route 
              path='digital-timer'
              element={
                <>
                  <DigitalTimer />
                  <Menu />
                </>
              } 
            /> 
            <Route 
              path='Alarm-view'
              element={
                <>
                  <AlarmView />
                  <Menu />
                </>
              } 
            /> 
          </Routes>
        </div>
      </Router>
    </TimerProvider>
  )
}

export default App
