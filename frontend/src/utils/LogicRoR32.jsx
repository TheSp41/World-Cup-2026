import React, { useEffect } from 'react'
import { useKnockout } from '../context/KnockoutContext'
import scenerios from './scenerios'

const useLogicRoR32 = () => {
  const { best8, setRoR32, Top32 } = useKnockout()

  useEffect(() => {
    const hash = scenerios[best8]
    if (!best8 || Object.keys(Top32).length === 0 || !hash) return
    

    const temp = [
      { team1: Top32['1C'], team2: Top32['2F'], result: 'NA' },
      { team1: Top32['2E'], team2: Top32['2I'], result: 'NA' },
      { team1: Top32['1A'], team2: Top32[hash['1A']], result: 'NA' },
      { team1: Top32['1L'], team2: Top32[hash['1L']], result: 'NA' },
      { team1: Top32['1J'], team2: Top32['2H'], result: 'NA' },
      { team1: Top32['2D'], team2: Top32['2G'], result: 'NA' },
      { team1: Top32['1B'], team2: Top32[hash['1B']], result: 'NA' },
      { team1: Top32['1K'], team2: Top32[hash['1K']], result: 'NA' }
    ];

    setRoR32(temp)
  }, [best8, setRoR32, Top32]) 
}

export default useLogicRoR32