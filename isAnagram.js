// Using hashing/frequency counter
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
    
  let sCount = {};
  let tCount = {}; 
  
  for (let i = 0; i < s.length; i++) {
    if (sCount[i]) {
      sCount[i]++;
    } else {
      sCount[i] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (tCount[i]) {
      tCount[i]++;
    } else {
      tCount[i] = 1;
    }
  }
    
  for (let char in sCount) {
    if (sCount[char] !== tCount[char]) {
      return false;
    }
  }

  return true;
};

// Alternate method
var isAnagram = function(s, t) {
  let counter = {};
  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    // If letter exists, increment by 1, otherwise set to 1.
    if (counter[s[i]]) {
      counter[s[i]]++
    } else {
      counter[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    // Can't find letter, or letter count is 0, then not an anagram.
    if (!counter[t[i]]) {
      return false;
    } else {
      counter[t[i]]--;
    }
  }

  return true;
};


// USING SORT (Slower)
var isAnagram = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
};