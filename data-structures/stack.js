// http://code.tutsplus.com/articles/data-structures-with-javascript-stack-and-queue--cms-23348

var Stack = function() {
  this._size = 0;
  this._storage = {};
};

Stack.prototype.push = function(data) {
  // increases the size of our storage
  var size = ++this._size;

  // assigns size as a key of storage
  // assigns data as the value of this key
  this._storage[size] = data;
};

Stack.prototype.pop = function() {
  var size = this._size;
  var deletedData;

  if (size) {
    deletedData = this._storage[size];

    delete this._storage[size];

    this._size--;

    return deletedData;
  }
};

var stack = new Stack();

stack.push('hello');
console.log(stack);
stack.push('hi');
console.log(stack);

console.log('popped: ', stack.pop());

console.log(stack);