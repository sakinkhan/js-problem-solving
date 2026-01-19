// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:
// Input: "hello world"
// Output: "Hello World"

const inputStr = "hello world";

const capitalizeFirstLetter = (str) => {
  const words = str.split(" ");

  const capitalizedWords = words.map((word) => {
    if (word.length === 0) return "";
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });

  const joinedWords = capitalizedWords.join(" ");
  return joinedWords;
};

console.log(
  "Capitalized version of the first letter of each word:",
  capitalizeFirstLetter(inputStr),
);
