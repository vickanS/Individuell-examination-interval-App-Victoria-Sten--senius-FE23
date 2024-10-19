import React from 'react'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import SetTimer from './components/SetTimer/SetTimer'
import AnalogTimer from './components/AnalogTimer/AnalogTimer'
import DigitalTimer from './components/DigitalTimer/DigitalTimer'
import AlarmView from './components/AlarmView/AlarmView'
import Menu from './components/Menu/Menu'
import './index.css'

function App() {

  return (
    <div>
      <LoadingScreen />
      <SetTimer />
      <AnalogTimer />
      <DigitalTimer />
      <AlarmView />
      <Menu />
    </div>
  )
}

export default App
