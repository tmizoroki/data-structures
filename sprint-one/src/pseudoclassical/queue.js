var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage={};
};

Queue.prototype.enqueue = function(value) {
  if (Object.keys(this.storage).length === 0) {
      this.storage[0] = value;
    } else {
      for (var key in this.storage) {
        var numKey = Number(key) + 1;
        this.storage[numKey] = this.storage[key];
      }  
      
      this.storage[0] = value;
    }

};

Queue.prototype.dequeue = function(){
   var keyArr = Object.keys(this.storage);
    var lastKey = keyArr[keyArr.length - 1];
    var temp = this.storage[lastKey];
    delete this.storage[lastKey];
    return temp;
};

Queue.prototype.size = function(){
  var keyArr = Object.keys(this.storage);
    return keyArr.length;
};


