import React, { createContext, useState, useContext } from 'react'
const KnockoutContext = createContext()
export const KnockoutProvider = ({ children }) => {
  const [Top32,setTop32]=useState({})
  const [best8,setBest8]=useState("")
  return (
    <KnockoutContext.Provider value={{ Top32,setTop32,best8,setBest8 }}>
      {children}
    </KnockoutContext.Provider>
  )
}
export const useKnockout = () => useContext(KnockoutContext)