// Example use :
//
// sport.playerNames();
// returns ["Lebron James plays basketball", "Kevin Durant plays basketball"]
var sport = {
  name: "basketball",
  players: [
    { name: "LeBron James", age: 31 },
    { name: "Kevin Durant", age: 28 }
  ],
  playerNames: function() {
    let result = [];
    result.push(this.players[0].name + " plays " + this.name);
    result.push(this.players[1].name + " plays " + this.name);
    return result;
  }
};

module.exports = sport;
