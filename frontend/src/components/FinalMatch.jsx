import React from 'react'

const FinalMatch = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full z-10 w-36 sm:w-48 shrink-0 relative">
      <div className="flex flex-col items-center w-full relative">
        <span className="absolute bottom-full mb-2 text-yellow-500 font-bold">Final</span>
        <div className="flex flex-col justify-between gap-1 h-14 sm:h-16 w-full opacity-100">
           <button className="flex-1 bg-gray-800 border-2 border-yellow-500 hover:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(250,204,21,0.4)] transition-colors cursor-pointer" onClick={() => {}}></button>
           <button className="flex-1 bg-gray-800 border-2 border-yellow-500 hover:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(250,204,21,0.4)] transition-colors cursor-pointer" onClick={() => {}}></button>
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="flex flex-col items-center w-full relative">
          <span className="absolute bottom-full mb-2 text-orange-400 font-bold">3rd Place</span>
          <div className="flex flex-col justify-between gap-1 h-14 sm:h-16 w-full opacity-100">
             <button className="flex-1 bg-gray-800 border-2 border-orange-400 hover:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(251,146,60,0.4)] transition-colors cursor-pointer" onClick={() => {}}></button>
             <button className="flex-1 bg-gray-800 border-2 border-orange-400 hover:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(251,146,60,0.4)] transition-colors cursor-pointer" onClick={() => {}}></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinalMatch
