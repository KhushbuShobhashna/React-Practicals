// 4. Spread Operators

function deepMergeArrays(arr1, arr2) {
  const mergedMap = new Map();

  //function to add objects to the map
  function addToMap(arr) {
    arr.forEach((obj) => {
      if (mergedMap.has(obj.id)) {
        //merge the existing object with the new one using the spread operator
        mergedMap.set(obj.id, { ...mergedMap.get(obj.id), ...obj });
      } else {
        //tf the object with the id doesn't exist yet, add it to the map
        mergedMap.set(obj.id, obj);
      }
    });
  }

  addToMap(arr1);
  addToMap(arr2);
  return Array.from(mergedMap.values());
}

const array1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const array2 = [
  { id: 1, age: 25 },
  { id: 3, name: "Charlie" },
];
console.log(deepMergeArrays(array1, array2));
