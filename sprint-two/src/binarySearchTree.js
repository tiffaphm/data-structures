var BinarySearchTree = function(value) {
  this.left = null;
  this.right = null;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  // INPUT: value
  // OUTPUT: boolean, true false
  var result = false;
  // console.log(this);
  // debugger;
  var checkCurrent = function(node) {
    if (node !== null) {
      if (value === node.value) {
        result = true;
      } else if (value > node.value) {
        checkCurrent(node.right);
      } else if (value < node.value) {
        checkCurrent(node.left);
      } 
    }
  };
  
  checkCurrent(this);

  return result;
};

BinarySearchTree.prototype.depthFirstLog = function() {
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var BST = new BinarySearchTree(10);
// console.log(BST);
// BST.insert(11);
// console.log(BST);
// // BST(10);