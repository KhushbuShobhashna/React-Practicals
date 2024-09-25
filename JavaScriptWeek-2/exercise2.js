// 2. Sorting / Joining / Iteration

function customSortAndJoin(arr) {
  //sort the array by age in descending order
  arr.sort((a, b) => b.age - a.age);

  //extract the name properties and join them into a string
  return arr.map((person) => person.name).join(", ");
}

console.log(
  customSortAndJoin([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
  ])
);
