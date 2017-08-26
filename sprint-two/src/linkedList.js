var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
    
    if (list.tail) {
      list.tail.next = newTail;
    } else {
      list.head = newTail;
    }
    
    list.tail = newTail;
  };

  list.removeHead = function() {
    
    if (list.head === null) {
      return null;
    }
    
    var currentHead = list.head.value;
    
    list.head = list.head.next;
    return currentHead;
  };

  list.contains = function(target) {
    var currPos = list.head;
    
    while (currPos) {
      if (currPos.value === target) {
        return true;
      } else {
        currPos = currPos.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// complexity of var LinkedList
//   O(1)

// complexity of list.addToTail
//   O(1)

// complexity of list.removeHead
//   O(1)

// complexity of list.contains
//   O(n)

// complexity of Node()
//   O(1)