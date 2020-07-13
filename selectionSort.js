// Similar to bubble sort, but instead of first placing larger values into sorted position, it places small values into the sorted position (beginning of array)

// Store first element as the minValue
// Compare the minValue to the next item in the array until you find a smaller value
// If a smaller value is found, set the smaller number (and its index) to be the minimum and continue until the end of the array
// If the minimum is not the value (index) you initially began with, swap the two values

// Summary: For each iteration, find the smallest value and swap with the current index at the end of the interation. Sorts small values first.

let selectionSort = (nums) => {
  let minIndex;
  for (let i = 0; i < nums.length; i++) {
    minIndex = i;
    minValue = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < minValue) {
        minIndex = j;
        minValue = nums[j];
      }
    }
    if (minIndex !== i) {
      let temp = nums[i];
      nums[i] = nums[minIndex];
      nums[minIndex] = temp; 
    }
  }
  return nums;
}