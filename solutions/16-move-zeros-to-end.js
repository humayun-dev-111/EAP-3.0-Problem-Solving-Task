// Move all zeros to the end of an array
// Given an array, move all zeros to the end while maintaining the order of non-zero elements.
function moveZerosToEnd(arr) {
  let result = [];
  let zeroCount = 0;

  for (let num of arr) {
    if (num === 0) {
      zeroCount++;
    } else {
      result.push(num);
    }
  }

  while (zeroCount > 0) {
    result.push(0);
    zeroCount--;
  }

  return result;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12]));
