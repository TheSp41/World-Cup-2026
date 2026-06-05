import React from 'react'

const MatchColumn = ({matches}) => {
  return (
    <div className="flex flex-col justify-around h-full z-10 w-28 sm:w-32 shrink-0">
    {Array.from({ length: matches }).map((_, i) => (
      <div key={i} className="flex flex-col justify-between gap-1 h-14 sm:h-16 w-full opacity-95 hover:opacity-100 transition-opacity">
         <button className="flex-1 bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-md shadow-lg transition-colors cursor-pointer" onClick={() => {}}></button>
         <button className="flex-1 bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-md shadow-lg transition-colors cursor-pointer" onClick={() => {}}></button>
      </div>
    ))}
  </div>
  )
}

export default MatchColumn
