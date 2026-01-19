// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

const checkPalindrome = (str) => {
  const forwardStr = str;
  const backwardStr = str.split("").reverse().join("");

  if (forwardStr === backwardStr) {
    return true;
  }
  return false;
};

console.log("The string is a palindrome:", checkPalindrome("hello"));
