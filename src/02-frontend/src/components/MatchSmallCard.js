import { React } from 'react';
import { Link } from 'react-router-dom';
import './MatchSmallCard.scss';

export const MatchSmallCard = ({teamName, match}) => {

  const otherTeam=  match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamLink= `/teams/${otherTeam}`;
  const isMatchWon= teamName === match.matchWinner;

  return (
    <div className= {isMatchWon ? "won-match-card MatchSmallCard":"lost-match-card MatchSmallCard"}>
      <span className="vs">vs </span>
        <h1> <Link to={otherTeamLink}> {otherTeam} </Link> </h1>

      <p className="match-result"> {match.matchWinner} won by {match.resultMargin} {match.result}</p>
    </div>
  );
}
