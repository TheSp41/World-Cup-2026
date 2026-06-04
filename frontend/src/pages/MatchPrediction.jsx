import React from 'react'
import { Link } from 'react-router-dom'
import { usePrediction } from '../context/PredictionContext'

const MatchPrediction = () => {
  const { groups, setGroups } = usePrediction();

  const moveUp = (groupKey, index) => {
    if (index === 0) return;
    setGroups((prevGroups) => {
      const newGroup = [...prevGroups[groupKey]];
      [newGroup[index - 1], newGroup[index]] = [newGroup[index], newGroup[index - 1]];
      return { ...prevGroups, [groupKey]: newGroup };
    });
  };

  const moveDown = (groupKey, index) => {
    setGroups((prevGroups) => {
      const newGroup = [...prevGroups[groupKey]];
      if (index === newGroup.length - 1) return prevGroups;
      [newGroup[index + 1], newGroup[index]] = [newGroup[index], newGroup[index + 1]];
      return { ...prevGroups, [groupKey]: newGroup };
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-10 shadow-lg max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          How to Play
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
          <li>Rank the teams in each group by using the <strong>Up</strong> and <strong>Down</strong> arrows.</li>
          <li>The top 2 teams in each group (<span className="text-green-400 font-semibold">green bar</span>) will advance to the knockout stage.</li>
          <li>The bottom team (<span className="text-red-400 font-semibold">red bar</span>) will be eliminated.</li>
          <li>The top 8 third place teams will reach Round of 32</li>
          <li>Once you are satisfied with your group standings, click <strong>Continue</strong> at the bottom to pick top 8 third place teams.</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {Object.entries(groups).map(([group, teams]) => (
        <div key={group} className="mb-12">
          <div className='flex flex-col items-center mb-5'>
            <h1 className="text-3xl font-bold text-center mb-2">Group {group}</h1>
            <hr className='w-[25%] h-0.5 bg-gray-700 border-none transition-opacity' />
          </div>
          <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
            {teams.map((team, index) => (
              <div key={team} className={`bg-gray-800 text-gray-200 font-semibold py-3 px-6 rounded-xl border border-gray-700 shadow-md flex items-center justify-between transition-all `}>
                <div className={`${index===0 || index===1?'bg-green-600 h-full w-[1%]':''} ${index===3?'bg-red-500 h-full w-[1%]':''}`}></div>
                <span>{index + 1}. {team}</span>
                <div className="flex flex-col">
                  <button 
                    onClick={() => moveUp(group, index)} 
                    disabled={index === 0}
                    className={`p-1 rounded transition-colors ${index === 0 ? 'invisible' : 'hover:bg-gray-600 text-gray-400 hover:text-white'}`}
                    aria-label="Move Up"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                  </button>
                  <button 
                    onClick={() => moveDown(group, index)} 
                    disabled={index === teams.length - 1}
                    className={`p-1 rounded transition-colors ${index === teams.length - 1 ? 'invisible' : 'hover:bg-gray-600 text-gray-400 hover:text-white'}`}
                    aria-label="Move Down"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
      <div className="flex justify-center mt-8 mb-4">
        <Link to='/MatchPrediction/BestEight'>
          <button
            className="bg-blue-900 hover:border-2 hover:border-amber-50 text-white text-lg font-bold py-3 px-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MatchPrediction
