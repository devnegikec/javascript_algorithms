Binarytree.prototype.pathToNode = function() {
  function recurse(bst, path, pLength){
    if(!bst)
      return;
    path[pLength] = bst.value;
    pLength++;
    // to print for a spacific node just add a paramere value
    if(!bst.left && !bst.right) {
      // write this function to print array, because path array function may have
      // some extra values
      console.log(path, pLength);
    } else {
      recurse(bst.left, path, pLength);
      recurse(bst.right, path, pLength);
    }
  }
  recurse(this, [], 0);
}
