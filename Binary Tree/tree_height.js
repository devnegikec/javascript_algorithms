function maxValue(a, b) {
  return a > b ? a :b;
}
Binarytree.prototype.height = function() {
  function recurse(bst) {
    if(!bst) {
      return 0;
    }
    return 1 + maxValue(recurse(bst.left), recurse(bst.right));
  }
  return (recurse(this) -1);
}
