import { React, useState } from 'react'
import { usePrediction } from '../context/PredictionContext'
import { useKnockout } from '../context/KnockoutContext'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import SavePageButton from '../components/SavePageButton' 

const BestEight = () => {
  const { groups } = usePrediction();
  const [selectedTeams, setSelectedTeams] = useState([])
  const { Top32, setTop32, best8, setBest8 } = useKnockout()
  const navigate = useNavigate();

  const final32 = () => {
    if (selectedTeams.length < 8) {
      toast.error("Please select exactly 8 teams before submitting.", { autoClose: 2000 });
    } else {
      const newTop32 = {}
      Object.entries(groups).forEach(([group, teams]) => {
        newTop32[`1${group}`] = teams[0];
        newTop32[`2${group}`] = teams[1];
      })
      let currentBest8 = "";
      selectedTeams.forEach((t) => {
        newTop32[`3${t.group}`] = t.team;
        currentBest8 += t.group;
      });
      const temp = [...currentBest8].sort().join("")
      setBest8(temp)
      setTop32(newTop32)
      navigate('/MatchPrediction/Round32')
    }
  }

  const thirdPlaceTeams = Object.entries(groups).map(([group, teams]) => ({
    group,
    team: teams[2],
    allTeams: teams
  }));
    
  const toggleTeam = (teamObj) => {
    if (selectedTeams.some(t => t.team === teamObj.team)) {
      setSelectedTeams(selectedTeams.filter(t => t.team !== teamObj.team))
    } else {
      if (selectedTeams.length === 8) {
        toast.warn("Maximum 8 teams can be selected", { autoClose: 2000 });
      } else {
        setSelectedTeams([...selectedTeams, teamObj])
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer theme="dark" position='top-right'/>

      <div className="flex justify-end mb-6 max-w-6xl mx-auto">
        <SavePageButton targetId="best-eight-capture-area" fileName="my-best-eight-picks.png" />
      </div>

      <div id="best-eight-capture-area" className="bg-[#111827] p-6 rounded-2xl">
        
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Best Eight Selection</h1>
          <div className="inline-flex items-center gap-3 bg-gray-800 border border-gray-700 rounded-full px-5 py-2 shadow-sm">
            <span className="text-gray-300 text-sm">Select up to 8 third-place teams to advance</span>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
            <span className={`text-sm font-bold tracking-wide ${selectedTeams.length === 8 ? 'text-green-400' : 'text-blue-400'}`}>
              {selectedTeams.length} / 8 Selected
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
          {thirdPlaceTeams.map(({ group, team, allTeams }) => {
            const isSelected = selectedTeams.some(t => t.team === team);
            
            return (
              <div key={team} className="relative group cursor-pointer flex flex-col">
                <div 
                  onClick={() => toggleTeam({ team, group })}
                  className={`p-5 rounded-xl border transition-all duration-300 shadow-md text-center h-full flex flex-col justify-center items-center ${
                    isSelected 
                      ? 'bg-green-900 border-green-700 text-white scale-105' 
                      : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:scale-105'
                  }`}
                >
                  <span className="text-sm font-semibold text-gray-400 mb-1">Group {group}</span>
                  <span className="text-xl font-bold">{team}</span>
                </div>

               
                <div className="absolute hidden group-hover:block z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-56 bg-gray-900 text-white text-sm rounded-lg py-3 px-4 shadow-2xl border border-gray-600 pointer-events-none">
                  <div className="font-bold border-b border-gray-700 pb-2 mb-2 text-center">Group {group} Standings</div>
                  <ol className="list-decimal list-inside space-y-1">
                    {allTeams.map((t, i) => (
                      <li key={t}>
                        <span className={`${i < 2 ? 'font-bold text-green-600' : selectedTeams.some(selected => selected.team === t) ? 'font-bold text-green-600' : ''}`}>{t}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-gray-600 border-r-8 border-r-transparent"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    
      <div className="flex justify-end mt-12 pr-[5%] mb-[3%] max-w-6xl mx-auto">
        <button
          onClick={() => final32()}
          className="bg-blue-900 border border-transparent hover:border-amber-50 text-white text-lg font-bold py-3 px-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Continue
        </button>
      </div>
      
    </div>
  )
}

export default BestEight