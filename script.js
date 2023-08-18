const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the players array
const team = players;

// Create a copy of the players array
const team1 = players.slice();

// Create a copy of the person object
const cap1 = Object.assign({}, person);

// Testing: Modify players array and person object to see if copies are affected
players[0] = "Mike";
person.name = "Jane";

console.log("Original players array:", players);
console.log("Reference to players array (team):", team);
console.log("Copy of players array (team1):", team1);
console.log("Original person object:", person);
console.log("Copy of person object (cap1):", cap1);
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

// window.players = players;
// window.person = person;
// window.team = team;
// window.team1 = team1;
// window.cap1 = cap1;
