// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


// Solution: use two pointers

var threeSum = (nums) => {
  nums = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) {
          j++; // Keep moving left pointer to the right until it lands on the final repeated number.
          console.log(`Moved j pointer to ${nums[j]}!`, 'i:', i, 'j:', j, 'k:', k);
        }
        while (nums[k] === nums[k - 1]) {
          k--; // Keep moving right pointer to the left until it lands on the final repeated number.
          console.log(`Moved k pointer to ${nums[k]}!`, 'i:', i, 'j:', j, 'k:', k);
        }
        // Move both pointers so it's on different values than the previous iteration.
        j++;
        k--;
        console.log(`Moved both pointers! Currently on ${nums[j]} and ${nums[k]}`, 'i:', i, 'j:', j, 'k:', k);
      }
    }
  }
  return result;
}