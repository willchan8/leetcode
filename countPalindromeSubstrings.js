/**
 * 
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
 

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 * 
 * @param {string} s
 * @return {number}
 */

// Brute Force: O(n^3), since isPalindrome is O(n) and nested for loop is O(n^2).
var countSubstrings = function(s) {
  function isPalindrome(s) {
      return s === s.split('').reverse().join('');
  }
  
  let count = 0;
  
  for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
          if (isPalindrome(s.substring(i, j + 1))) {
              count++;
          }
      }
  }
  
  return count;
};

// Optimized solution, using helper function containing two pointers. O(n^2) time complexity.

var countSubstrings = function(s) {
  if (s.length === 0) {
    return 0;
  }

  let count = 0;

  // Helper function
  function checkPalindrome(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) { // Check for palindrome string
      count++; // Increment palindrome count
      left--; // Trace string in the left direction (i.e. move left pointer to the left)
      right++; // Trace string in the right direction (i.e. move right pointer to the right)
    }
  }

  for (let i = 0; i < s.length; i++) {
    checkPalindrome(s, i, i); // To check the palindrome of odd length palindromic sub-string
    checkPalindrome(s, i, i + 1); // To check the palindrome of even length palindromic sub-string
  }

  return count;
};