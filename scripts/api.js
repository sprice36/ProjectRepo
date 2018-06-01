//cors proxy
//http://my-little-cors-proxy.herokuapp.com/

var teams  =        [{name: 'Red Sox',  ID:  '93941372-eb4c-4c40-aced-fe3267174393'},
                     {name: 'Yankees',  ID: 'a09ec676-f887-43dc-bbb3-cf4bbaee9a18'},
                     {name: 'Rays',     ID:   'bdc11650-6f74-49c4-875e-778aeb7632d9'},
                     {name: 'Blue Jays', ID:    '1d678440-b4b1-4954-9b39-70afb3ebbcfa'},
                     {name: 'Orioles', ID:    '75729d34-bca7-4a0f-b3df-6f26c6ad3719'},
                     {name: 'Indians',  ID:    '80715d0d-0d2a-450f-a970-1b9a3b18c7e7'},
                     {name: 'Tigers', ID:   '575c19b7-4052-41c2-9f0a-1c5813d02f99'},
                     {name: 'Twins', ID:    'aa34e0ed-f342-4ec6-b774-c79b47b60e2d'},
                     {name: 'Royals', ID:    '833a51a9-0d84-410f-bd77-da08c3e5e26e'},
                     {name: 'White Sox', ID:    '47f490cd-2f58-4ef7-9dfd-2ad6ba6c1ae8'},
                     {name: 'Astros', ID:    'eb21dadd-8f10-4095-8bf3-dfb3b779f107'},
                     {name: 'Mariners', ID:    '43a39081-52b4-4f93-ad29-da7f329ea960'},
                     {name: 'Angels', ID:    '4f735188-37c8-473d-ae32-1f7e34ccf892'},
                     {name: 'Athletics', ID:    '27a59d3b-ff7c-48ea-b016-4798f560f5e1'},
                     {name: 'Rangers', ID:   'd99f919b-1534-4516-8e8a-9cd106c6d8cd'},
                     {name: 'Nationals', ID:    'd89bed32-3aee-4407-99e3-4103641b999a'},
                     {name: 'Braves', ID:    '12079497-e414-450a-8bf2-29f91de646bf'},
                     {name: 'Phillies', ID:    '2142e1ba-3b40-445c-b8bb-f1f8b1054220'},
                     {name: 'Mets', ID:   'f246a5e5-afdb-479c-9aaa-c68beeda7af6'},
                     {name: 'Marlins', ID:    '03556285-bdbb-4576-a06d-42f71f46ddc5'},
                     {name: 'Brewers', ID:    'dcfd5266-00ce-442c-bc09-264cd20cf455'},
                     {name: 'Cubs', ID:    '55714da8-fcaf-4574-8443-59bfb511a524'},
                     {name: 'Cardinals', ID:    '44671792-dc02-4fdd-a5ad-f5f17edaa9d7'},
                     {name: 'Pirates', ID:    '481dfe7e-5dab-46ab-a49f-9dcc2b6e2cfd'},
                     {name: 'Reds', ID:    'c874a065-c115-4e7d-b0f0-235584fb0e6f'},
                     {name: 'Rockies', ID:    '29dd9a87-5bcc-4774-80c3-7f50d985068b'},
                     {name: 'Diamondbacks', ID:    '25507be1-6a68-4267-bd82-e097d94b359b'},
                     {name: 'Dodgers', ID:    'ef64da7f-cfaf-4300-87b0-9313386b977c'},
                     {name: 'Giants', ID:    'a7723160-10b7-4277-a309-d8dd95a8ae65'},
                     {name: 'Padres', ID:    'd52d5339-cbdd-43f3-9dfa-a42fd588b9a3' }

                       ];

//league schedule API
var leagueScheduleAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/games/2018/REG/schedule.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

function pullScheduleAPI() {
    $.get(leagueScheduleAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        console.log(keys);
     
       keys.forEach(function(aKey){
           var aLibrary = data[aKey];
           libraryArray.push(aLibrary);
           console.log(libraryArray);
        });
    });
}

//daily schedule API
var dailyScheduleAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/games/2018/05/31/schedule.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

function pullDailyScheduleAPI() {
    $.get(dailyScheduleAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        console.log(keys);
     
       keys.forEach(function(aKey){
           var aLibrary = data[aKey];
           libraryArray.push(aLibrary);
           console.log(libraryArray);
        });
    });
}


//game boxscore API
var gameBoxscoreAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/games/b6f922df-46c6-483c-8d3b-4235a6fc4520/boxscore.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

function pullGameBoxscoreAPI() {
    $.get(gameBoxscoreAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        console.log(keys);

        keys.forEach(function(aKey){
            var aLibrary = data[aKey];
            libraryArray.push(aLibrary);
            console.log(libraryArray);
         });
    });
}

//venues API  DOESNT HAVE LONGITUDE AND LATTITUDE
var venuesAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/league/venues.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

function pullVenuesAPI() {
    $.get(venuesAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        console.log(keys);

        keys.forEach(function(aKey){
            var aLibrary = data[aKey];
            libraryArray.push(aLibrary);
            console.log(libraryArray);
         });
    });
}

//player profile API 
var playerAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/players/6e1cac5c-b059-4b80-a267-5143b19efb27/profile.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

function pullPlayerAPI(){
    $.get(playerAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        console.log(keys);

        keys.forEach(function(aKey){
            var aLibrary = data[aKey];
            libraryArray.push(aLibrary);
            console.log(libraryArray);
         });
    });
}

//season statistics API
var seasonStatsAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/teams/aa34e0ed-f342-4ec6-b774-c79b47b60e2d/statistics.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

function pullSeasonStatsAPI(){
    $.get(seasonStatsAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        console.log(keys);

        keys.forEach(function(aKey){
            var aLibrary = data[aKey];
            libraryArray.push(aLibrary);
            console.log(libraryArray);
         });
    });
}

//standings API 
var standingsAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/standings.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

function pullStandingsAPI(){
    $.get(standingsAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        console.log(keys);

        keys.forEach(function(aKey){
            var aLibrary = data[aKey];
            libraryArray.push(aLibrary);
            console.log(libraryArray);
         });
    });
}

//team profile API
//var teamProfileAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/teams/aa34e0ed-f342-4ec6-b774-c79b47b60e2d/profile.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';
var teamProfileAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/teams/12079497-e414-450a-8bf2-29f91de646bf/profile.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';
function pullTeamProfileAPI(){
    $.get(teamProfileAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        console.log(keys);

        keys.forEach(function(aKey){
            var aLibrary = data[aKey];
            libraryArray.push(aLibrary);
            console.log(libraryArray);
         });
    });
}

//game summary API
var gameSummaryAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/games/b6f922df-46c6-483c-8d3b-4235a6fc4520/summary.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

function pullGameSummaryAPI(){
    $.get(gameSummaryAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        console.log(keys);

        keys.forEach(function(aKey){
            var aLibrary = data[aKey];
            libraryArray.push(aLibrary);
            console.log(libraryArray);
         });
    });
}

//Google maps API KEY: AIzaSyAkSlr11_qZAg9OLMQOKiuSsDRkmG6kVps
var googleMapsAPI = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAkSlr11_qZAg9OLMQOKiuSsDRkmG6kVps&callback=initMap";

