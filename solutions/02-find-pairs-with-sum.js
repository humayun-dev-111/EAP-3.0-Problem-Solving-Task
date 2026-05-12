// Find all pairs with a given sum in an array
// Given an array and a target sum, return all pairs of numbers whose sum equals the target.
function findPairs(arr, target) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
}

console.log(findPairs([1, 2, 3, 4, 5, 6], 7));
