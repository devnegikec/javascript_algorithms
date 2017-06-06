Binarytree.prototype.toAarray = function() {
  var result = [];
  function recurse(bst) {
    if(bst.left) {
      recurse(bst.left);
    }
    result.push(bst.value)
    if (bst.right) {
      recurse(bst.right);
    }
  }
  recurse(this);
  return result;
}
