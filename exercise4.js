// 4. Arrays and Functions: Create a Function to Find the Second Largest Number

const numbers = [3, 5, 7, 2, 8, 7];
const result = findSecondLargest(numbers);
console.log(result);

function findSecondLargest(arr) {
  let largestNumber = null;
  let secondLargestNumber = null;

  for (const num of arr) {
    // update Largest Number and second Largest Number
    if (largestNumber == null || num > largestNumber) {
      // Update second largest to be the old largest
      secondLargestNumber = largestNumber;
      largestNumber = num;
    } else if (
      num !== largestNumber &&
      (secondLargestNumber == null || num > secondLargestNumber)
    ) {
      secondLargestNumber = num;
    }
  }
  return secondLargestNumber;
}
