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
  }




  // if (value > this.value) {
  //   if (this.right === null) {
  //     this.right = new BinarySearchTree(value);
  //   } else {
  //     this.right.insert(value);
  //   }
  // } else if (value < this.value) {
  //   if (this.left === null) {
  //     this.left = new BinarySearchTree(value);
  //   } else {
  //     this.left.insert(value);
  //   }
  // }
};

BinarySearchTree.prototype.contains = function(value) {
  // INPUT: value
  // OUTPUT: boolean, true false
  var result = false;

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

BinarySearchTree.prototype.depthFirstLog = function(iterator) {
  //INPUT: iterator, function
  //OUTPUT: calls iterator for each item in BST

  var lookThrough = function(BST) {
    BST.value = iterator(BST.value);

    if (BST.right !== null) {
      lookThrough(BST.right);
    }

    if (BST.left !== null) {
      lookThrough(BST.left);
    }
  };

  lookThrough(this);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// COMPLEXITIES

// .insert => O(log(n))

// .contains => O(log(n))

// .depthFirstLog => O(n)