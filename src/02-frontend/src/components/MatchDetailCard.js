import {React} from 'react';
import { Link } from 'react-router-dom';

export const MatchDetailCard = ({teamName, match}) => {
  if (match == null) return null;
    const otherTeam=  match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamLink= `/teams/${otherTeam}`;

  return (
    <div className="MatchDetailCard">
      <h1> vs <Link to={otherTeamLink}>{otherTeam}</Link></h1>

      <h2> {match.matchWinner} won by {match.resultMargin} {match.result}</h2>
      <h3> on {match.date}</h3>
      <h4> at {match.venue}</h4>
    </div>
  );
}
