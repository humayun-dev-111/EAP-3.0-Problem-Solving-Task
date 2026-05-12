// Find the longest increasing subsequence
// Given an array of numbers, find the length of the longest strictly increasing subsequence.
function longestIncreasingSubsequenceLength(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let dp = new Array(arr.length).fill(1);
  let maxLength = 1;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
      }
    }

    if (dp[i] > maxLength) {
      maxLength = dp[i];
    }
  }

  return maxLength;
}

console.log(longestIncreasingSubsequenceLength([10, 9, 2, 5, 3, 7, 101, 18]));
