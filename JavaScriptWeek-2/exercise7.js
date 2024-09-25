// 7. Hoisting

function hoistTest() {
  console.log(x);
  var x = 10;
  let y = 20;
  console.log(y);
}
hoistTest();

// Output:
// The first console log prints undefined because x is not initialized yet.
// The second console log prints 20 because y was declared before the print statement.
