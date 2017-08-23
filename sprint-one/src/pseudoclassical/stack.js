var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  if (this.count < 0) {
    return 0;
  }
  return this.count;
};

Stack.prototype.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function() {
  this.count--;
  return this.storage[this.count + 1];
};