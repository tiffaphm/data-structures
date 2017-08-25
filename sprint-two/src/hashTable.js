

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // INPUT: key, value pair
  // OUTPUT: none
  // constraints: none
  
  // if the hashtable at the index is null 
    //create an empty bucket to hold key value pairs
    
  // push [k, v] to the array bucket at the hashtable index
  if (this._storage[index] === undefined) {
    this._storage[index] = [];
  } 
  
  this._storage[index].push([k, v]);
  
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  // INPUT: key
  // OUTPUT: value
  
  // for each tuple in the bucket at the index,
    // see if the tuple[0] === key
      // if it does, return the value
  var val;
  
  _.each(this._storage[index], function(tuple) {
    if (tuple[0] === k) {
      val = tuple[1];
    }
  });
  
  return val;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


