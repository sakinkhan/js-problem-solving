// Problem 2: Count Vowels in a String (Write a function that counts how many vowels (a, e, i, o, u) are in a given string.)

const inputStr = "programming";

const countVowels = (string) => {
  const vowels = "aeiou";
  let count = 0;
  for (let char of string.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

const result = countVowels(inputStr);
console.log("Number of Vowels:", result);
