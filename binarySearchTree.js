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
}