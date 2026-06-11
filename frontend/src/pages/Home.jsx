import React from 'react'
import { Link } from 'react-router-dom'
import { UserIcon,StandingsIcon,FixturesIcon,LeagueIcon,MyXIIcon } from '../assets/UserLogo'
const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <Link to="/MatchPrediction">
          <div className="bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700 flex flex-col items-center text-center hover:shadow-xl hover:shadow-gray-950 transition-shadow hover:-translate-y-1">
            <StandingsIcon className="w-16 h-16 text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Match Prediction</h2>
            <p className="text-gray-400">
              Predict the tournament to compete against your friends and find out your standings.
            </p>
          </div>
        </Link>
        
        <Link to="/GuessPlayer">
          <div className="bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700 flex flex-col items-center text-center hover:shadow-xl hover:shadow-gray-950 transition-shadow hover:-translate-y-1">
            <FixturesIcon className="w-16 h-16 text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Guess The Player</h2>
            <p className="text-gray-400">
              How well do you know the stars of football's biggest stage? Guess the mystery player using World Cup facts!
            </p>
          </div>
        </Link>

        <Link to="/Standings"> 
          <div className="bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700 flex flex-col items-center text-center hover:shadow-xl hover:shadow-gray-950 transition-shadow hover:-translate-y-1">
            <LeagueIcon className="w-16 h-16 text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Standings</h2>
            <p className="text-gray-400">
              The ultimate league table. Track the points and scout your competition. See who sits at the top of the table.
            </p>
          </div>
        </Link>
        <Link to="/GuessCountry">
          <div className="bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700 flex flex-col items-center text-center hover:shadow-xl hover:shadow-gray-950 transition-shadow hover:-translate-y-1">
            <MyXIIcon className="w-16 h-16 text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Guess The Country</h2>
            <p className="text-gray-400">
              Think you're a World Cup historian? Decode the stats and trivia to name the country.
            </p>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Home
