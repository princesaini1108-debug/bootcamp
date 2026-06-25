import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { theme } from './context/theme.jsx'

createRoot(document.getElementById('root')).render(

  // 2. provider components /global box
  <theme.Provider value={{clr:"red"}}>
    <App />
  </theme.Provider>,
)
