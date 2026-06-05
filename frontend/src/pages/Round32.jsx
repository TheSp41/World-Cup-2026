import React from 'react'
import scenerios from '../utils/scenerios.js'
import MatchColumn from '../components/MatchColumn.jsx'
import FinalMatch from '../components/FinalMatch.jsx'
import ConnectorColumn from '../components/ConnectorColumn.jsx'
import StraightConnector from '../components/StraightConnector.jsx'
import { useKnockout } from '../context/KnockoutContext.jsx'
const Round32 = () => {
   const {Top32,setTop32,best8,setBest8}=useKnockout()
   console.log(best8)
   console.log(scenerios[best8])
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Tournament Knockout</h1>
        <p className="text-gray-400">Round of 32 to Final</p>
      </div>
      
      <div className="w-full overflow-x-auto pb-8">
        <div className="flex flex-row w-full min-w-350 h-200 lg:h-225 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-900/80 z-0"></div>
          <div className="flex flex-row w-full h-full z-10 p-6">
             <MatchColumn matches={8} />
             <ConnectorColumn pairs={4} side="left" />
             <MatchColumn matches={4} />
             <ConnectorColumn pairs={2} side="left" />
             <MatchColumn matches={2} />
             <ConnectorColumn pairs={1} side="left" />
             <MatchColumn matches={1} />
             <StraightConnector />
             <FinalMatch />
             <StraightConnector />
             <MatchColumn matches={1} />
             <ConnectorColumn pairs={1} side="right" />
             <MatchColumn matches={2} />
             <ConnectorColumn pairs={2} side="right" />
             <MatchColumn matches={4} />
             <ConnectorColumn pairs={4} side="right" />
             <MatchColumn matches={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round32;
