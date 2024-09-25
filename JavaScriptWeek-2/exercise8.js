// 8. Rest Operator & Default Parameters

function computeAverage(a, ...rest) {
  //combine the initial two numbers with any additional numbers
  const numbers = [a, ...rest];

  if (numbers.length < 2) {
    return "Not enough numbers";
  }

  // Calculate the sum and average
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;

  return average;
}

console.log(computeAverage(4)); // Expected output: "Not enough numbers"
console.log(computeAverage(4, 8, 12, 16)); // Expected output: 10
