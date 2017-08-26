

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); // constant
  
  if (this._storage[index] === undefined) { //constant
    this._storage[index] = [];
  } 
  
  this._storage[index].push([k, v]);//constant
  
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit); // constant
  
  var val;
  
  _.each(this._storage[index], function(tuple) { //linear
    if (tuple[0] === k) {
      val = tuple[1];
    }
  });
  
  return val;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit); //constant
  var bucket = this._storage[index];
  
  for (var i = 0; i < bucket.length; i++) {  // linear
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);  // linear
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// .insert => O(1)

// .retrieve => O(n)

// .remove => O(n)

