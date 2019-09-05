// Using hashing
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let count = {};
  for (let i of s) {
    if (!count[i]) {
      count[i] = 1;
    } else {
      count[i]++;
    }
  }

  for (let i of t) {
    if (!count[i]) {
      return false;
    } else {
      count[i]--;
    }
  }

  return true;
};


// USING SORT (Slower)
var isAnagram = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
};