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
        
        <Link to="/Fixtures">
          <div className="bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700 flex flex-col items-center text-center hover:shadow-xl hover:shadow-gray-950 transition-shadow hover:-translate-y-1">
            <FixturesIcon className="w-16 h-16 text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Fixtures</h2>
            <p className="text-gray-400">
              Never miss a match. View upcoming fixtures, schedules, and past match results.
            </p>
          </div>
        </Link>

        <Link to="/Leagues"> 
          <div className="bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700 flex flex-col items-center text-center hover:shadow-xl hover:shadow-gray-950 transition-shadow hover:-translate-y-1">
            <LeagueIcon className="w-16 h-16 text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Leagues</h2>
            <p className="text-gray-400">
              Explore detailed information, stats, and updates from your favorite football leagues.
            </p>
          </div>
        </Link>
        <Link to="/MyXI">
          <div className="bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700 flex flex-col items-center text-center hover:shadow-xl hover:shadow-gray-950 transition-shadow hover:-translate-y-1">
            <MyXIIcon className="w-16 h-16 text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">My XI</h2>
            <p className="text-gray-400">
              Create, manage, and share your ultimate dream team with our custom squad builder.
            </p>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Home
