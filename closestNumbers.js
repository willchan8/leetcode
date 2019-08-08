// Given a list of unsorted integers, find the pair of elements that have the smallest absolute difference between them. If there are multiple pairs, find them all.

function closestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  let minAbsDiff = Math.abs(numbers[1] - numbers[0]);
  let results = numbers[0] + ' ' + numbers[1];
      
  for (let i = 2; i < numbers.length; i++) {
      if (Math.abs(numbers[i] - numbers[i - 1]) < minAbsDiff) {
      minAbsDiff = Math.abs(numbers[i] - numbers[i - 1]);
      results = numbers[i - 1] + ' ' + numbers[i];
      }
      else if (Math.abs(numbers[i] - numbers[i - 1]) === minAbsDiff) {
      results += '\n' + numbers[i - 1] + ' ' + numbers[i];
      }
  }

  return results;
}