/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var map = {
      '}' : '{',
      ']' : '[',
      ')' : '('
    }

    for (var i = 0; i < s.length; i++) {
      var lastChar = stack[stack.length - 1];
      if (stack.length && map[s[i]] === lastChar) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }

    return stack.length === 0;
};