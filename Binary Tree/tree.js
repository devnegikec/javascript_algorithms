/*
 * Binarytree is a Class which takes root node value and creates Root Node
 */
var Binarytree = function(value) {
    var instance = Object.create(Binarytree.prototype);
    instance.value = value;
    instance.left = undefined;
    instance.right = undefined;
    return instance;
}
/*
 * insert function
 */
Binarytree.prototype.insert = function(value) {
  var node = new Binarytree(value);
  function recurse(bst) {
    if(bst.value > value && bst.left === undefined) {
      bst.left = node;
    } else if(bst.value > value) {
      recurse(bst.left);
    } else if(bst.value < value && bst.right === undefined) {
      bst.right = node;
    } else if(bst.value < value) {
      recurse(bst.right);
    }
  }
  recurse(this);
}
