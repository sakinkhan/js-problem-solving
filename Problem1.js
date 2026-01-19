// Problem 1: Write a function that takes a string and returns it reversed.
const inputString = "hello";

const reversedString = (string) => {
  return string.split("").reverse().join("");
};

const result = reversedString(inputString);
console.log("Reversed String:", result);
