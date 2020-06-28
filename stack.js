// Implement Stack using Linked List
// LIFO: Last value in is always the first one out.
// Insertion: O(1)
// Removal: O(1)
// Searching: O(N)
// Access: O(N)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var node = new Node(val)
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      var temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    } else {
      var temp = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.val;
    }
  }
}