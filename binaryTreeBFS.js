/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
 * 
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let result = [];
  let queue = [];
  if (root) {
      queue.push(root);   
  }
  while(queue.length > 0) {
      let level = [];
      let queueLength = queue.length; // Must define the queueLength, else the iteration will not work correctly due to changing queue length
      for (let i = 0; i < queueLength; i++) {
          let current = queue.shift();
          level.push(current.val);
          if (current.left) {
              queue.push(current.left);
          }
          if (current.right) {
              queue.push(current.right);
          }
      }
      result.push(level);
  }
  return result;
};