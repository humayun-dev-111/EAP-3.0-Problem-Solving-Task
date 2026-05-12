// Implement your own map() function
// Write a custom map() function that works like the built-in array map method.
function myMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}

console.log(myMap([1, 2, 3], function (num) {
  return num * 2;
}));
