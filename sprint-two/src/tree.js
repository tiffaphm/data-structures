var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var result = false;

  var testChildren = function(child) {
    if (child.length > 0) {
      for (var i = 0; i < child.length; i++) {
        if (child[i].value === target) {
          result = true;
        } else {
          testChildren(child[i].children);
        }
      }
    }
  };
  
  testChildren(this.children);
  
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

COMPLEXITIES

.addChild => O(1)

.contains => 