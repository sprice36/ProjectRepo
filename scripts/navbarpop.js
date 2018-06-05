var hierarchy = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/league/hierarchy.json?api_key=g853qfg7gsw5eztfz77uvyfx';

function getTeamNames(data) {
    // $.get(hierarchy, function(data) {
        teamNames = [];
        // teamIDS = [];
        var vals = Object.values(data);
        var next = Object.values(vals);
        var blue = next[1];
        blue.forEach(function(stuff) {
            var green = Object.values(stuff);
            var green3 = green[3];
            var again = Object.keys(green3);
            // console.log(green3.)
            again.forEach(function(hey) {
                var newVar = green3[hey];
                var newNew = Object.values(newVar);
                var newNew3 = newNew[3];
                var newVal = Object.keys(newNew3);
                newVal.forEach(function(here) {
                    var hmmm = newNew3[here];
                    // console.log(hmmm);
                    teamNames.push(hmmm.name);
                    // teamIDS.push(hmmm.id)
                    // return teamIDS;
                    // return teamNames;
                })
            })
        })
       return(teamNames);
    //    return(teamIDS);
}
    
function getTeamIDS(data) {
    // $.get(hierarchy, function(data) {
        // teamNames = [];
        teamIDS = [];
        var vals = Object.values(data);
        var next = Object.values(vals);
        var blue = next[1];
        blue.forEach(function(stuff) {
            var green = Object.values(stuff);
            var green3 = green[3];
            var again = Object.keys(green3);
            // console.log(green3.)
            again.forEach(function(hey) {
                var newVar = green3[hey];
                var newNew = Object.values(newVar);
                var newNew3 = newNew[3];
                var newVal = Object.keys(newNew3);
                newVal.forEach(function(here) {
                    var hmmm = newNew3[here];
                    // console.log(hmmm);
                    // teamNames.push(hmmm.name);
                    teamIDS.push(hmmm.id)
                    // return teamIDS;
                    // return teamNames;
                })
            })
        })
    //    return(teamNames);
       return(teamIDS);
}
    

function popTeamNames(teamNames) {
    teamNames.forEach(function(name) {
        var newSelector = $(`<option value=${name}>${name}</option>`);
        $('[data-target-teams]').append(newSelector);
    })
}

function getAndPopPlayerPositions(teamIDS) {
    var positions = [];
    var urlAddon = teamIDS[0];
    newURL = ('http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/teams/' + urlAddon + '/profile.json?api_key=bacyjb6cyn45qk6zdcz6hfeg')
    $.get(newURL, function(data) {
        var playerArray = data.players
        playerArray.forEach(function(stuff){
            positions.push(stuff.primary_position);
        })
        var positionsFixed = [...new Set(positions)];
        positionsFixed.forEach(function(point) {
            var positionName = {
                "DH": "Hitter",
                "CF": "Center Field",
                "LF": "Left Field",
                "RF": "Right Field",
                "C": "Catcher",
                "SP": "Starting Pitcher",
                "RP": "Relief Pitcher",
                "SS": "Short Stop",
                "1B": "1ST Base",
                "2B": "2ND Base",
                "3B": "3RD Base",
            };
            var namePositions = positionName[point];
            var newSelector = $(`<option value=${namePositions}>${namePositions}</option>`);
            $('[data-target-positions]').append(newSelector);
        })
    })
}

function pullSchedule(data){
    var cleanDate = [];
    var key = Object.values(data);
    var gameSchedule = key[2];
    var gameDays = Object.values(gameSchedule);
    var days = [];
    gameDays.forEach(function(steps){
        days.push(steps.scheduled.slice(0, 10));
    })
    var daysFixed = [...new Set(days)]
    var daysSorted = daysFixed.sort(function(a, b){
        if (a < b){
            return -1
        } else if (b < a) {
            return 1
        } else {
            return 0
        }   
    });
    daysSorted.forEach(function(date){
        cleanDate.push(moment(date).format('MMM Do YY'));
        // console.log(cleanDate);
        return(cleanDate);
    })
    return(cleanDate)
}

function popNavDate(cleanDate){
    // console.log(cleanDate);
    cleanDate.forEach(function(print){
        var newSelector = $(`<option value=${print}>${print}</option>`);
            $('[data-target-schedule]').append(newSelector);
    })
}

function getGame(gameID) {
    $.get(leagueScheduleAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        var $venueField = '';
      //  console.log(keys);
        var games
       keys.forEach(function(aKey){
           var aLibrary = data[aKey];
           libraryArray.push(aLibrary);
        //   console.log(libraryArray);

           libraryArray.forEach(function (data){
            var itemsArray = [];
            var items = Object.values(data);
             //console.log(items);

             items.forEach(function (data){
                var gamesData = Object.values(data);
                var gameinfo = gamesData[0];
                  //    console.log(gameinfo);
                
                 if (gameinfo == gameID){

                  var awayTeam = data['away_team'];
                  var homeTeam = data['home_team'];
                   
                  var awayTeamName = getTeamName(awayTeam);
                  var homeTeamName = getTeamName(homeTeam);
                  if (awayTeamName != undefined || homeTeamName != undefined){
                  console.log(homeTeamName);
                  console.log(awayTeamName);
                 }
                  /*console.log("found it at" + gameinfo);
                  console.log("away team:"+  awayTeamName);
                  console.log("home team:" + homeTeamName); 
                  
                  var venueData = Object.values(data['venue']);
                  $venueField = $(`<p>`, {text : `${venueData}` });
                   for (var i = 0; i < 1; i++){
                  
                  $(document.body).append($venueField);   
                  }*/
                  
                } 
        
             });
           });
             
        });
        //getLocation(gameID);
        return gameID;
    });
}


function popGames(gameID){
       /* gameID.forEach(function(print){
        var newSelector = $(`<option value=${print}>${print}</option>`);
           
        
        $('[data-target-games]').append(newSelector); */
   /* var newSelector = $(`<option value=${print}>${print}</option>`);
    $('[data-target-games]').append(newSelector); */
}


function startTheProgram(URL){ 
    var ajaxRequest = $.get(URL);
    
    ajaxRequest
    .then(getTeamNames)
    .then(popTeamNames)
}

function nextStep(URL){
    var ajaxRequest = $.get(URL);

    ajaxRequest
    .then(getTeamIDS)
    .then(getAndPopPlayerPositions)
    // .then(popPlayerPositions)
}

function gameSchedule(URL){
    var ajaxRequest = $.get(URL)

    ajaxRequest
    .then(pullSchedule)
    .then(popNavDate)
}
/*
function populateGames(URL){
    var ajaxRequest = $.get(URL)

    ajaxRequest
    .then(getGame)
    .then(popGames)
    //.then(getLocation)
} */


startTheProgram(hierarchy);
nextStep(hierarchy);
gameSchedule(leagueScheduleAPI);
//populateGames(leagueScheduleAPI);