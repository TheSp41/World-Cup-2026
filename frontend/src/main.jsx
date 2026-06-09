import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { PredictionProvider } from './context/PredictionContext.jsx'
import { KnockoutProvider } from './context/KnockoutContext.jsx'
import {AuthProvider} from './context/AuthContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

<StrictMode>
  <BrowserRouter>

    <AuthProvider>
      <KnockoutProvider>
        <PredictionProvider>
        <App />
        </PredictionProvider>
      </KnockoutProvider>
    </AuthProvider>
  </BrowserRouter>
</StrictMode>
)

