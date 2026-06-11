import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import GuessCountry from './pages/GuessCountry'
import MatchPrediction from './pages/MatchPrediction'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BestEight from './pages/BestEight'
import Round32 from './pages/Round32'
import SignIn from './pages/signIn'
import PublicRoute from './utils/PublicRoute'
import ProtectedRoute from './utils/ProtectedRoute'
import Register from './pages/Register'
import Leaderboard from './pages/Leaderboard'
import GuessPlayer from './pages/GuessPlayer'
function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
    <Navbar />
      <main className="grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<PublicRoute><SignIn /></PublicRoute>} />
          <Route path='/GuessCountry' element={<ProtectedRoute> <GuessCountry /></ProtectedRoute>} />
          <Route path='/GuessPlayer' element={<ProtectedRoute> <GuessPlayer /></ProtectedRoute>} />
          <Route path='/MatchPrediction' element={<ProtectedRoute> <MatchPrediction /></ProtectedRoute>} />
          <Route path='/MatchPrediction/BestEight' element={<ProtectedRoute> <BestEight /></ProtectedRoute>} />
          <Route path='/MatchPrediction/Round32' element={<ProtectedRoute> <Round32 /></ProtectedRoute>} />         
          <Route path='/Standings' element={<Leaderboard />} />
          <Route path='/register' element={<PublicRoute> <Register /></PublicRoute>} /> 

        </Routes>
      </main>
    <Footer />
    </div>
  )
}


export default App
