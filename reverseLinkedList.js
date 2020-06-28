var reverseList = function(head) {
  // Set a temp 'prev' variable to null initially
  var prev = null;
  var current = head;
  
  while (current) {
      // Set a temp 'next' variable to store the current node's next value
      var next = current.next;
      // Set the 'next' property of the current node to the 'prev' value
      current.next = prev;
      // Shift 'prev' to 'current' and 'current' to 'next' for the next round of iteration
      prev = current;
      current = next;
  }
  
  return prev;
};


// DESTRUCTURING METHOD

var reverseList = function(head) {
  var prev = null
  var current = head;

  while (current) {
    [current.next, current, prev] = [prev, current.next, current]
  }
  
  return prev ;
};