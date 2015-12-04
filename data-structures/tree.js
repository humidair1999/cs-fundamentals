// http://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393

var Queue = require('./queue');

// helper methods

var findIndex = function(arr, data) {
  var index;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].data === data) {
      index = i;
    }
  }

  return index;
};

var Node = function(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
};

var Tree = function(data) {
  var node = new Node(data);

  this._root = node;
};

Tree.prototype.traverseDF = function(callback) {
  // this is a recursive and immediately-invoking function
  (function recurse(currentNode) {
    // step 2
    for (var i = 0, length = currentNode.children.length; i < length; i++) {
      // step 3
      recurse(currentNode.children[i]);
    }

    // step 4
    callback(currentNode);

    // step 1
  })(this._root);
};

Tree.prototype.traverseBF = function(callback) {
  var queue = new Queue();

  queue.enqueue(this._root);

  currentTree = queue.dequeue();

  while(currentTree) {
    for (var i = 0, length = currentTree.children.length; i < length; i++) {
      queue.enqueue(currentTree.children[i]);
    }

    callback(currentTree);

    currentTree = queue.dequeue();
  }
};

Tree.prototype.contains = function(callback, traversal) {
  traversal.call(this, callback);
};

Tree.prototype.add = function(data, toData, traversal) {
  var child = new Node(data);
  var parent = null;

  var callback = function(node) {
    if (node.data === toData) {
      parent = node;
    }
  };

  this.contains(callback, traversal);

  if (parent) {
    parent.children.push(child);

    child.parent = parent;
  }
  else {
    throw new Error('Cannot add node to a non-existent parent.');
  }
};

Tree.prototype.remove = function(data, fromData, traversal) {
  var tree = this;
  var parent = null;
  var childToRemove = null;
  var index;

  var callback = function(node) {
    if (node.data === fromData) {
      parent = node;
    }
  };

  this.contains(callback, traversal);

  if (parent) {
    index = findIndex(parent.children, data);

    if (index === undefined) {
      throw new Error('Node to remove does not exist.');
    }
    else {
      childToRemove = parent.children.splice(index, 1);
    }
  }
  else {
    throw new Error('Parent does not exist.');
  }

  return childToRemove;
};

var tree = new Tree(1);

console.log(tree);

tree.add(2, 1, tree.traverseDF);

console.log(tree);
console.log(tree._root.children);

tree.add(3, 1, tree.traverseBF);

console.log(tree);
console.log(tree._root.children);

tree.remove(2, 1, tree.traverseDF);

console.log(tree);
console.log(tree._root.children);

tree.remove(3, 1, tree.traverseBF);

console.log(tree);
console.log(tree._root.children);

tree.contains(function(partialTree) {
  console.log(partialTree.data === 2);
}, tree.traverseBF);