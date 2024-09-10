// 2. Primitive Types and Dynamic Typing: Detect Data Types in an Array

const listOfitems = [1, "hello", true, 42, "world", false];
const result = countDataTypes(listOfitems);
console.log(result);

function countDataTypes(listOfitems) {
  // store the count values of each type
  const typeCounts = {};

  for (let item of listOfitems) {
    let type = typeof item;

    // if the type already exists in the object then increse count value by 1 otherwise it to 1
    typeCounts[type] = (typeCounts[type] || 0) + 1;
  }

  return typeCounts;
}
