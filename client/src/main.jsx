import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginApp } from './components/LoginApp/LoginApp.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LoginApp/> }/>
        <Route path='/BlumDBAdmin/*' element={ <App/> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
