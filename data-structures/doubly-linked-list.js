// http://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392

var Node = function(value) {
  this.data = value;
  this.previous = null;
  this.next = null;
};

var DoublyList = function() {
  this._length = 0;
  this.head = null;
  this.tail = null;
};

DoublyList.prototype.add = function(value) {
  var node = new Node(value);

  if (this._length) {
    this.tail.next = node;

    node.previous = this.tail;

    this.tail = node;
  }
  else {
    this.head = node;
    this.tail = node;
  }

  this._length++;

  return node;
};

DoublyList.prototype.searchNodeAt = function(position) {
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

DoublyList.prototype.remove = function(position) {
  var currentNode = this.head;
  var length = this._length;
  var count = 1;
  var beforeNodeToDelete = null;
  var afterNodeToDelete = null;
  var nodeToDelete = null;
  var deletedNode = null;

  // 1st use-case: an invalid position
  if (length === 0 || position < 1 || position > length) {
    throw new Error('Non-existent node in this list.');
  }

  // 2nd use-case: the first node is removed
  if (position === 1) {
    this.head = currentNode.next;

    nodeToDelete = currentNode;

    // 2nd use-case: there is a second node
    if (this.head) {
      this.head.previous = null;
    // 2nd use-case: there is no second node
    }
    else {
      this.tail = null;
    }

    deletedNode = nodeToDelete;
  }
  // 3rd use-case: the last node is removed
  else if (position === this._length) {
    nodeToDelete = this.tail;

    this.tail = this.tail.previous;
    this.tail.next = null;

    deletedNode = nodeToDelete;
  }
  // 4th use-case: a middle node is removed
  else {
    while (count < position) {
      currentNode = currentNode.next;

      count++;
    }

    beforeNodeToDelete = currentNode.previous;
    nodeToDelete = currentNode;
    afterNodeToDelete = currentNode.next;

    beforeNodeToDelete.next = afterNodeToDelete;
    afterNodeToDelete.previous = beforeNodeToDelete;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
  }

  this._length--;

  return deletedNode;
};

var list = new DoublyList();

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