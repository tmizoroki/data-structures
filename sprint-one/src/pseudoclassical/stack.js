var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.size = function() {
  var keyArr = Object.keys(this.storage);
    return keyArr.length;
};

Stack.prototype.push = function(value) {
  var keyArr = Object.keys(this.storage);
    var nextKey = keyArr[keyArr.length - 1] + 1;
    this.storage[nextKey] = value;
};
Stack.prototype.pop = function() {
  var keyArr = Object.keys(this.storage);
    var lastKey = keyArr[keyArr.length - 1];
    var temp = this.storage[lastKey];
    delete this.storage[lastKey];
    return temp;

};