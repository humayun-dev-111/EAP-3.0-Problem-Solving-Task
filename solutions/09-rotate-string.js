// Rotate a string by k positions
// Write a function to rotate a string to the right by k positions.
function rotateString(text, k) {
  k = k % text.length;

  let endPart = text.slice(-k);
  let startPart = text.slice(0, text.length - k);

  return endPart + startPart;
}

console.log(rotateString("hello", 2));
