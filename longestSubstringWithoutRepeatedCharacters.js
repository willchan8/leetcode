var lengthOfLongestSubstring = function(s) {
  // Use hash and sliding window method
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

// Alternative solution
var findLongestSubstring = function(str) {
  let seen = {};
  let longest = 0;
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}