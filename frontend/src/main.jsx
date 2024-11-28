import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";



createRoot(document.getElementById('root')).render(
 
    <StrictMode>
      <App />
    </StrictMode>,
   

)
