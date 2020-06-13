/* 
Builds up the sort gradually creating a larger left half which is always sorted

1. First element is "sorted", so start with by picking the second element in the array
2. Compare second element with the one before it and swap if necessary
3. Continue to the next element and if it is larger than smaller than the previous element, iterate through the sorted portion (i.e. left side)
and place the element in the correct place.
4. Repeat until the array is sorted
 */

let insertionSort = (nums) => {
  for (var i = 1; i < nums.length; i++) {
    currentVal = nums[i]; // current value to compare to each of the sorted elements on the left
    for (var j = i - 1; j >= 0; j--) { // while currentVal is less than nums[j]
      if (currentVal < nums[j]) {
        nums[j + 1] = nums[j]; // move nums[j] up by one if the current value left than nums[j]
      } else {
        break // break out of the loop when currentVal is no longer than than nums[j]
      }
    }
    nums[j + 1] = currentVal; // This line "INSERTS" the currentVal (temp) value in the correct spot. 
    // Note: j[i + 1] because j is decremented in the loop before "breaking" out of the loop when currentVal < nums[j] is false. 
    // Note: 'var' in the loop also allows j to be function scoped while 'let' would be block scoped (and result in an error).
  }
  return nums;
}