// Sport API key g853qfg7gsw5eztfz77uvyfx
// CORS workaround http://my-little-cors-proxy.herokuapp.com/

// startTheProgram(hierarchy);
// nextStep(hierarchy);
// gameSchedule(leagueScheduleAPI);
masterPull();
popTeamNames();
getAndPopPlayerPositions();
popGameSched();
teamListener();
positionListener();
dateListener();
// playerClick();
// positionClicked();
playerClick($('[data-team-player]'));
playerClick($('[data-player-info]'));
clickListener($('[data-target-matchup]'));
// getImages();
// positionListener();

