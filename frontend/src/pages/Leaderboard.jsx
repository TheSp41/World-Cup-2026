import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import SavePageButton from '../components/SavePageButton' 

const Leaderboard = () => {
  const [players, setPlayers] = useState([])
  const [myStanding, setMyStanding] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const { accessToken } = useContext(AuthContext)

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const headers = {}
        if (accessToken) {
          headers['Authorization'] = `Bearer ${accessToken}`
        }

        const response = await fetch(`${import.meta.env.VITE_BACKEND}/api/leaderboard`, {
          method: 'GET',
          headers: headers
        })
        
        const result = await response.json()

        if (result.success) {
          setPlayers(result.top100)
          setMyStanding(result.myStanding)
        } else {
          setError(result.msg)
        }
      } catch (err) {
        setError("Failed to connect to the server")
      } finally {
        setLoading(false)
      }
    }

    fetchLeaderboard()
  }, [accessToken])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-gray-400 font-semibold text-lg">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="bg-red-900/30 text-red-400 px-6 py-4 rounded-xl shadow-md border border-red-800">
          <p className="font-semibold text-lg flex items-center gap-2">
            <span>⚠️</span> Error: {error}
          </p>
        </div>
      </div>
    )
  }

  let currentTableRank = 1;
  const rankedPlayers = players.map((player, index) => {
    if (index > 0 && player.score < players[index - 1].score) {
      currentTableRank = index + 1;
    }
    return { ...player, displayRank: currentTableRank };
  });

  const myTableData = rankedPlayers.find(p => myStanding && p.username === myStanding.username);

  return (
    <div className="container mx-auto px-4 py-12 font-sans max-w-4xl">
      
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-6">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
            Tournament Leaderboard
          </h1>
          <p className="text-gray-400">
            See where you stand against your friends.
          </p>
        </div>
        
        <SavePageButton targetId="leaderboard-capture-area" fileName="my-leaderboard.png" />
      </div>

      <div id="leaderboard-capture-area" className="bg-[#111827] p-2 sm:p-4 rounded-2xl sm:-mx-4">
        
        <div className="bg-gray-800 rounded-xl shadow-md border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-700 text-gray-400">
                  <th className="py-4 px-6 font-semibold text-sm uppercase tracking-wider w-24 text-center">Rank</th>
                  <th className="py-4 px-6 font-semibold text-sm uppercase tracking-wider">Player</th>
                  <th className="py-4 px-6 font-semibold text-sm uppercase tracking-wider text-right">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {rankedPlayers.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="py-12 text-center text-gray-500 italic">
                      No players found on the leaderboard yet.
                    </td>
                  </tr>
                ) : (
                  rankedPlayers.map((player) => {
                    const isTopThree = player.displayRank <= 3;
                    const isMe = myStanding && myStanding.username === player.username;
                    
                    let rowBackground = '';
                    if (isMe) rowBackground = 'bg-blue-900/20';
                    else if (player.displayRank === 1) rowBackground = 'bg-yellow-900/10';
                    else if (player.displayRank === 2) rowBackground = 'bg-gray-700/30';
                    else if (player.displayRank === 3) rowBackground = 'bg-orange-900/10';

                    return (
                      <tr key={player._id} className={`hover:bg-gray-700 transition-colors duration-150 ease-in-out ${rowBackground}`}>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <div className="flex justify-center items-center">
                            <span className={`w-8 text-center ${isTopThree || isMe ? 'font-bold text-white text-lg' : 'font-medium text-gray-500'} ${isMe ? 'text-blue-400' : ''}`}>
                              {player.displayRank}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <div className={`font-medium flex items-center gap-3 ${isTopThree || isMe ? 'text-white' : 'text-gray-300'}`}>
                            {player.username || "Unknown Player"}
                            {isMe && (
                              <span className="text-[10px] uppercase tracking-wider text-blue-400 bg-blue-900/30 px-2 py-0.5 rounded border border-blue-800/50">
                                You
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap text-right">
                          <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${isMe ? 'bg-blue-900/40 text-blue-400 border-blue-800/50' : 'bg-gray-900 text-blue-400 border-gray-700'} border`}>
                            {player.score} pts
                          </span>
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        {accessToken && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-white mb-4 pl-2">Your Standing</h2>
            <div className="bg-blue-900/10 rounded-xl shadow-md border border-blue-800/40 overflow-hidden">
              {myStanding ? (
                <table className="w-full text-left border-collapse">
                  <tbody className="divide-y divide-gray-700">
                    <tr>
                      <td className="py-4 px-6 whitespace-nowrap w-24">
                        <div className="flex justify-center items-center">
                          <span className="font-bold text-blue-400 text-lg">
                            {myTableData ? myTableData.displayRank : myStanding.rank}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <div className="font-medium text-white flex items-center gap-3">
                          {myStanding.username}
                          <span className="text-[10px] uppercase tracking-wider text-blue-400 bg-blue-900/30 px-2 py-0.5 rounded border border-blue-800/50">
                            You
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap text-right">
                        <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-bold shadow-sm bg-gray-900 text-blue-400 border border-blue-800/50">
                          {myStanding.score} pts
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <div className="py-6 text-center text-gray-400">
                  You haven't been placed on the leaderboard yet.
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Leaderboard