// Reverse words in a sentence
// Write a function to reverse the order of words in a string while keeping the words themselves intact.
function reverseWords(text) {
  return text.trim().split(" ").reverse().join(" ");
}

console.log(reverseWords("Hello World"));
