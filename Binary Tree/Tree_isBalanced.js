Binarytree.prototype.isBalanced = function() {
  var lh, rh;
  function recurse(bst) {

    if(!bst) {
      return true;
    }
    lh = !!bst.left ?  bst.left.height() : 0;
    rh = !!bst.right ? bst.right.height() : 0;
    console.log(lh, rh);
    if(Math.abs(lh-rh) <= 1 && recurse(bst.left) && recurse(bst.right)){
      return true;
    }
    return false;
  }
  return recurse(this);
}
