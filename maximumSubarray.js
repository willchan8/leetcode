var maxSubArray = function(nums) {
  var maxUpToHere = nums[0];
  var maxSoFar = nums[0];
  
  for (var i = 1; i < nums.length; i++) {
      // Is the best up to the current index the: 
      // 1. current value or 2. an extension of the previous max subarray 
      maxUpToHere = Math.max(nums[i], maxUpToHere + nums[i]);
      
      // Update return value as needed
      maxSoFar = Math.max(maxUpToHere, maxSoFar);
  }
  
  return maxSoFar;
};