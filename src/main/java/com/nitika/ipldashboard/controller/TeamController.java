package com.nitika.ipldashboard.controller;

import com.nitika.ipldashboard.model.Team;
import com.nitika.ipldashboard.repo.MatchRepository;
import com.nitika.ipldashboard.repo.TeamRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository,MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/teams/{teamName}")
    public Team getTeamByTeamName(@PathVariable String teamName){
        
        Team team= this.teamRepository.findByTeamName(teamName);
        
        team.setMatches(this.matchRepository.findLatestMatchesByTeam(teamName, 4));

        return team;
    }
    
}




