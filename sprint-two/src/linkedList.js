var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail) {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    } else {
      list.tail = Node(value);
      list.head = list.tail;
    }
  };

  list.removeHead = function() {
    var currentHead = list.head.value;
    list.head = list.head.next;
    return currentHead;
  };

  list.contains = function(target) {
    var currPos = list.head;
    while (currPos !== null) {
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
