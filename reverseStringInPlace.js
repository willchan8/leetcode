// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Method 1: Swap with temp variable
var reverseString = function(s) {
  var temp;
  for (var i = 0; i < (Math.floor(s.length / 2)); i++) {
      temp = s[i];
      s[i] = s[s.length - 1 - i];
      s[s.length - 1 - i] = temp;
  }
};

// Method 2: Destructuring assignment
var reverseString = function(s) {
  for (var i = 0; i < (Math.floor(s.length / 2)); i++) {
      [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
};