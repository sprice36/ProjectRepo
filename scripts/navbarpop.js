// var hierarchy = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/league/hierarchy.json?api_key=' + myAPIKey;

// function getTeamNames(data) {
//     // $.get(hierarchy, function(data) {
//         teamNames = 
//         // teamIDS = [];
//         var vals = Object.values(data);
//         var next = Object.values(vals);
//         var blue = next[1];
//         blue.forEach(function(stuff) {
//             var green = Object.values(stuff);
//             var green3 = green[3];
//             var again = Object.keys(green3);
//             // console.log(green3.)
//             again.forEach(function(hey) {
//                 var newVar = green3[hey];
//                 var newNew = Object.values(newVar);
//                 var newNew3 = newNew[3];
//                 var newVal = Object.keys(newNew3);
//                 newVal.forEach(function(here) {
//                     var hmmm = newNew3[here];
//                     // console.log(hmmm);
//                     teamNames.push(hmmm.name);
//                     // teamIDS.push(hmmm.id)
//                     // return teamIDS;
//                     // return teamNames;
//                 })
//             })
//         })
//         return(teamNames);
//     //   return(teamIDS);
// }
    
// function getTeamIDS(data) {
//     // $.get(hierarchy, function(data) {
//         // teamNames = [];
//         teamIDS = [];
//         var vals = Object.values(data);
//         var next = Object.values(vals);
//         var blue = next[1];
//         blue.forEach(function(stuff) {
//             var green = Object.values(stuff);
//             var green3 = green[3];
//             var again = Object.keys(green3);
//             // console.log(green3.)
//             again.forEach(function(hey) {
//                 var newVar = green3[hey];
//                 var newNew = Object.values(newVar);
//                 var newNew3 = newNew[3];
//                 var newVal = Object.keys(newNew3);
//                 newVal.forEach(function(here) {
//                     var hmmm = newNew3[here];
//                     // console.log(hmmm);
//                     // teamNames.push(hmmm.name);
//                     teamIDS.push(hmmm.id)
//                     // return teamIDS;
//                     // return teamNames;
//                 })
//             })
//         })
//     //    return(teamNames);
//        return(teamIDS);
// }
    

// function popTeamNames() {
//     var refObject = localStorage.getItem('teamProfile');
//     refObject = JSON.parse(refObject);
//     refObject.forEach(function(data){
//         var teamName = data['name']
//         var newSelector = $(`<option value=${teamName}>${teamName}</option>`);
//         $('[data-target-teams]').append(newSelector);

//     })
// }

// function getAndPopPlayerPositions() {
//     var position = localStorage.getItem('teamProfile');
//     position = JSON.parse(position);
//     position.forEach(function(data){
//         var player = data['players'];
//         player.forEach(function(val){
//             var positionName = val['primary_position'];
//             var newSelector = $(`<option value=${positionName}>${positionName}</option>`);
//             $('[data-target-positions]').append(newSelector);
//         })
//         })
// }
    

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


// function startTheProgram(URL){ 
//     var ajaxRequest = $.get(URL);
    
//     ajaxRequest
//     .then(getTeamNames)
//     .then(popTeamNames)
// }


// function nextStep(URL){
//     var ajaxRequest = $.get(URL);

//     ajaxRequest
//     .then(getTeamIDS)
//     .then(getAndPopPlayerPositions)
//     // .then(popPlayerPositions)
// }
// function gameSchedule(URL){
    // var ajaxRequest = $.get(URL)

    // ajaxRequest
    // .then(pullSchedule)
    // .then(popNavDate)
// }

// startTheProgram(hierarchy);
// nextStep(hierarchy);
// gameSchedule(leagueScheduleAPI);