// Find the first non-repeating character in a string
// Given a string, return the first character that does not repeat.
function firstNonRepeatingCharacter(text) {
  let counts = {};

  for (let char of text) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }

  for (let char of text) {
    if (counts[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingCharacter("aabbcddee"));
