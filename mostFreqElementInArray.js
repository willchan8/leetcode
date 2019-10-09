// I: var array = [1, 2, 3, 4, 2, 5]
// O: 2
// C: O(n)
// E: Assume only one result

var mostFreqElementInArray = function(array) {
  var count = {};
  var maxElement = array[0];
  var maxCount = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] in count) {
      count[array[i]]++
    } else {
      count[array[i]] = 1;
    }

    if (count[array[i]] > maxCount) {
      maxElement = array[i];
      maxCount = count[array[i]];
    }
  }

  return maxElement;
}