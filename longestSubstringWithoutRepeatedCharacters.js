var lengthOfLongestSubstring = function(s) {
  // Use sliding window
  let hash = {};
  let left = 0;
  let right = 0;
  let longest = 0;
  
  while (left < s.length && right < s.length) {
      let letter = s[right];
      if (!hash[letter]) {
          hash[letter] = 1;
          right++;
          longest = Math.max(longest, right - left);
      } else {
          hash[s[left]] = 0;
          left++;
      }
  }
  
  return longest;
};