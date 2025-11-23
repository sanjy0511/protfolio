import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import React from "react";


createRoot(document.getElementById('root')).render(
    <StrictMode>
  <ThemeContextProvider>
       <App /> 
  </ThemeContextProvider>
     </StrictMode>,
  
)
