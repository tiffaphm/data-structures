var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count ++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    count --;
    var firstQueue = storage[1];
    
    for (var i = 1; i <= count; i++) {
      storage[i] = storage[i + 1];
    }
    return firstQueue;
  };

  someInstance.size = function() {
    if (count < 0) {
      return 0;
    }
    return count;
  };

  return someInstance;
};
