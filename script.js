const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the players array
const team = players;

// Create a copy of the players array using the spread operator
const team1 = [...players];

// Create a copy of the person object using object destructuring
const cap1 = { ...person };

// Testing: Modify players array and person object to see if copies are affected
players[0] = "Mike";
person.name = "Jane";

console.log("Original players array:", players);
console.log("Reference to players array (team):", team);
console.log("Copy of players array (team1):", team1);
console.log("Original person object:", person);
console.log("Copy of person object (cap1):", cap1);
