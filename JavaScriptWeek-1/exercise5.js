// 5. Control Flow and Operators: Implement FizzBuzz with a Twist

printFizzBuzzTwist();

function printFizzBuzzTwist() {
  for (let i = 1; i <= 50; i++) {
    let result = "";

    // Check if the number is prime
    if (checkNumberIsPrime(i)) {
      result += "Prime";
    }

    // Check for Fizz, Buzz, or FizzBuzz
    if (i % 3 === 0) {
      result += (result ? " " : "") + "Fizz";
    }
    if (i % 5 === 0) {
      result += (result ? " " : "") + "Buzz";
    }

    // Print the result
    console.log(result || i);
  }
}

// Helper function to check if a number is prime
function checkNumberIsPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
