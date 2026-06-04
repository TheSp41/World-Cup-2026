import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Globalboard from './pages/Globalboard'
import Roomlogin from './pages/Roomlogin'
import UpcomingMatches from './pages/UpcomingMatches'
import Squadbuilder from './pages/Squadbuilder'
import MatchPrediction from './pages/MatchPrediction'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BestEight from './pages/BestEight'
import Round32 from './pages/Round32'
function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
    <Navbar />
      <main className="grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Standings' element={<Globalboard />} />
          <Route path='/Leagues' element={<Roomlogin />} />
          <Route path='/Fixtures' element={<UpcomingMatches />} />
          <Route path='/MyXI' element={<Squadbuilder />} />
          <Route path='/MatchPrediction' element={<MatchPrediction />} />
          <Route path='/MatchPrediction/BestEight' element={<BestEight />} />
          <Route path='/MatchPrediction/Round32' element={<Round32 />} />          
        </Routes>
      </main>
    <Footer />
    </div>
  )
}


export default App
