// 1. Variable and Constants: Swap Two Variables Without a Temporary Variable

let a = 5;
const b = 10;

// function to the swap the values
function swap(a, b) {
  return [b, a]; // return the swapped values
}

[a, _] = swap(a, b);

console.log("a:", a); // Output: a: 10
console.log("b:", b); // Output: b: 10 (this part doesn't actually reassign b)
