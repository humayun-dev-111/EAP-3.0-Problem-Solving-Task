// Find the missing elements in a consecutive sequence
// Given an unsorted array of numbers that should form a consecutive sequence, return all missing numbers.
function findMissingElements(arr) {
  let result = [];
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let set = new Set(arr);

  for (let i = min; i <= max; i++) {
    if (!set.has(i)) {
      result.push(i);
    }
  }

  return result;
}

console.log(findMissingElements([4, 2, 7, 5, 9]));
