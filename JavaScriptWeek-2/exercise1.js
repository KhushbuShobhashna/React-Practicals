//1. Arrays CRUD (Create, Read, Update, Delete)

function manipulateArray(arr) {
  //function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // remove all even numbers
  let filteredArray = arr.filter((num) => num % 2 !== 0);

  // replace prime numbers with -1
  let modifiedArray = filteredArray.map((num) => (isPrime(num) ? -1 : num));

  // add the sum of all remaining numbers to the end of the array
  let sum = modifiedArray.reduce((acc, num) => acc + num, 0);
  modifiedArray.push(sum);

  return modifiedArray;
}

console.log(manipulateArray([2, 3, 4, 5, 6, 7, 8, 9, 10]));
