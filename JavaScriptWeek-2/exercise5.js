// 5. Set

function intersectionOfSets(arr1, arr2) {
  //convert the first array to a Set for efficient lookup
  const set1 = new Set(arr1);

  //use filter to find common elements in the second array
  return arr2.filter((num) => set1.has(num));
}

console.log(intersectionOfSets([1, 2, 3, 4], [3, 4, 5, 6]));
