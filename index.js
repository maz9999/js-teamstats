const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
          },
          {
            firstName: 'Tom',
            lastName: 'Smith',
            age: 15
          },
          {
            firstName: 'Susan',
            lastName: 'Boyle',
            age: 17
          }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
          },
          {
            opponent: 'Seals',
            teamPoints: 31,
            opponentPoints: 22
          },
          {
            opponent: 'Lions',
            teamPoints: 55,
            opponentPoints: 39
          }

    ],

    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age,
        };
        this.players.push(player);
    },

    addGame(oppName, points, oppPoints) {
        const game = {
            opponent: oppName,
            points: points,
            opponentPoints: oppPoints,
        };
        this.games.push(game);
    }
    
    }

team.addGame('Sea Lions', 100, 40);
team.addGame('Wolves', 56, 90);
team.addGame('Tigers', 30, 47);

console.log(team.games);


team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);


