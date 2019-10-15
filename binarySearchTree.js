var searchBST = function(root, val) {
  if (root === null) {
      return null;
  }
  
  if (val === root.val) {
      return root;
  }
  
  if (val < root.val) {
      return searchBST(root.left, val);
  }
  
  if (val > root.val) {
      return searchBST(root.right, val);
  }
};