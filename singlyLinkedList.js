// Singly Linked List implementation using ES6 Classes
// Great for insertion and deletion since it doesn't involve re-indexing.
// Insertion: O(1)
// Removal: O(1) at the beginning or O(N) towards the end
// Searching: O(N)
// Access: O(N)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add node to tail.
  push(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  // Remove node at tail.
  pop() {
    if (!this.head) {
      return undefined;
    }
    var current = this.head;
    var prev;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    // When current.next is null (i.e. current is the tail)
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // Add node to head.
  unshift(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  // Remove node at head.
  shift() {
    if (!this.head) {
      return undefined;
    }
    var temp = this.head;
    this.head = temp.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  // Return node at a given index.
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    var current = this.head;
    var counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // Set the value at a specific node, given the index and value.
  set(index, value) {
    var node = get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }

  // Insert a node at a specific index.
  insert(index, value) {
    if (index < 0 || index > length) {
      return false;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === length) {
      this.push(value);
      return true;
    }
    var node = new Node(value)
    var prev = this.get(index - 1);
    var next = prev.next;
    prev.next = node;
    node.next = next;

    this.length++
    return true;
  }

  // Remove a node at a specific index.
  remove(index) {
     if (index < 0 || index > length) {
       return undefined;
     }
     if (index === 0) {
       return this.shift();
     }
     if (index === length - 1) {
       return this.pop();
     }
     var prev = this.get(index - 1);
     var current = prev.next;
     prev.next = current.next;
     this.length--;
     return current;
  }

  // Remove linked list in place.
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var prev = null;
    var current = node;
    while(current) {
      var next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  }
}