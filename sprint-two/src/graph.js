

// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.vertices.indexOf(node); // linear time
  if (index >= 0) {
    this.vertices.splice(index, 1); // linear
    for (var i = 0; i < this.edges.length; i++) { // linear
      if (_.contains(this.edges[i], node)) { //linear
        this.edges.splice(this.edges[i], 1); // linear
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var bool = false;
  
  for (var i = 0; i < this.edges.length; i++) { // linear
    if (_.contains(this.edges[i], fromNode) && _.contains(this.edges[i], toNode)) { // linear + linear
      bool = true;
    }
  }
  return bool;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) { //linear
    if (_.contains(this.edges[i], fromNode) && _.contains(this.edges[i], toNode)) { // linear + linear
      this.edges.splice(this.edges[i], 1); //linear
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.vertices, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 
 // COMPLEXITIES:
 
 // .addNode => O(1)
 
 // .contains => O(n)
 
 // .removeNode => O(n^2)
 
 // .hasEdge => O(n^2)
 
 // .addEdge => O(1)
 
 // .removeEdge => O(n^2)
 
 // .forEachNode => O(n)
