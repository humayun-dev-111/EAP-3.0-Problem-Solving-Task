// Check if a number is a perfect square without using Math.sqrt()
// Write a function to determine if a number is a perfect square using loops or binary search.
function isPerfectSquare(num) {
  if (num < 0) {
    return false;
  }

  let left = 0;
  let right = num;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === num) {
      return true;
    }

    if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

console.log(isPerfectSquare(25));
