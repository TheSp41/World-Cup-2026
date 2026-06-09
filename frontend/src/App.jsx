import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Globalboard from './pages/Globalboard'
import Roomlogin from './pages/Roomlogin'
import Squadbuilder from './pages/Squadbuilder'
import MatchPrediction from './pages/MatchPrediction'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BestEight from './pages/BestEight'
import Round32 from './pages/Round32'
import SignIn from './pages/signIn'
import PublicRoute from './utils/PublicRoute'
import ProtectedRoute from './utils/ProtectedRoute'
import Register from './pages/Register'
function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
    <Navbar />
      <main className="grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<PublicRoute><SignIn /></PublicRoute>} />
          <Route path='/Standings' element={<ProtectedRoute> <Globalboard /></ProtectedRoute> } />
          <Route path='/Leagues' element={<ProtectedRoute> <Roomlogin /></ProtectedRoute>} />
          
          <Route path='/MyXI' element={<ProtectedRoute> <Squadbuilder /></ProtectedRoute>} />
          <Route path='/MatchPrediction' element={<ProtectedRoute> <MatchPrediction /></ProtectedRoute>} />
          <Route path='/MatchPrediction/BestEight' element={<ProtectedRoute> <BestEight /></ProtectedRoute>} />
          <Route path='/MatchPrediction/Round32' element={<ProtectedRoute> <Round32 /></ProtectedRoute>} />         
          <Route path='/register' element={<PublicRoute> <Register /></PublicRoute>} /> 

        </Routes>
      </main>
    <Footer />
    </div>
  )
}


export default App
