import React, { useEffect } from 'react'
import { useKnockout } from '../context/KnockoutContext'
import scenerios from './scenerios'

const useLogicRoL32 = () => {
  const { best8, setRoL32, Top32 } = useKnockout()

  useEffect(() => {
    const hash = scenerios[best8];
    if (!best8 || Object.keys(Top32).length === 0 || !hash) return;
    

    const temp = [
      { team1: Top32['1E'], team2: Top32[hash['1E']] },
      { team1: Top32['1I'], team2: Top32[hash['1I']] },
      { team1: Top32['2A'], team2: Top32['2B'] },
      { team1: Top32['1F'], team2: Top32['2C'] },
      { team1: Top32['2K'], team2: Top32['2L'] },
      { team1: Top32['1H'], team2: Top32['2J'] },
      { team1: Top32['1D'], team2: Top32[hash['1D']] },
      { team1: Top32['1G'], team2: Top32[hash['1G']] }
    ];

    setRoL32(temp)
  }, [best8, setRoL32, Top32]) 
}

export default useLogicRoL32