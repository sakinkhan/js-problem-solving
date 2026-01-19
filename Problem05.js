// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.
// Example:
// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

const removeDuplicate = (array) => {
  let result = [];

  array.forEach((num) => {
    if (!result.includes(num)) {
      result.push(num);
    }
  });
  return result;
};

console.log(
  "After removing all duplicate numbers:",
  removeDuplicate([1, 2, 2, 3, 4, 4]),
);
