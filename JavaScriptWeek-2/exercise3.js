// 3. Filter / Map / Reduce

function processData(arr) {
  //filter out strings with fewer than 5 characters
  let filtered = arr.filter((str) => str.length >= 5);
  console.log("List of filtered elements:", filtered);

  //map the remaining strings to their lengths
  let lengths = filtered.map((str) => str.length);
  console.log("List of lengths for filtered elements:", lengths);

  //reduce the lengths to calculate the total sum
  let totalLength = lengths.reduce((sum, length) => sum + length, 0);

  return totalLength;
}

console.log(processData(["apple", "banana", "cat", "elephant", "dog"]));
