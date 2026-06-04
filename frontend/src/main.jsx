import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { PredictionProvider } from './context/PredictionContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

<StrictMode>
  <BrowserRouter>
    <PredictionProvider>
    <App />
    </PredictionProvider>
  </BrowserRouter>
</StrictMode>
)

