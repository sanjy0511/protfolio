import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import React from "react";
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
    <StrictMode>
  <ThemeContextProvider>
     <BrowserRouter>
       <App /> 
     </BrowserRouter>
  </ThemeContextProvider>
     </StrictMode>,
  
)
