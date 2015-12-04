// http://www.mojavelinux.com/articles/javascript_hashes.html

var HashTable = function(obj) {
  this.length = 0;
  this.items = {};

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      this.items[prop] = obj[prop];
      this.length++;
    }
  }
};

HashTable.prototype.setItem = function(key, value) {
  var previous = undefined;

  if (this.hasItem(key)) {
    previous = this.items[key];
  }
  else {
    this.length++;
  }

  this.items[key] = value;

  return previous;
};

HashTable.prototype.getItem = function(key) {
  return this.hasItem(key) ? this.items[key] : undefined;
};

HashTable.prototype.hasItem = function(key) {
  return this.items.hasOwnProperty(key);
};

HashTable.prototype.removeItem = function(key) {
  if (this.hasItem(key)) {
    previous = this.items[key];

    this.length--;

    delete this.items[key];

    return previous;
  }
  else {
    return undefined;
  }
};

HashTable.prototype.keys = function() {
  var keys = [];

  for (var key in this.items) {
    if (this.hasItem(key)) {
      keys.push(key);
    }
  }

  return keys;
};

HashTable.prototype.values = function() {
  var values = [];

  for (var key in this.items) {
    if (this.hasItem(key)) {
      values.push(this.items[key]);
    }
  }

  return values;
};

HashTable.prototype.each = function(callback) {
  for (var key in this.items) {
    if (this.hasItem(key)) {
      callback(key, this.items[key]);
    }
  }
};

HashTable.prototype.clear = function() {
  this.items = {}
  this.length = 0;
};

var hash = new HashTable({one: 1, two: 2, three: 3, "i'm no 4": 4});

console.log('original length: ', hash.length);
console.log('value of key "one": ', hash.getItem('one'));
console.log('has key "foo"? ', hash.hasItem('foo'));
console.log('previous value of key "foo": ', hash.setItem('foo', 'bar'));
console.log('length after setItem: ', hash.length);
console.log('value of key "foo": ', hash.getItem('foo'));
console.log('value of key "i\'m no 4": ', hash.getItem("i'm no 4"));
hash.clear();
console.log('length after clear: ', hash.length);