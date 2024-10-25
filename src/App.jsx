import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TimerProvider } from './HandleTimer/HandleTimer'
import LoadingScreen from './pages/LoadingScreen/LoadingScreen'
import SetTimer from './pages/SetTimer/SetTimer'
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
                  <Menu />
                  <SetTimer />
                </>
              } 
            /> 
            <Route 
              path='analog-timer' 
              element={
                <>
                  <Menu />
                  <AnalogTimer />
                </>
              } 
            /> 
            <Route 
              path='digital-timer'
              element={
                <>
                  <Menu />
                  <DigitalTimer />
                </>
              } 
            /> 
            <Route 
              path='alarm-view'
              element={
                <>
                  <AlarmView />
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
