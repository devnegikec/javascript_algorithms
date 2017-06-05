B.prototype.deepestNode = function() {
  var deepObj = {
    deepNode: -1,
    deepLevel: -1
  }
    function recurse(bst, level, maxLevel, res) {
      if(bst){
        recurse(bst.left, ++level, maxLevel, res);
        console.log(level, maxLevel, res);
        if(level > maxLevel) {
          res = bst.value;
          maxLevel = level;
          if(deepObj.deepLevel < level) {
            deepObj.deepLevel = level-1;
            deepObj.deepNode = res;
          }
        }
        recurse(bst.right, level, maxLevel, res);
      }
    }
    recurse(this, 0, -1, -1);
    return deepObj;
}

var traersalNodes = [];
var visit = function(nodeValue) {
  traersalNodes.push(nodeValue);
}

B.prototype.depthFirsTravere = function(callback, type) {

  function recursePreOrder(bst) {
    callback(bst.value)

    if (bst.left !== undefined) {
      recursePreOrder(bst.left)
    }
    if (bst.right !== undefined) {
      recursePreOrder(bst.right);
    }
  }
  function recurseInOrder(bst) {
    if(bst.left) {
      recurseInOrder(bst.left);
    }
    callback.call(bst, bst.value)
    if (bst.right) {
      recurseInOrder(bst.right);
    }
  }
  function recursePostOrder(bst) {
    if(bst.left) {
      recursePostOrder(bst.left);
    }
    if (bst.right) {
      recursePostOrder(bst.right);
    }
    callback.call(bst, bst.value)
  }
  if(type === 'pre') {
    recursePreOrder(this);
    var result = traersalNodes;
    traersalNodes = [];
    return result;
  } else if( type === 'in') {
    recurseInOrder(this);
    var result = traersalNodes;
    traersalNodes = [];
    return result;
  } else if (type === 'post') {
    recursePostOrder(this);
    var result = traersalNodes;
    traersalNodes = [];
    return result;
  }

}
