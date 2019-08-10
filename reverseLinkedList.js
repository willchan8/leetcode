var reverseList = function(head) {
  // Set a temp 'prev' variable to store null initially
  let prev = null;
  
  while (head) {
      // Set a temp 'next' variable to store the current node's next value
      let next = head.next;
      // Set the 'next' property of the current node to the 'prev' value
      head.next = prev;
      // Shift 'prev' to 'head' and 'head' to 'next' for the next round of iteration
      prev = head;
      head = next;
  }
  
  return prev;
};


// DESTRUCTURING METHOD

var reverseList = function(head) {
  var prev = null

  while (head) {
    [head.next, head, prev] = [prev, head.next, head]
  }
  
  return prev ;
};