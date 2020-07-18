/**
 * 
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.

Example 3:

Input: nums = [1,2,3,1,1,100]
Output: 104
Explanation: Rob house 1 (money = 1), rob house 3 (money = 3) and rob house 6 (money = 100).
             Total amount you can rob = 1 + 3 + 100 = 104.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  let dp = []; // Memo that stores all max values so far.
  dp[0] = 0;
  dp[1] = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]); // Utilizes the previous 2 max values. Continuously adds new max values to the dp memo array with each iteration.
  }
  
  return dp[nums.length];
};