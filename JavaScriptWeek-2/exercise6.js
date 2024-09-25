// 6. Map

function groupByAge(arr) {
  // Create a new Map to hold the groups
  const ageMap = new Map();

  // Iterate over the array of objects
  arr.forEach((person) => {
    // Check if the age already exists in the map
    if (!ageMap.has(person.age)) {
      // If not, initialize it with an empty array
      ageMap.set(person.age, []);
    }
    // Push the name into the array corresponding to the age
    ageMap.get(person.age).push(person.name);
  });

  return ageMap;
}

console.log(
  groupByAge([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
  ])
);
// Expected output: Map { 25 => ["Alice", "Charlie"], 30 => ["Bob"] }
