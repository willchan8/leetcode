// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 
var mergeTwoLists = function(l1, l2) {
  let current = new ListNode();
  let head = current; // Set head as a dummy node
  
  while(l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
          current.next = l1; // Append l1 node.
          l1 = l1.next; // Move l1 pointer.
      } else {
          current.next = l2; // Append l2 node.
          l2 = l2.next; // Move l2 pointer.
      }
      current = current.next; // Current pointer always points to newly appended node.
  }
  
  // Append the remaining list to the end of the current list.
  if (l1 !== null) {
      current.next = l1;
  }
  if (l2 !== null) {
      current.next = l2;
  }
  
  return head.next; // The start of the list is the dummy node's next value.
};