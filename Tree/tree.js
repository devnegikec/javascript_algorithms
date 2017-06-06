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
 this function finds node of a and insert b to its left
 if a already has left it goes to its child
*/
Binarytree.prototype.insertToLeft = function(a, b) {
  var node = Binarytree(b);
  function recurse(bst, a){
    if(bst) {
      if(bst.value === a && bst.left === undefined) {
        bst.left = node;
      }
      recurse(bst.left, a);
    }
  }
  recurse(this, a);
}
/*
 this function finds node of a and insert b to its right
 if a already has left it goes to its child
*/
Binarytree.prototype.insertToRight = function(a, b) {
  var node = Binarytree(b);
  function recurse(bst, a){
    if(bst) {
      if(bst.value === a && bst.right === undefined) {
        bst.right = node;
      }
      recurse(bst.right, a);
    }
  }
  recurse(this, a);
}
