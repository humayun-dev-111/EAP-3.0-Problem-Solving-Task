
// Check if an array is a palindrome
// Write a function to determine whether an array reads the same backward as forward.
function isArrayPalindrome(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isArrayPalindrome([1, 2, 3, 2, 1]));
