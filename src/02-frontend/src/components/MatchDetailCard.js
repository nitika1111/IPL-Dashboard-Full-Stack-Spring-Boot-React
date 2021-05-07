import {React} from 'react';

export const MatchDetailCard = ({match}) => {
  if (match == null) return null;
  
  return (
    <div className="MatchDetailCard">
      <h1>{match.team1} vs {match.team2}</h1>
    </div>
  );
}
