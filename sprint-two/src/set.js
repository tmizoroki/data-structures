var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (typeof item === 'string') {
    if (this._storage.indexOf(item) === -1) {
      this._storage.push(item);
    }
  }
};

setPrototype.contains = function(item){
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  this._storage.splice(this._storage.indexOf(item), 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */




var flag = false;
 function deepEqual(array1, array2){
  for(var i = 0; array1.length; i++){
    if (array1[i] === array2[i] && typeof array1[i] !== 'object') {
      flag true;
    } else if(Array.isArray(array1[i])){
      deepEqual(array1[i],array2[i]);
    }
  }
 }
