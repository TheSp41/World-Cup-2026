import React from 'react'

const ConnectorColumn = ({pairs,side}) => {
  return (
    
  <div className="flex flex-col h-full flex-1 min-w-[2rem] z-10">
    {Array.from({ length: pairs }).map((_, i) => (
      <div key={i} className="flex-1 relative">
        {side === 'left' ? (
          <>
            <div className="absolute top-1/4 left-0 w-1/2 h-[2px] bg-gray-500"></div>
            <div className="absolute bottom-1/4 left-0 w-1/2 h-[2px] bg-gray-500"></div>
            <div className="absolute top-1/4 bottom-1/4 left-1/2 w-[2px] bg-gray-500"></div>
            <div className="absolute top-1/2 left-1/2 w-1/2 h-[2px] bg-gray-500"></div>
          </>
        ) : (
          <>
            <div className="absolute top-1/4 right-0 w-1/2 h-[2px] bg-gray-500"></div>
            <div className="absolute bottom-1/4 right-0 w-1/2 h-[2px] bg-gray-500"></div>
            <div className="absolute top-1/4 bottom-1/4 right-1/2 w-[2px] bg-gray-500"></div>
            <div className="absolute top-1/2 right-1/2 w-1/2 h-[2px] bg-gray-500"></div>
          </>
        )}
      </div>
    ))}
  </div>
);

  
}

export default ConnectorColumn
