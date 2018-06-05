
// function getTeamID(teamName){
    
//   $.get(standingsAPI, function(data){
//     var libraryArray = [];
//     var keys = Object.keys(data);
//    // console.log(keys);

//     keys.forEach(function(aKey){
//         var aLibrary = data[aKey];
//         libraryArray.push(aLibrary);
//      //   console.log(libraryArray);
    
//     libraryArray.forEach(function (data){
//         var itemsArray = [];
//         var items = Object.values(data['season']);
//          //console.log(items);
    
//          items[3].forEach(function (data){
//         var leaguesData = Object.values(data);
//        // console.log(leaguesData);

//         leaguesData[3].forEach(function(data) {
//             var divisionData = Object.values(data);
//            // console.log(divisionData);

//         divisionData[3].forEach(function(data) {
//             var teamData = Object.values(data);
//            // console.log(teamData);
//             if (teamName == data.name){
//                 var ID = data.id;
//                // console.log(data.name);
//                 return console.log(data.name + '    ' + ID);
                
//                  }
                         
//            })
//          })
//        });
//      }); 
//    });
// });

// }


var teams  =       [ {name: 'Red Sox',  ID:  '93941372-eb4c-4c40-aced-fe3267174393'},
// =======
//            })
//          })
//        });
//      }); 
//    });
// });

// }

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

venues = 


// function getTeamName(idNumber){
//     $.get(standingsAPI, function(data){
//     var libraryArray = [];
//     var keys = Object.keys(data);
//    // console.log(keys);

//     keys.forEach(function(aKey){
//         var aLibrary = data[aKey];
//         libraryArray.push(aLibrary);
//        // console.log(libraryArray);
    
//     libraryArray.forEach(function (data){
//         var itemsArray = [];
//         var items = Object.values(data['season']);
//         // console.log(items);
    
//          items[3].forEach(function (data){
//         var leaguesData = Object.values(data);
//        // console.log(leaguesData);

//         leaguesData[3].forEach(function(data) {
//             var divisionData = Object.values(data);
//            // console.log(divisionData);

//         divisionData[3].forEach(function(data) {
//             var teamData = Object.values(data);
//            // console.log(teamData);
//             if (idNumber == data.id){
//                 var name = data.name;
//                // console.log(data.name);
//                // console.log(data.id);
//                 return console.log(name);
//             }
//            })
//          })
//        });
//      }); 
//    });
// });
// }


//getTeamName('93941372-eb4c-4c40-aced-fe3267174393');

// function getTeamInfo(team){
     
    // var foundIt = $.grep(teams, function(element){
        // return element.name === team;
        // })[0];
    // var teamKey = foundIt.ID;
    // var teamInfoURL = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/teams/' + teamKey  + '/profile.json?api_key=' + myAPIKey;
    // console.log(foundIt);
    // console.log(teamKey);
    // console.log(teamInfoURL);
                            
    // $.get(teamInfoURL, function (data){
        // var libraryArray = [];
        // var keys = Object.keys(data);
        // console.log(keys);
        // keys.forEach(function(aKey){
            // var aLibrary = data[aKey];
            // libraryArray.push(aLibrary);
            // console.log(libraryArray);
        // });
        
        // libraryArray.forEach(function (data){
            // var itemsArray = [];
        // });  
        // console.log(libraryArray);
    // });
// }

// getTeamInfo('Braves');

// function getPlayerInfo(team){
    // var foundIt = $.grep(teams, function(element){
        // return element.name === team;
    // })[0];
    // var teamKey = foundIt.ID;
    // var teamInfoURL = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/teams/' + teamKey  + '/profile.json?api_key=' + myAPIKey;
    /*console.log(foundIt);
    console.log(teamKey);
    console.log(teamInfoURL); */
    // var libraryArray = [];
    // var libraryArray2 = [];
    // var itemsArray = [];
    // var teamProfile = localStorage.getItem('teamProfile');
    // teamProfile = JSON.parse(teamProfile);
    // teamProfile.forEach(function(data){
        // var teamName = data['name'];
        // console.log(teamName)
    // })
    // $.get(teamInfoURL, function (data){
        // var keys = Object.keys(data);
        // console.log(keys);
        // keys.forEach(function(aKey){
            // var aLibrary = data[aKey];
            // libraryArray.push(aLibrary);
            // libraryArray2.push(aLibrary);
            // libraryArray.forEach(function (data){
                // var items = Object.values(data);
                // itemsArray.push(items);
            // });
        // });  
        // var items = Object.values(libraryArray[4]);
        
        // console.log(items);
        // console.log(libraryArray);
        
        // $('[data-team-team]').append(libraryArray[0]);
        // $('[data-team-team]').append(items[5]);
        // $('[data-team-team]').append(items[6]);
        // $('[data-team-team]').removeClass("hidden");

        // var playersOnTeam = libraryArray[8];
        // console.log(playersOnTeam)
        // playersOnTeam.forEach(function(player) {
            // var playerInfoArr = []
            
            // var playerName = player.full_name
            // playerInfoArr.push(playerName);
            // var playerJersey = player.jersey_number
            // playerInfoArr.push(playerJersey);
            // var playerBirth = player.birthdate
            // playerInfoArr.push(playerBirth);
            // var playerPosition = player.primary_position
            // playerInfoArr.push(positionName[playerPosition]);

            // var newPlayerInfo = $('<div>');
            // playerInfoArr.forEach(function(blurb){
                // $(newPlayerInfo).append(blurb);
            // })
            // $('[data-team-player]').append(newPlayerInfo);

            
        // })
    // });
// }

// function getPositionInfo(team, bool){
    // var foundIt = $.grep(teams, function(element){
        // return element.name === team;
    // })[0];
    // var teamKey = foundIt.ID;
    // var teamInfoURL = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/teams/' + teamKey  + '/profile.json?api_key=' + myAPIKey;
    /*console.log(foundIt);
    console.log(teamKey);
    console.log(teamInfoURL); */
    // var libraryArray = [];
    // var libraryArray2 = [];
    // var itemsArray = [];
    
    // $.get(teamInfoURL, function (data){
        // var keys = Object.keys(data);
        // console.log(keys);
        // keys.forEach(function(aKey){
            // var aLibrary = data[aKey];
            // libraryArray.push(aLibrary);
            // libraryArray2.push(aLibrary);
            // libraryArray.forEach(function (data){
                // var items = Object.values(data);
                // itemsArray.push(items);
            // });
        // });  
        // var items = Object.values(libraryArray[4]);
        
        // console.log(items);
        // var playersOnTeam = (libraryArray[8]);
        // playersOnTeam.forEach(function(datum){
            // if (datum.position == bool){
                // console.log(datum);
            // }
        // })
// })
// }

//getPlayerInfo('Braves');


// function allTeamArray(data, bool){
//     teamArray = []
//     data.forEach(function(obj){
//         teamArray.push(obj['name']);
//     })
//     teamArray.forEach(function(obj, index){
//         setTimeout(function() {
//         console.log(obj);
        
//         // getPositionInfo(obj, bool);
//         // }, 1000 * index);
        
//     })
    
// })
// }



// function getAllTeamInfo(data){
//     var allTeamIDS = []
//     var teamIDS = Object.values(data);
//     // console.log(teamIDS);
//     teamIDS.forEach(function(thing){
//         var teamID = thing['ID'];
//         // console.log(teamID);
//         allTeamIDS.push(teamID);
//     })
//     // console.log(allTeamIDS);
//     var allTeamInfo = []
//     allTeamIDS.forEach(function(value, index){
//         setTimeout(function() {
//             var teamNameURL = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/teams/' + value + '/profile.json?api_key=' + myAPIKey;
//             $.get(teamNameURL, function(thing){
//                 var playersOnTeam = thing['players']
//             playersOnTeam.forEach(function(loop){
//                 var playerCollection = {}
//                 var playerID = loop['id'];
//                 var playerName = loop['full_name'];
//                 var playerPosition = loop['primary_position'];
//                 // var playerBirth = loop[''];
//                 var playerAge = loop['birthdate'];
//                 var playerStarted = loop['pro_debut'];
//                 playerCollection['name'] = playerName;
//                 playerCollection['ID'] = playerID;
//                 // playerCollection['Birth place'] = playerBirth;
//                 playerCollection['Position'] = playerPosition;
//                 playerCollection['Birthday'] = playerAge;
//                 playerCollection['Debut'] = playerStarted;
//                 allTeamInfo.push(playerCollection);
//             })   
//             console.log(allTeamInfo);
//             localStorage.setItem('allplayer', JSON.stringify(allTeamInfo));
//             })
//         }, 1500 * index)
//     })
// }
// // setTimeout(getAllTeamInfo, 2000, teams);

// var allPlayer = localStorage.getItem('allplayer');
// var allPlayer = JSON.parse(allPlayer);


// function positionChecker(arr, positionPickedShort){
//     arr.forEach(function(val){
//         if (val['Position'] === positionPickedShort){
//             var newDiv = $('<div>');
//             newDiv.append(JSON.stringify(val));
//             console.log(val);
//             console.log(newDiv);
//             $('[data-player-info]').append(newDiv);
//         }
//     })
// }
// =======
// function getLocation(){

//     $.get(dailyScheduleAPI, function(data){
//         var libraryArray = [];
//         var keys = Object.keys(data);
//        // console.log(keys);
//         var locationObject = {};
//         var locationArray = [];
//        keys.forEach(function(aKey){
//            var aLibrary = data[aKey];
//            libraryArray.push(aLibrary);
//             // console.log(libraryArray);
             
//             libraryArray.forEach(function (data){
//                 var itemsArray = [];
//                 var items = Object.values(data);
//               //    console.log(items);
            
//                  items.forEach(function (data){
//                 var scheduleData = Object.values(data);
//                  //   console.log(scheduleData);
         
//                 scheduleData.forEach(function(data) {
//                     var gameData = Object.values(data);
//                        var location = gameData[12];
                       
//                        if (location != null && location['lat'] > 0){   
//                             var latString = location.lat;
//                             var latNumber = parseFloat(latString);
//                             var lngString = location.lng;
//                             var lngNumber = parseFloat(lngString);
//                             var locationObject = {lat: latNumber , lng: lngNumber};                        
//                             locationArray.push(locationObject);
//                         }
//                       }); 
//                  });  
                
//              }); 
           
//          });
//         // console.log(locationArray);
//            initMap(locationArray[0]);      
//      });   
// }

// //getLocation();

