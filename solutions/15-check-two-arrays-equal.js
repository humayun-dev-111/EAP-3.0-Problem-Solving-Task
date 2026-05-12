// Check if two arrays are equal
// Write a function to check whether two arrays contain the same elements, regardless of order.
function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let sorted1 = [...arr1].sort();
  let sorted2 = [...arr2].sort();

  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] !== sorted2[i]) {
      return false;
    }
  }

  return true;
}

console.log(areArraysEqual([3, 1, 2], [2, 3, 1]));
