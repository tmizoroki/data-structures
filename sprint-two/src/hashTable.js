var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var that = this;
  var addToBucket = function() {
    var bucket = that._storage.get(i);
    var flag = false;
    _.each(bucket, function(item, index) {
      if (item[0] === k) {
        item[1] = v;
        flag = true;
      }
    });
    if (!flag) {
      bucket.push([k, v]);
    }

    // that._storage.each(function(item, index, storage) {
    //   if (i === index) {
    //     console.log([k, v]);
    //     item.push([k, v]);
    //     console.log(storage);
    //   }
    // });
  };
  
  if (!this._storage.get(i)) {
    var bucket = [];
    this._storage.set(i, bucket);
    addToBucket();
  } else {
    addToBucket();
  }

 
};

HashTable.prototype.retrieve = function(k){
  var result;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  _.each(bucket, function(item) {
    if (item[0] === k) {
      result = item[1];
    }
  });
  // this._storage.each(function(item, index, storage) {
  //   if (item[index][0] === k) {
  //     result = item[index][1];
  //   }
  // });
  // return this._storage.get(i);
  return result;
};




HashTable.prototype.remove = function(k){
  // var that = this;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  _.each(bucket, function(item, index, bucket) {
    if (item[0] === k) {
      console.log(item);
      //bucket.splice(,1);
      bucket[index][1] = null;
    }
  });

  // this._storage.each(function(item, index, storage) {
  //   if (item[index][0] === k) {
  //     item[index] = null;
  //   }
  // });



  //var val = this.retrieve(k);
  //var i = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.set(i, null);
  
  // this._storage.each(function(_,index,storage) {
  //   if (index === i) {
  //     storage.splice(i, 1);
  //   }
  // });
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
