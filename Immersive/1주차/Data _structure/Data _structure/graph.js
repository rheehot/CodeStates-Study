// Instantiate a new graph
const Graph = function() {
  this.storage = {};
  this.edge = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
// node를 지우면서 연결되어 있는 edge도 지워야한다.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
  var toNode = this.edge[node];
  this.removeEdge(node, toNode);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edge[fromNode] === toNode;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edge[fromNode] = toNode;
  this.edge[toNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edge[fromNode];
  delete this.edge[toNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(callback) {
  for (let key in this.storage) {
    callback(Number(key));
  }
};

//객체 배열로 바꾸고
// 오름차순으로 sort를 써서 정렬
// 콜백으로 넣어주면
