import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import './TeamPage.scss';
import { PieChart } from 'react-minimal-pie-chart';


export const TeamPage = () => {

    const [team, setTeam] = useState({ matches: [] });
    const { teamName } = useParams();

    useEffect(
        () => {
            const fetchTeam = async () => {
                const response = await fetch(`http://localhost:7070/teams/${teamName}`);
                const data = await response.json();
                console.log(data);

                setTeam(data);
            }

            fetchTeam();
        },
        [teamName] // call useEffect only once on page load
    );

    if (!team || !team.teamName) {
        return <h1>Team not found</h1>;
    }
    return (
        <div className="TeamPage">
            <div className="team-name-section">
                <h1 className="team-name">{team.teamName}</h1>
            </div>
            <div className="win-loss-section">
                Win / Loss
                <PieChart
                    data={[
                        { title: 'Wins', value: team.totalWins, color: '#cc3300' },
                        { title: 'Losses', value: team.totalMatches - team.totalWins, color: '#009933' }
                    ]}
                />
            </div>
            <div className="team-match-detail-section">
                <h3>Latest Matches</h3>
                <MatchDetailCard teamName= {team.teamName} match={team.matches[0]} />
            </div>

            {team.matches.slice(1).map(match => <MatchSmallCard teamName= {team.teamName} match={match} />)}
            <div className= "more-link">
                <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}> More > </Link>            </div>

        </div>
    );
}