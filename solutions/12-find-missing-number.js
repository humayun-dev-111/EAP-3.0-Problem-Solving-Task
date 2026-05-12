// Find the missing number in an array
// Given an array of numbers from 1 to n with one number missing, find the missing number efficiently.
function findMissingNumber(arr, n) {
  let total = (n * (n + 1)) / 2;
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return total - sum;
}

console.log(findMissingNumber([1, 2, 3, 5], 5));
