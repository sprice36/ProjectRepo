var myAPIKey = 'kmwuyu7p3m8npfp6pquatdtk'


var teams  =       [ 
    {name: 'Red Sox',  ID:  '93941372-eb4c-4c40-aced-fe3267174393'},
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

function dayCheck(){
    var date = new Date().toLocaleDateString();
    if( localStorage.yourapp_date == date ){
        return true;
    } 
    if (localStorage.yourapp_date !== date) {    
        localStorage.yourapp_date = date;
        return false;
    }
}


function masterPull(){
    if (dayCheck()){    
    }
    if (!dayCheck()){
        teamIDS = []
        teams.forEach(function(data){
            var teamID = data['ID']
            teamIDS.push(teamID);
        })
        // var teamProfiles = []
        // teamIDS.forEach(function(data, index){
        //     var teamProfileAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/teams/' + data +  '/profile.json?api_key=' + myAPIKey;
        //     setTimeout(function(){
        //     $.get(teamProfileAPI, function(val){
        //     teamIDOne = {};
        //     var id = val['id']
        //     var market = val['market']
        //     var players = val['players']
        //     var venue = val['venue']
        //     var name = val['name']
        //     teamIDOne['name'] = name;
        //     teamIDOne['id'] = id;
        //     teamIDOne['market'] = market;
        //     teamIDOne['players'] = players;
        //     teamIDOne['venue'] = venue;
        //     teamProfiles.push(teamIDOne);
        // })
        //     console.log(teamProfiles);
        //     localStorage.setItem('teamProfile', JSON.stringify(teamProfiles))
        //     }, index * 1000)
        // })
        var leagueScheduleAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/games/2018/REG/schedule.json?api_key=' + myAPIKey;
        $.get(leagueScheduleAPI, function(data){
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
        console.log(cleanDate);
        return(cleanDate);
    })
    localStorage.setItem('playDates', JSON.stringify(cleanDate));
})

}
}
function popGameSched(){
    var cleanDate2 = localStorage.getItem('playDates')
    cleanDate2 = JSON.parse(cleanDate2);
    // console.log(cleanDate2)
    cleanDate2.forEach(function(print){
        var newSelector = $(`<option value=${print}>${print}</option>`);
        $('[data-target-schedule]').append(newSelector);
    })
}
    function popTeamNames() {
    var refObject = localStorage.getItem('teamProfile');
    refObject = JSON.parse(refObject);
    refObject.forEach(function(data){
        var teamName = data['name']
        var newSelector = $(`<option value=${teamName}>${teamName}</option>`);
        $('[data-target-teams]').append(newSelector);

    })
}

function getAndPopPlayerPositions() {
    var position = localStorage.getItem('teamProfile');
    position = JSON.parse(position);
    positionNames = []
    position.forEach(function(data){
        var playerIn = data['players'];
        // console.log(playerIn);
        var positionName = playerIn['primary_position'];
        // var playersArr = [...new Set(player)]
        // console.log(playersArr);
        playerIn.forEach(function(val){
            // console.log(val);
            var positionName = val['primary_position'];   
            positionNames.push(positionName);
            // console.log(positionName);
        })
    })
    positionNames = [...new Set(positionNames)]
    // console.log(positionNames);
    positionNames = positionNames.sort();
    positionNames.forEach(function(uniq){
        uniq1 = positionName[uniq]
        // console.log(uniq1);
        var newSelector = $(`<option value=${uniq1}>${uniq1}</option>`);
        $('[data-target-positions]').append(newSelector);
        })
}

function getPlayerInfo(team){
    // var foundIt = $.grep(teams, function(element){
        // return element.name === team;
    // })[0];
    // var teamKey = foundIt.ID;
    // var teamInfoURL = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/teams/' + teamKey  + '/profile.json?api_key=' + myAPIKey;
    /*console.log(foundIt);
    console.log(teamKey);
    console.log(teamInfoURL); */
    var libraryArray = [];
    var libraryArray2 = [];
    // var itemsArray = [];
    var teamProfile = localStorage.getItem('teamProfile');
    teamProfile = JSON.parse(teamProfile);
    teamProfile.forEach(function(data){
        var teamName = data['name'];
        if (team === teamName){
            $('[data-team-team]').append(teamName);
            var player = data['players'];
            // console.log(players);
            player.forEach(function(val){
                // console.log(val);
                var playerInfoArr = []
                var playerName = val.full_name
                playerInfoArr.push(playerName);
                var playerJersey = val.jersey_number
                playerInfoArr.push(playerJersey);
                var playerBirth = val.birthdate
                playerInfoArr.push(playerBirth);
                var playerPosition = val.primary_position
                playerInfoArr.push(positionName[playerPosition]);
                
                var newPlayerInfo = $('<div>');
                playerInfoArr.forEach(function(blurb){
                    $(newPlayerInfo).append(blurb);
                })
                $('[data-team-player]').append(newPlayerInfo);

            })
        }
    })
}
function teamListener(){
    $('[data-target-teams]').on('change', function(data){
        $('[data-team-team]').html($('[data-target-team]').children());
        $('[data-team-player]').html($('[data-target-]').children());
        var teamPicked = $('[data-target-teams] option:selected').text();
        console.log(teamPicked);
        // getTeamInfo(teamPicked);
        getPlayerInfo(teamPicked);
        $('[data-team-div]').removeClass('hidden');
        $('[matchup-container]').addClass('hidden');
        $('[data-position-div]').addClass('hidden');
    })
    
}

function positionListener(){
    // getAndPopPlayerPositions();
    $('[data-target-positions]').on('change', function(data){
        $('[data-position-name]').empty();
        $('[data-player-info]').empty();
        var positionPicked = $('[data-target-positions] option:selected').text();
        var positionLong = Object.values(positionName);
        // console.log(positionLong);
        var positionShort = Object.keys(positionName);
        var positionPickedShort = positionShort[positionLong.indexOf(positionPicked)];
        // console.log(positionPickedShort);
        allPlayer = [];
        var position = localStorage.getItem('teamProfile');
        position = JSON.parse(position);
        // console.log(position);
        position.forEach(function(val){
            var players = val.players
            players.forEach(function(loop){
                // console.log(loop);
                if (loop['primary_position'] === positionPickedShort){
                    var newDiv = $('<div>');
                    newDiv.append(loop['full_name']);
                    $('[data-player-info]').append(newDiv);
                }
            })
        })
        // positionChecker(allPlayer, positionPickedShort);
        var newH3 = $('<h3>')
        newH3.append(positionPicked);
        $('[data-position-name]').append(newH3);
        $('[data-team-div]').addClass('hidden');
        $('[matchup-container]').addClass('hidden');
        $('[data-position-div]').removeClass('hidden');
        
    })
}

function playerClick(element){
    var children = (element.children())
    var childArr = (Object.values(children));
    childArr.forEach(function(data){
        // console.log(data);
        $(data).on('click', function(val){
            var playerClicked = (val.target.childNodes['0'].data);
            console.log(val.target);
            if (playerClicked){
                var teamProfile = localStorage.getItem('teamProfile');
                teamProfile = JSON.parse(teamProfile);
                console.log(playerClicked)
                console.log(val.target);
                teamProfile.forEach(function(data){
                    var allPlayers = (data['players'])
                    allPlayers.forEach(function(loop){
                        if (playerClicked === loop['full_name']){
                            console.log(val.target)
                            var playerID = (loop['id']);
                            var URL = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/players/' + playerID + '/profile.json?api_key=' + myAPIKey;
                            $.get(URL, function(stats){
                                var fullPlayerStats = (stats['player']);
                                console.log(fullPlayerStats);
                                var fullName = fullPlayerStats['full_name'];
                                var birthCity = fullPlayerStats['birthcity'];
                                var birthCountry = fullPlayerStats['birthcountry'];
                                var birthDay = fullPlayerStats['birthdate'];
                                var height = fullPlayerStats['height'];
                                var weight = fullPlayerStats['weight']
                                var playPosition = fullPlayerStats['primary_position']
                                var jersey = fullPlayerStats['jersey_number'];
                                var team = fullPlayerStats.team.market + ' '  + fullPlayerStats.team.name;
                                (val.target).innerHTML = '';
                                (val.target).classList.add('full-info');
                                (val.target).append(fullName);
                                (val.target).append(birthCity);
                                (val.target).append(birthCountry);
                                (val.target).append(birthDay);
                            })
                        }
                    })
                })
            }
        })
    })    
}

// function getImages(){
//     var teamProfiles = localStorage.getItem('teamProfile');
//     teamProfiles = JSON.parse(teamProfiles);
//     var allPlayers = []
//     teamProfiles.forEach(function(data){
//         var allPlayersSplit = data['players']
//         allPlayersSplit.forEach(function(val){
//             // console.log(val);
//             var playerName = val['full_name']
//             allPlayers.push(playerName);
//         })
//     })
//     allPlayers.forEach(function(data){
//         var nameArr = data.split(' ');
//         // console.log(nameArr);
//         var URL ='https://www.foxsports.com/mlb/' + nameArr[0] + '-' + nameArr[1] + '-player-stats';
//         // console.log(URL)
//         $.get(URL, function(res){
//             console.log(res);
//             console.log($('.wisgb_logoImage wisfb_bioLargeLogo'));
//             var imgTag = $('.wisfb_logoImage wisfb_bioLargeLogo').attr('src');
//             console.log(imgTag);
            

//         })
//     })
//     // console.log(allPlayers);
// }






// masterPull();
var newblue = localStorage.getItem('teamProfile');
newblue = JSON.parse(newblue);
// popTeamNames();
// getAndPopPlayerPositions();
// getPlayerInfo();
// teamListener()


{/* <img class="wisfb_headshotImage wisfb_bioLargeImg" src="https://b.fssta.com/uploads/application/mlb/players/597889.vresize.350.425.medium.67.png" alt="Mookie Betts" onerror="this.src='/foxbox/Static/Style/Images/Global/DefaultHeadshot.png?vt=20180605000000'"> */}