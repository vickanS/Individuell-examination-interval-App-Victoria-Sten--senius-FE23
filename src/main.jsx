import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { TimerProvider } from './HandleTimer/HandleTimer.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimerProvider>
    <App />
    </TimerProvider>
  </StrictMode>,
)
