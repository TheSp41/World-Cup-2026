import React from 'react'
import MatchScorecard from '../components/Scoreboard'
const UpcomingMatches = () => {
  return (
    <div>
      <MatchScorecard match={{"id": "match_98765",
  "stage": "Quarter-Final",
  "status": "SCHEDULED",
  "time": "68", 
  "team1": "Brazil",
  "team2": "England",
  "score": {
    "team1": 2,
    "team2": 1
  },
  "startTime":"7:30"
      }}></MatchScorecard>
    </div>
  )
}

export default UpcomingMatches
