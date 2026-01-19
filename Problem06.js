// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

// Example:
// Input: [1, 2, 3, 4]
// Output: 10

const inputArray = [1, 2, 3, 4];

const sumOfNums = (arr) => {
  let result = 0;
  for (let num of arr) {
    result = result + num;
  }
  return result;
};

console.log("Sum of all numbers in the array:", sumOfNums(inputArray));
