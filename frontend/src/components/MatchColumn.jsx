import { React,useEffect,useState } from 'react'
import { useKnockout } from '../context/KnockoutContext'
const MatchColumn = ({matches,side,round}) => {
  const {Top32,roL32Left,win32L,setWin32L,roR32Right,
    setWin32R,win32R,

    quartersL,setQuartersL,
    quartersR,setQuartersR,

    semisR,setSemisR,
    semisL,setSemisL,

    final,setFinal,

    third,setThird}=useKnockout()
  const remover = (index, teamName) => {
    if (!teamName) return;

    if (round === "semis") {
      const finalIndex = side === "left" ? 0 : 1;
      setFinal((prev) => {
        const temp = [...prev];
        temp[finalIndex] = temp[finalIndex] === teamName ? null : teamName;
        return temp;
      });
      return;
    }

    let setWin;
    if (round === "ro32") setWin = side === "left" ? setWin32L : setWin32R;
    else if (round === "ro16") setWin = side === "left" ? setQuartersL : setQuartersR;
    else if (round === "quarters") setWin = side === "left" ? setSemisL : setSemisR;

    if (setWin) {
      setWin((prev) => {
        const temp = [...prev];
        temp[index] = temp[index] === teamName ? null : teamName;
        return temp;
      });
    }
  };

  return (
    <div className="flex flex-col justify-around h-full z-10 w-28 sm:w-32 shrink-0">
      {Array.from({ length: matches }).map((_, i) => {
        let team1 = null, team2 = null;

        if (round === 'ro32') {
          const matchData = side === 'left' ? roL32Left[i] : roR32Right[i];
          if (matchData) {
            team1 = matchData.team1;
            team2 = matchData.team2;
          }
        } else {
          let prevWinners = [];
          if (round === 'ro16') prevWinners = side === 'left' ? win32L : win32R;
          else if (round === 'quarters') prevWinners = side === 'left' ? quartersL : quartersR;
          else if (round === 'semis') prevWinners = side === 'left' ? semisL : semisR;

          team1 = prevWinners[i * 2] || null;
          team2 = prevWinners[i * 2 + 1] || null;
        }

        let isTeam1Winner = false;
        let isTeam2Winner = false;

        if (round === "semis") {
          const finalIndex = side === "left" ? 0 : 1;
          isTeam1Winner = final[finalIndex] === team1 && team1 !== null;
          isTeam2Winner = final[finalIndex] === team2 && team2 !== null;
        } else {
          let currentWinners = [];
          if (round === "ro32") currentWinners = side === "left" ? win32L : win32R;
          else if (round === "ro16") currentWinners = side === "left" ? quartersL : quartersR;
          else if (round === "quarters") currentWinners = side === "left" ? semisL : semisR;

          isTeam1Winner = currentWinners[i] === team1 && team1 !== null;
          isTeam2Winner = currentWinners[i] === team2 && team2 !== null;
        }

        return (
          <div key={i} className="flex flex-col justify-between gap-1 h-14 sm:h-16 w-full opacity-95 hover:opacity-100 transition-opacity">
            <button onClick={() => remover(i, team1)} className={`flex-1 bg-gray-800 border border-gray-600  rounded-md shadow-lg transition-colors cursor-pointer ${isTeam1Winner ? 'border-2 border-white bg-green-700' : ''}`}>{team1 || '\u00A0'}</button>
            <button onClick={() => remover(i, team2)} className={`flex-1 bg-gray-800 border border-gray-600  rounded-md shadow-lg transition-colors cursor-pointer ${isTeam2Winner ? 'border-2 border-white bg-green-700' : ''}`}>{team2 || '\u00A0'}</button>
          </div>
        )
      })}
    </div>
  )
}

export default MatchColumn
