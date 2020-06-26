// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Method: Sliding window approach.

const maxSubArraySum = (arr) => {
  let windowSum = arr[0];
  let maxSum = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
      // Restart the window at the current value or expand the window to include the current value (whichever is larger)
      // windowSum represents the sum of current sliding window
      windowSum = Math.max(arr[i], windowSum + arr[i]);
      
      // Update and save the maxSum as needed
      maxSum = Math.max(windowSum, maxSum);
  }
  
  return maxSum;
};

// Same problem, but has an additional input num where num is the number of consecutive elements in the array (size of the subarray).
const maxSubArraySum = (arr, num) => {
  let windowSum = 0;
  let maxSum = 0;

  // Set initial windowSum and maxSum to the first 'num' elements of the array
  for (let i = 0; i < num; i++) {
    windowSum += arr[i];
    maxSum += arr[i];
  }

  for (let i = num; i < arr.length; i++) {
    windowSum = arr[i] + windowSum - arr[i - num];
    maxSum = Math.max(windowSum, maxSum);
  }

  return maxSum;
}