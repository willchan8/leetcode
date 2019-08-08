// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

var dailyTemperatures = function(T) {
  let results = [];
  
  for (let i = 0; i < T.length; i++) {
      let days = 0;
      if (i === T.length - 1) {
          results.push(0);
      }
      for (let j = i + 1; j < T.length; j++) {
          days++;
          if (T[j] > T[i]) {
              results.push(days);
              break;
          }
          if (j === T.length - 1) {
              results.push(0);
          }
      }
  }
  
  return results;
};