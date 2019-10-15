// Using hashing
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
    
  let sCount = {};
  let tCount = {}; 
  
  for (let i of s) {
    if (sCount[i]) {
      sCount[i]++;
    } else {
      sCount[i] = 1;
    }
  }

  for (let i of t) {
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


// USING SORT (Slower)
var isAnagram = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
};