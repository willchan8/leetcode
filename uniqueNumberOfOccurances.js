// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// Use hashing
var uniqueOccurrences = function(arr) {
  let count = {};
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
      if (count[arr[i]]) {
          count[arr[i]]++
      } else {
          count[arr[i]] = 1;
      }
  }
  
  let countArray = Object.values(count);
  for (let i = 0; i < countArray.length; i++) {
      if (seen[countArray[i]]) {
          return false;
      } else {
          seen[countArray[i]] = true;
      }
  }
  
  return true;
};


// Use a Set (only stores unique values)
var uniqueOccurrences = function(arr) {
  let count = {};

  for (let i = 0; i < arr.length; i++) {
      if (count[arr[i]]) {
          count[arr[i]]++
      } else {
          count[arr[i]] = 1;
      }
  }
  
  // Check if unique chars has a 1:1 with unique counts.
  return Object.keys(count).length === new Set(Object.values(count)).size;
};