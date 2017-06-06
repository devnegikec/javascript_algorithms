/*
Make suer input array is sorted
Get the middle of array and make it Root
Recursively do same for left half and right half
*/
function sortedArrayToBST(arr, start, end) {
  if(start >end)
    return null;
  var mid = parseInt((start + end)/2);

  var root = Binarytree(arr[mid]);

  root.left = sortedArrayToBST(arr, start, mid-1);
  root.right = sortedArrayToBST(arr, mid+1, end);
  return root;
}



// TODO Diagonal Traversal of Binary Tree
// http://www.geeksforgeeks.org/diagonal-traversal-of-binary-tree/

// TODO Print root to leaf paths with or without using recursion
// http://www.geeksforgeeks.org/print-root-leaf-path-without-using-recursion/

// TODO Non-recursive program to delete an entire binary tree
// http://www.geeksforgeeks.org/non-recursive-program-to-delete-an-entire-binary-tree/

// TODO Density of Binary Tree in One Traversal
// http://www.geeksforgeeks.org/density-of-binary-tree-in-one-traversal/


// TODO Number of ways to traverse an N-ary tree
// http://www.geeksforgeeks.org/number-of-ways-to-traverse-an-n-ary-tree/
