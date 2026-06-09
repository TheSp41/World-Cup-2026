import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import scenerios from '../utils/scenerios.js'
import MatchColumn from '../components/MatchColumn.jsx'
import FinalMatch from '../components/FinalMatch.jsx'
import ConnectorColumn from '../components/ConnectorColumn.jsx'
import StraightConnector from '../components/StraightConnector.jsx'
import useLogicRoL32 from '../utils/LogicRoL32.jsx'
import useLogicRoR32 from '../utils/LogicRoR32.jsx'
import { useKnockout } from '../context/KnockoutContext.jsx'
import { usePrediction } from '../context/PredictionContext.jsx'

const Round32 = () => {
  useLogicRoL32()
  useLogicRoR32()
  const { best8,Top32,roL32Left,roR32Right,win32L,win32R,quartersL,quartersR,semisL,semisR,final,winner,third } = useKnockout();
  const {groups}=usePrediction()
  const navigate = useNavigate();
 
  useEffect(() => {
    if (!best8) {
      navigate('/MatchPrediction');
    }
  }, [best8, navigate]);
  const saver = async () => {
    const ro32 = [...roL32Left, ...roR32Right];
    const ro16 = [...win32L, ...win32R];
    const quarters = [...quartersL, ...quartersR];
    const semis = [...semisL, ...semisR];

    const toastId = toast.loading("Locking in your bracket...");

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND}/api/matchPrediction`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ group: groups,knockouts:Top32,best8, ro32, ro16, quarters, semis, final, winner, thirdFinish: third })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Failed to save predictions');
      }

      toast.update(toastId, { render: "Predictions locked successfully! 🏆", type: "success", isLoading: false, autoClose: 3000 });

    } catch (error) {
      toast.update(toastId, { render: error.message || "An error occurred while saving.", type: "error", isLoading: false, autoClose: 4000 });
    }
  }
  return (
    
    <div className="items-center container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Tournament Knockout</h1>
        <p className="text-gray-400">Round of 32 to Final</p>
      </div>
      
      <div className="w-full overflow-x-auto pb-8" >
        <div style={{zoom:"0.6"}} className="flex flex-row w-full min-w-350 h-200 lg:h-225 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-900/80 z-0"></div>
          <div className="flex flex-row w-full h-full z-10 p-6">
             <MatchColumn matches={8} side="left" round="ro32"/>
             <ConnectorColumn pairs={4} side="left" />
             <MatchColumn matches={4} side="left" round="ro16"/>
             <ConnectorColumn pairs={2} side="left" />
             <MatchColumn matches={2} side="left" round="quarters"/>
             <ConnectorColumn pairs={1} side="left" />
             <MatchColumn matches={1} side="left" round="semis"/>
             <StraightConnector />
             <FinalMatch />
             <StraightConnector />
             <MatchColumn matches={1} side="right" round="semis"/>
             <ConnectorColumn pairs={1} side="right" />
             <MatchColumn matches={2} side="right" round="quarters"/>
             <ConnectorColumn pairs={2} side="right" />
             <MatchColumn matches={4} side="right" round="ro16"/>
             <ConnectorColumn pairs={4} side="right" />
             <MatchColumn matches={8} side='right' round='ro32'/>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 mb-8">
        <button 
          onClick={saver}
          className="px-8 py-4 bg-blue-950 hover:border-white border-2 border-blue-950 text-white text-sm font-semibold rounded-xl shadow-lg w-[19%]"
        >
          Lock Your Predictions
        </button>
      </div>
    </div>
  );
};

export default Round32;
