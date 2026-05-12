// Find the majority element in an array
// Given an array, find the element that appears more than n/2 times, if it exists.
function findMajorityElement(arr) {
  let counts = {};

  for (let num of arr) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }

    if (counts[num] > arr.length / 2) {
      return num;
    }
  }

  return "No majority element";
}

console.log(findMajorityElement([2, 2, 1, 2, 3, 2, 2]));
