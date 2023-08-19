const team = {
    _players : 
    [
  {firstName: 'Mel', lastName:'Medson',  age:24} , {firstName: 'Jeremy', lastName:'Jackson',  age:25},{firstName: 'Tom', lastName:'Hanndorf',  age:23}
      ],
    _games : 
    [
  {opponent:"Crows", teamPoints:20, opponentPoints:25}, {opponent:"Seaguls", teamPoints:15, opponentPoints:5},
  {opponent:"Magpies", teamPoints:30, opponentPoints:30}
   ],
  get players(){return this._players;},
  
  get games(){return this._games;},
  
  addPlayer(newFirstName, newLastName, newAge) {const player= {firstName:newFirstName, 
  lastName:newLastName, 
  age:newAge} 
  ;
  this._players.push(player);
  },
  
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
  const game = {
    opponent:newOpponent, 
    teamPoints:newTeamPoints, 
    opponentPoints:newOpponentPoints}
    ;
  this._games.push(game);
  }
  };
  
  team.addPlayer('John', 'Doe', 28);
  team.addGame("Titans",100, 98)
  
   // Add a new player using the addPlayer method
  team.addPlayer('Bugs', 'Bunny', 76);
  // Display the updated players array
  console.log(team.players);
  console.log(team.games);
  
   
  