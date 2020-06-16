var lengthOfLongestSubstring = function(s) {
  // Use hash and sliding window method
  let hash = {};
  let left = 0;
  let right = 0;
  let maxLength = 0;
  
  while (left < s.length && right < s.length) {
      let letter = s[right];
      if (!hash[letter]) {
          hash[letter] = 1;
          right++;
          maxLength = Math.max(maxLength, right - left);
      } else {
          hash[s[left]] = 0;
          left++;
      }
  }
  
  return maxLength;
};

// Alternative solution
/* 
'abcbacd'
   ^
   When loop gets to s[3] (where s[3] = 'b'), the 'start' window would shift to s['b'] + 1 to where this 'c' is.
   The hash then gets updated: 
   hash = {'a' = 0, 'b' = 1, 'c' = 2} ---> hash = {'a' = 0, 'b' = 3, 'c' = 2}
*/


var findLongestSubstring = function(str) {
  let hash = {};
  let maxLength = 0;
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    if (str[i] in hash && start <= hash[str[i]]) {
      // start is the index of the left side of the window. See above for visual explanation
      start = hash[str[i]] + 1;
    } else {
      maxLength = Math.max(maxLength, i - start + 1);
    }
    // save last seen index of each letter in the hash
    hash[str[i]] = i;
  }
  return maxLength;
}