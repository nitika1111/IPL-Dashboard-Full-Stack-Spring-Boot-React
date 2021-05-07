import {React, useEffect, useState} from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage = () => {

  const [team, setTeam] = useState({matches:[]});

  useEffect( 
    () =>{
        const fetchMatches= async () =>{
            const response = await fetch('http://localhost:7070/teams/Rajasthan%20Royals');
            const data = await response.json();
            console.log(data);

            setTeam(data);
        }

        fetchMatches();
    },
    [] // call useEffect only once on page load
  );


  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailCard match= {team.matches[0]} />

      {team.matches.slice(1).map( match => <MatchSmallCard match= {match} /> )}
      
    </div>
  );
}
