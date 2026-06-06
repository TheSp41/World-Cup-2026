import React, { createContext, useState, useContext } from 'react'
const KnockoutContext = createContext()
export const KnockoutProvider = ({ children }) => {
  const [Top32,setTop32]=useState({}) //all 32 knockout participants
  const [best8,setBest8]=useState("") //3 rd position finish in grp stage

  const [roL32Left,setRoL32]=useState([]) //round of 32 participants left side
  const [roR32Right,setRoR32]=useState([]) //round of 32 participants right side

  const [win32L,setWin32L]=useState([])  //ro16 left side participants or ro32 winner left
  const [win32R,setWin32R]=useState([]) //round of 16 participants right or ro32 winner right

  const[quartersL,setQuartersL]=useState([]) //quarters left or ro16 winner left
  const[quartersR,setQuartersR]=useState([]) //quarters right or ro16 winner right 

  const [semisR,setSemisR]=useState([]) //semis left or quarters winner left
  const [semisL,setSemisL]=useState([]) //semis right or quarters winner right

  const [final,setFinal]=useState([]) //final and winner of semis left and right

  const [winner,setWinner]=useState([]) //winner
  const [third,setThird]=useState([]) //3rd place winner


  return (
    <KnockoutContext.Provider value={{ Top32,setTop32,best8,setBest8
    ,roL32Left,setRoL32,win32L,setWin32L
    ,roR32Right,setRoR32,win32R,setWin32R,

    quartersL,setQuartersL,
    quartersR,setQuartersR,

    semisR,setSemisR,
    semisL,setSemisL, 

    final,setFinal,

    third,setThird,
    
    winner,setWinner

    }}>
      {children}
    </KnockoutContext.Provider>
  )
}
export const useKnockout = () => useContext(KnockoutContext)