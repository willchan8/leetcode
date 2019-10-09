// I: var array = [1, 2, 3, 4, 2, 5]
// O: 2
// C: O(n)
// E: Assume only one result

var mostFreqElementInArray = function(array) {
  var map = {};
  var maxElement = array[0];
  var maxCount = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] in map) {
      map[array[i]]++
    } else {
      map[array[i]] = 1;
    }

    if (map[array[i]] > maxCount) {
      maxElement = array[i];
      maxCount = map[array[i]];
    }
  }

  return maxElement;
}