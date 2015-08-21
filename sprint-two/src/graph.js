

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  
  var Node = function(value) {
    this.value = value;
    this.connections = [];
  };
  
  var node = new Node(node);
  this.nodes.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  this.nodes.splice(this.nodes.indexOf(node), 1);
  _.each(this.nodes, function(item) {
    if (_.contains(item.connections, node)) {
      item.connections.splice(item.connections.indexOf(node), 1);
    }
  });
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      if (_.contains(this.nodes[i].connections, toNode)) {
        return true;
      }
    }
  }
  // _.each(this.nodes, function(item) {
  //   if (item.value === fromNode) {
  //     if (_.contains(item.connections, toNode)) {
  //       return true;
  //     }
  //   }
  // });
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  _.each(this.nodes, function(item){
    if (item.value === fromNode){
      item.connections.push(toNode);
    }
  });
  _.each(this.nodes, function(item) {
    if (item.value === toNode) {
      item.connections.push(fromNode);
    }
  });
};
// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){

  _.each(this.nodes, function(item){
    if (item.value === fromNode){
      item.connections.splice(item.connections.indexOf(toNode), 1);
    }
    if (item.value === toNode) {
      item.connections.splice(item.connections.indexOf(fromNode), 1);
    }
  });


};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){

  for (var i = 0; i < this.nodes.length; i++) {
    debugger;
    cb(this.nodes[i].value);
  }



};



