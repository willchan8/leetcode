// Write a function call minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum if greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

const minSubArrayLen = (nums, sum) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // If current window does not add up to the given sum, then expand the end of the window.
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } 
    
    // If current window adds up to at least the sum, then shrink the start of the window.
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }

    // Current total is less than sum but we (the end side) reached the end of the array.
    else {
      break;
    }
  }

  if (minLen === Infinity) {
    return 0;
  } else {
    return minLen;
  }
}