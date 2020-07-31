// Write a function that converts a str to an integer without using built in methods like Number or ParseInt

var toNumber = function(str) {
  // Handle Edge Cases
  if (typeof(str) !== 'string' || !str || str.some(char => (char.charCodeAt(0) < 48 || char.charCodeAt(0) > 57))) {
    throw `Input ${str} is not a string.`
  }

  let isNegative = false;
  let result = 0;

  // Check negative
  if (str[0].charCodeAt(0) === 45) {
    isNegative = true;
    str = str.slice(1);
  }
      
  // Iterate and add up result 
  for (let i = 0; i < str.length; i++) {
    let value = (str[i].charCodeAt(0) - 48) * Math.pow(10, str.length - 1);
    if (isNegative) {
      result -= value;
    } else {
      result += value;
    }
  }

  return result;
}