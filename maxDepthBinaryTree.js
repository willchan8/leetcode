/**
 * Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Good video explanation: https://www.youtube.com/watch?v=YT1994beXn0

// Using DFS
var maxDepth = function(root) {
    if (root === null) {
      return 0;
    }

    let left = maxDepth(root.left); 
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};

// Using alternative DFS method
var maxDepth = function(root) {
  let maxDepth = 0;

  function DFS(node, level) {
    if (root === null) {
      return;
    }
    if (level > maxDepth) { // Can also use maxDepth = Math.max(maxDepth, level)
      maxDepth = level;
    }
    DFS(node.left, level + 1);
    DFS(node.right, level + 1)
  }
};