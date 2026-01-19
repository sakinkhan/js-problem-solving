// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:
// Input: 5
// Output: 120

const input = 5;
const calculateFactorial = (num) => {
  if (num < 0) {
    return "Factorial not defined for negative numbers";
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
};

console.log("Factorial of the given number is:", calculateFactorial(input));
