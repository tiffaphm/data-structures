var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0;
  someInstance.storage = {};
  
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  if (this.count < 0) {
    return 0;
  }
  return this.count;
};

queueMethods.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

queueMethods.dequeue = function() {
  this.count--;
  var dequeueKey = this.storage[1];
  
  for (var i = 1; i <= this.count; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  return dequeueKey;
};