
// function teamListener(){
//     $('[data-target-teams]').on('change', function(data){
//         $('[data-team-team]').html($('[data-target-team]').children());
//         $('[data-team-player]').html($('[data-target-]').children());
//         var teamPicked = $('[data-target-teams] option:selected').text();
//         console.log(teamPicked);
//         // getTeamInfo(teamPicked);
//         getPlayerInfo(teamPicked);
//         $('[data-team-div]').removeClass('hidden');
//         $('[data-position-div]').addClass('hidden');
//     })
    
// }

// function positionListener(){
//     getAndPopPlayerPositions();
//     $('[data-target-positions]').on('change', function(data){
//         var positionPicked = $('[data-target-positions] option:selected').text();
//         var positionLong = Object.values(positionName);
//         console.log(positionLong);
//         var positionShort = Object.keys(positionName);
//         var positionPickedShort = positionShort[positionLong.indexOf(positionPicked)];
//         console.log(positionPickedShort);
//         positionChecker(allPlayer, positionPickedShort);
//         $('[data-team-div]').addClass('hidden');
//         $('[data-position-div]').removeClass('hidden');
        
//     })
// }

function dateListener(){
    $('[data-target-schedule]').on('change', function(data){
        var datePicked = $('[data-target-schedule] option:selected').text();
        console.log(datePicked);
        return(datePicked);
})
}





