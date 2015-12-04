// http://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392

var Node = function(data) {
  this.data = data;
  this.next = null;
};

var SinglyList = function() {
  this._length = 0;
  this.head = null;
};

SinglyList.prototype.add = function(value) {
  var node = new Node(value);
  var currentNode = this.head;

  // 1st use-case: an empty list
  if (!currentNode) {
    this.head = node;
    this._length++;

    return node;
  }

  // 2nd use-case: a non-empty list
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;

  this._length++;

  return node;
};

SinglyList.prototype.searchNodeAt = function(position) {
  var currentNode = this.head;
  var length = this._length;
  var count = 1;

  // 1st use-case: an invalid position
  if (length === 0 || position < 1 || position > length) {
    throw new Error('Non-existent node in this list.');
  }

  // 2nd use-case: a valid position
  while (count < position) {
    currentNode = currentNode.next;

    count++;
  }

  return currentNode;
};

SinglyList.prototype.remove = function(position) {
  var currentNode = this.head;
  var length = this._length;
  var count = 1;
  var beforeNodeToDelete = null;
  var nodeToDelete = null;
  var deletedNode = null;

  // 1st use-case: an invalid position
  if (length === 0 || position < 1 || position > length) {
    throw new Error('Non-existent node in this list.');
  }

  // 2nd use-case: the first node is removed
  if (position === 1) {
    this.head = currentNode.next;

    deletedNode = currentNode;
    currentNode = null;

    this._length--;

    return deletedNode;
  }

  // 3rd use-case: any other node is removed
  while (count < position) {
    beforeNodeToDelete = currentNode;
    nodeToDelete = currentNode.next;
    currentNode = currentNode.next;

    count++;
  }

  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;

  this._length--;

  return deletedNode;
};

var list = new SinglyList();

list.add(7);
console.log(list);
list.add(5);
console.log(list);
list.add(9);
console.log(list);

console.log(list.searchNodeAt(2));

console.log('removed: ', list.remove(3));
console.log(list);
list.remove(1);
console.log(list);