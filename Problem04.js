// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:
// Input: [5, 1, 9, 3]
// Output: 9

const findMaxNum = (array) => {
  let max = array[0];
  array.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });
  return max;
};

console.log("The largest number is:", findMaxNum([5, 1, 9, 3]));
