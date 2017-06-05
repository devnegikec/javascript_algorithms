B.prototype.contains = function(value) {
  function recurse(bst) {
    if(bst.value === value) {
      return true;
    } else if(bst.left !== undefined && value < bst.value) {
      recurse(bst.left);
    } else if(bst.right !== undefined && value > bst.value) {
      recurse(bst.right);
    }
  }
  return recurse(this);
}
