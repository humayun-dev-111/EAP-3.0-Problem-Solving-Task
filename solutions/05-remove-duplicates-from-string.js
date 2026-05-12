// Remove duplicates from a string
// Write a function to remove duplicate characters from a string while maintaining order.
function removeDuplicates(text) {
  let result = "";

  for (let char of text) {
    if (!result.includes(char)) {
      result += char;
    }
  }

  return result;
}

console.log(removeDuplicates("programming"));
