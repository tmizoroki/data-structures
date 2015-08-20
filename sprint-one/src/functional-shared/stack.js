





var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

 
  var ever ={};
  ever.storage={};
  _.extend(ever, stackMethods);
  return ever;
};

var stackMethods = {

  push: function(value) {
    var keyArr = Object.keys(this.storage);
    var nextKey = keyArr[keyArr.length - 1] + 1;
    this.storage[nextKey] = value;
  },
  pop: function() {

    var keyArr = Object.keys(this.storage);
    //if (keyArr.length !== 0) {
      var lastKey = keyArr[keyArr.length - 1];
      var temp = this.storage[lastKey];
      delete this.storage[lastKey];
      return temp;
    //} 

  },

  size: function() {
    var keyArr = Object.keys(this.storage);
    return keyArr.length;
  }
};





