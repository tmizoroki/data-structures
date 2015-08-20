var Queue = function(){
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
      

  // Implement the methods below

  someInstance.enqueue = function(value){
    if (Object.keys(storage).length === 0) {
      storage[0] = value;
    } else {
      //storage.forEach(function(item, key) {
      for (var key in storage) {
        var numKey = Number(key) + 1;
        storage[numKey] = storage[key];
      }  
      //});
      storage[0] = value;
    }
  };

  someInstance.dequeue = function(){
    var keyArr = Object.keys(storage);
    var lastKey = keyArr[keyArr.length - 1];
    var temp = storage[lastKey];
    delete storage[lastKey];
    return temp;
  };

  someInstance.size = function(){
    var keyArr = Object.keys(storage);
    return keyArr.length;
  };

  return someInstance;
};
