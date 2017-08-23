var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};
  
  _.extend(someInstance, queueMethods);
  
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.count;
};

queueMethods.enqueue = function() {
  this.count++;
};

queueMethods.dequeue = function() {
  this.count--;
};