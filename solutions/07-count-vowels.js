// Count the number of vowels in a string
// Write a function to count all vowels (a, e, i, o, u) in a given string.
function countVowels(text) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of text) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World"));
