// 9. Try and Catch

function safeDivision(a, b) {
  try {
    // Check if the second argument is zero
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    // Perform the division
    return a / b;
  } catch (error) {
    // Catch the error and return the message
    return error.message;
  }
}

console.log(safeDivision(10, 2)); // Expected output: 5
console.log(safeDivision(10, 0)); // Expected output: "Division by zero is not allowed"
console.log(safeDivision(10, "aa")); //it will return error and catch block was print the error message
