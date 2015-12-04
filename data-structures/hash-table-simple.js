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

var hash = new HashTable({one: 1, two: 2, three: 3});
console.log('hash: ', hash);
console.log('length: ', hash.length);
console.log('items: ', hash.items);