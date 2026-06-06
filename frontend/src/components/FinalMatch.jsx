import React from 'react'
import { useKnockout } from '../context/KnockoutContext'

const FinalMatch = () => {
  const { final, winner, setWinner, semisL, semisR, third, setThird } = useKnockout()

  const team1 = final[0] || null
  const team2 = final[1] || null

  const third1 = final[0] ? semisL.find(t => t && t !== final[0]) || null : null;
  const third2 = final[1] ? semisR.find(t => t && t !== final[1]) || null : null;

  const handleWinner = (team) => {
    if (!team) return;
    setWinner(prev => prev[0] === team ? [] : [team]);
  }

  const handleThird = (team) => {
    if (!team) return;
    setThird(prev => prev[0] === team ? [] : [team]);
  }

  return (
    <div className="flex flex-col justify-center items-center h-full z-10 w-36 sm:w-48 shrink-0 relative">
      <div className="flex flex-col items-center w-full relative">
        <span className="absolute bottom-full mb-2 text-yellow-500 font-bold">Final</span>
        <div className="flex flex-col justify-between gap-1 h-14 sm:h-16 w-full opacity-100">
           <button onClick={() => handleWinner(team1)} className={`flex-1 bg-gray-800 border-2 border-yellow-500 hover:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(250,204,21,0.4)] transition-colors cursor-pointer ${winner[0] === team1 && team1 ? 'bg-green-700 text-white' : ''}`}>{team1 || '\u00A0'}</button>
           <button onClick={() => handleWinner(team2)} className={`flex-1 bg-gray-800 border-2 border-yellow-500 hover:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(250,204,21,0.4)] transition-colors cursor-pointer ${winner[0] === team2 && team2 ? 'bg-green-700 text-white' : ''}`}>{team2 || '\u00A0'}</button>
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="flex flex-col items-center w-full relative">
          <span className="absolute bottom-full mb-2 text-orange-400 font-bold">3rd Place</span>
          <div className="flex flex-col justify-between gap-1 h-14 sm:h-16 w-full opacity-100">
             <button onClick={() => handleThird(third1)} className={`flex-1 bg-gray-800 border-2 border-orange-400 hover:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(251,146,60,0.4)] transition-colors cursor-pointer ${third[0] === third1 && third1 ? 'bg-green-700 text-white' : ''}`}>{third1 || '\u00A0'}</button>
             <button onClick={() => handleThird(third2)} className={`flex-1 bg-gray-800 border-2 border-orange-400 hover:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(251,146,60,0.4)] transition-colors cursor-pointer ${third[0] === third2 && third2 ? 'bg-green-700 text-white' : ''}`}>{third2 || '\u00A0'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinalMatch
