// http://code.tutsplus.com/articles/data-structures-with-javascript-stack-and-queue--cms-23348

var Queue = function() {
  this._oldestIndex = 1;
  this._newestIndex = 1;
  this._storage = {};
};

Queue.prototype.size = function() {
  return this._newestIndex - this._oldestIndex;
};

Queue.prototype.enqueue = function(data) {
  this._storage[this._newestIndex] = data;
  this._newestIndex++;
};

Queue.prototype.dequeue = function() {
  var oldestIndex = this._oldestIndex;
  var newestIndex = this._newestIndex;
  var deletedData;

  if (oldestIndex !== newestIndex) {
    deletedData = this._storage[oldestIndex];

    delete this._storage[oldestIndex];

    this._oldestIndex++;

    return deletedData;
  }
};

var queue = new Queue();

queue.enqueue('hello');
console.log(queue);
queue.enqueue('hi');
console.log(queue);
queue.enqueue('wassup');
console.log(queue);

console.log(queue.size());

console.log('dequeued: ', queue.dequeue());

console.log(queue);

console.log('dequeued: ', queue.dequeue());

console.log(queue);

console.log(queue.size());

module.exports = Queue;