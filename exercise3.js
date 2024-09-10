// 3. Objects: Merge and Modify Object Properties

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 3, c: 4, d: 5 };

const result = mergeObjects(obj1, obj2);
console.log(result); // Output: { a: 1, b: 5, c: 7, d: 5 }

function mergeObjects(obj1, obj2) {
  const merged = {};

  for (let key in obj1) {
    //if the key exists in obj2 then sum the values of obj1 and obj2 otherwise just add value from the obj1
    if (obj2.hasOwnProperty(key)) {
      merged[key] = obj1[key] + obj2[key];
    } else {
      merged[key] = obj1[key];
    }
  }

  // check which keys from obj2 are not added to the merged object, and then add them
  for (let key in obj2) {
    if (!merged.hasOwnProperty(key)) {
      merged[key] = obj2[key];
    }
  }

  return merged;
}
