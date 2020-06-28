// Implement Queue using Linked List
// FIFO: First In First Out
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

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this.size;
  }
  
  dequeue() {
    if (!this.first) {
      return null;
    } else {
      var temp = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return this.first;
    }
  }
}