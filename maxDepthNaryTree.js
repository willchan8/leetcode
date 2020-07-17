// Given a n-ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

// Input: root = [1,null,3,2,4,null,5,6]
// Output: 3

var maxDepth = function(root) {
  let maxDepth = 0;
  function DFS(node, level) {
      if (node === null) {
          return 0;
      }
      maxDepth = Math.max(maxDepth, level);
      let children = node.children;
      for (let i = 0; i < children.length; i++) {
          DFS(children[i], level + 1);
      } 
  }
  
  DFS(root, 1);
  return maxDepth;
};