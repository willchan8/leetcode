// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Solution: Use a hash to store (value: index). If the difference between the target and the current value (nums[i]) is in the hash, return the indices.
var twoSum = function(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
      let second = target - nums[i];
      if (second in map) {
          return [map[second], i];
      }
      map[nums[i]] = i;
  }
  
  return null;
};

// Alternate solution: Use two pointers (only works on sorted array).

var twoSum = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum === target) {
          return [left, right];
      } else if (sum > target) {
          right--;
      } else {
          left++;
      }
  }
  return null;
};