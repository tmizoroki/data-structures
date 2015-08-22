var AdvancedSet = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  // if (typeof item === 'string') {
    var flag = true;
    if(typeof item === "object"){
      for(var i = 0; i< this._storage.length;i++){
        if(_.isEqual(this._storage[i], item)){
          flag = false;
        }


      }
      
    }
    else{
      if(this._storage.indexOf(item) !== -1){
        flag = false;
      }
      
    
    }




    if(flag){
      this._storage.push(item);
    }
};


// for(var i=0; i<this._storage; i++){
//   deep(this._storage[i], item);
// }
//     function deep(com,value){
//       if(typeof value === "array"){
//         for(var i = 0; i< value.length; i++){
//           if (Array.isArray(value[i])) {
//             deep(value[i]);
//           }
//         }
//       }
//     }

//     }
//   // }
// };

setPrototype.contains = function(item){
  for (var i = 0; i < this._storage.length; i++) {
    if (_.isEqual(this._storage[i], item)) {
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
