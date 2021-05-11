import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import './HomePage.scss';
import { TeamTile } from '../components/TeamTile.js';


export const HomePage = () => {

    const [teams, setTeams] = useState([]);

    useEffect(
        () => {
            const fetchTeams = async () => {
                const response = await fetch(`http://localhost:7070/teams/`);
                const data = await response.json();
                console.log(data);

                setTeams(data);
            }

            fetchTeams();
        },
        [] // call useEffect only once on page load
    );

    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">Nitika's IPL Dashboard</h1>
            </div>
            <div className= "team-grid">
                {teams.map( team => <TeamTile teamName={team.teamName} />)}
            </div>

        </div>
    );
}