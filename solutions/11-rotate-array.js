// Rotate an array by k positions
// Write a function to rotate an array to the right by k positions without using built-in rotate functions.
function rotateArray(arr, k) {
  k = k % arr.length;

  let endPart = arr.slice(-k);
  let startPart = arr.slice(0, arr.length - k);

  return endPart.concat(startPart);
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
