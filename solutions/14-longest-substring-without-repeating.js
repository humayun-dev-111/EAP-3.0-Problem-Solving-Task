// Find the longest substring without repeating characters
// Given a string, find the length of the longest substring that contains no repeated characters.
function longestSubstringLength(text) {
  let seen = {};
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < text.length; end++) {
    let char = text[end];

    if (seen[char] >= start) {
      start = seen[char] + 1;
    }

    seen[char] = end;

    let currentLength = end - start + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }

  return maxLength;
}

console.log(longestSubstringLength("abcabcbb"));
