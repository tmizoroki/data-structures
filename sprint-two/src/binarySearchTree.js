var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTree.prototype);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};


BinarySearchTree.prototype.insert = function(value){
  
  if (value < this.value) {
    if (!this.left) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(value){
  if (this.value === value) {
    return true;
  } else if (this.value < value && this.right) {
    return this.right.contains(value);
  } else if (this.value > value && this.left) {
    return this.left.contains(value);
  }
  return false;
}


BinarySearchTree.prototype.depthFirstLog = function(callback){

if(this.value){
  callback(this.value);
}

if (this.right){
  this.right.depthFirstLog(callback);
}

if (this.left){
  this.left.depthFirstLog(callback);
}


};

 




