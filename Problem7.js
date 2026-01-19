// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

const inputArray = [1, 2, 3, 4, 5, 6];

const evenNumbersArray = (arr) => {
  let result = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }
  return result;
};

console.log("All even numbers:", evenNumbersArray(inputArray));
