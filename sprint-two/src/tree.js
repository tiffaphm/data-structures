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
  // input: target, value
  // output: true/false
  // constraints: childrenArray.length > 0
  
  // if (children.length > 0)
  // iterate through the children array
    // check for value === target
      // return true
    // else
      // redo the function(children)
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

      // if (child[0].value === target) {
      //   return true;
      // } else {
      //   console.log(child[0].children);
      //   return testChildren(child[0].children);
      // }

/*
 * Complexity: What is the time complexity of the above functions?
 */
