// Insert: O (log(n))
// Search: O (log(n))


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      var current = this.root;
      while (current) {
        if (value === current.value) {
          return undefined;
        }
        if (value > current.value) {
          if (!current.right) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  find(value) {
    if (!this.root) {
      return;
    }
    var current = this.root;
    while (current !== null) {
      if (value === current.value) {
        return true;
      }
      if (value > current.value) {
        current = current.right;
      } 
      if (value < current.value) {
        current = current.left;
      }
    }
    return false;
  }

  BFS() {
    var current = this.root;
    var data = [];
    var queue = [];

    queue.push(current);
    while(queue.length) {
      current = queue.shift(); // removes the first node in queue and sets as current
      data.push(current);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return data;
  }
}