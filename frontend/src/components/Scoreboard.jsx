import React, { useState, useEffect } from 'react';

const MatchScorecard = ({ match }) => {
  const { team1, team2, status, time, stage, score , startTime} = match;
  const [localMinute, setLocalMinute] = useState(time ? parseInt(time, 10) : 0);

  useEffect(() => {
    if (status !== 'LIVE') return;
    const minuteInterval = setInterval(() => {
      setLocalMinute((prevMinute) => {
        if (prevMinute >= 120) return prevMinute; 
        return prevMinute + 1;
      });
    }, 60000); 
    return () => clearInterval(minuteInterval);
  }, [status]); 

  const isWinner = (teamScore, opponentScore) => {
    return status === 'FINISHED' && teamScore > opponentScore ? 'font-bold text-white' : 'text-gray-400';
  };

  return (
    <div className={`p-5 rounded-xl border transition-all duration-300 mx-[4%] my-[2%] bg-gray-800 flex flex-col gap-4 ${
      status === 'LIVE' ? 'border-red-500/50 shadow-lg shadow-red-900/20 ring-1 ring-red-500/30' : 'border-gray-700 hover:border-gray-600 hover:shadow-xl hover:shadow-gray-900'
    }`}>
      <div className="flex items-center justify-between text-xs font-semibold tracking-wide uppercase border-b border-gray-700 pb-3">
        <span className="text-gray-400">{stage}</span>
        <div>
          {status === 'LIVE' && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-red-400 bg-red-500/10 border border-red-500/20 animate-pulse">
              <span className="w-1.5 h-1.5 mr-1.5 bg-red-500 rounded-full shadow-[0_0_5px_rgba(239,68,68,0.8)]"></span>
              LIVE {localMinute}'
            </span>
          )}
          {status === 'FINISHED' && (
            <span className="px-2.5 py-1 rounded-md text-gray-300 bg-gray-700/50 border border-gray-600">
              FT
            </span>
          )}
          {status === 'SCHEDULED' && (
            <span className="px-2.5 py-1 rounded-md text-blue-400 bg-blue-500/10 border border-blue-500/20">
        
              {time}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <div className={`flex items-center justify-between text-base ${isWinner(score?.team1, score?.team2)}`}>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-6 bg-gray-900 border border-gray-700 text-[10px] font-bold text-gray-400 rounded uppercase tracking-wider shadow-inner">
              {team1.substring(0, 3)}
            </div>
            <span className="font-medium tracking-tight">{team1}</span>
          </div>
          {status !== 'SCHEDULED' && (
            <span className="text-lg font-bold font-mono tabular-nums bg-gray-900/50 px-2 py-0.5 rounded text-gray-100">{score?.team1 ?? 0}</span>
          )}
        </div>

        <div className={`flex items-center justify-between text-base ${isWinner(score?.team2, score?.team1)}`}>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-6 bg-gray-900 border border-gray-700 text-[10px] font-bold text-gray-400 rounded uppercase tracking-wider shadow-inner">
              {team2.substring(0, 3)}
            </div>
            <span className="font-medium tracking-tight">{team2}</span>
          </div>
          {status !== 'SCHEDULED' && (
            <span className="text-lg font-bold font-mono tabular-nums bg-gray-900/50 px-2 py-0.5 rounded text-gray-100">{score?.team2 ?? 0}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchScorecard;