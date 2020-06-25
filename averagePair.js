// Write a fucntion called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// I: sorted array of numbers
// O: boolean
// C: Time: O(N), Space: O(1)
// E: invalid input

// Solution: use two pointers

function averagePair(integers, target){
  let i = 0;
  let j = integers.length - 1;
  
  while (i < j) {
      let average = (integers[i] + integers[j]) / 2;
      if (average === target) {
          return true;
      } else if (average > target) {
          j--;
      } else {
          i++;
      }
  }
  return false;
}