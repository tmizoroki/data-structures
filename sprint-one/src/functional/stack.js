var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
  var keyArr = Object.keys(storage);
  var nextKey = keyArr.length === 0 ? 0 : keyArr[keyArr.length - 1] + 1;
  storage[nextKey] = value;
  };

  someInstance.pop = function(){
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
