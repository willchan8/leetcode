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
  let head;
  
  if (l1 === null) {
      return l2;
  }
  
  if (l2 === null) {
      return l1;
  }
  
  if (l1.val < l2.val) {
      head = l1;
      head.next = mergeTwoLists(l1.next, l2);
  } else if (l1.val >= l2.val) {
      head = l2;
      head.next = mergeTwoLists(l1, l2.next);
  }
  
  return head;
};