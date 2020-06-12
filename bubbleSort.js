/* BubbleSort: Sorting algorithm where the largest values bubble up to the top */


/* Brute force method. Note that the inner loop contains: j < nums.length - i, since the largest value is at the end of the array with each pass through */
let bubbleSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
}

/* Optimized solution. If there were no swaps on a passthrough, array is already sorted. Break out of outer loop and return sorted array. */
let bubbleSortOptimized = (nums) => {
  let swapped;
  for (let i = 0; i < nums.length; i++) {
    swapped = false;
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break
    }
  }
  return nums;
}