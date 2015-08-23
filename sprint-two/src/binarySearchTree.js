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

BinarySearchTree.prototype.breadthFirstLog=function(){



var row = [];

  var place = function(node, index) {
    if(!Array.isArray(row[index])) {
      row[index] = [];
    }

    row[index].push(node.value);

    if(node.left){
      place(node.left, index + 1);
    }
    if(node.right){
      place(node.right, index + 1);
    }
  };

debugger;
place(this, 0);




  for(var i = 0; i<row.length; i++){
    for(var j = 0; j<row[i].length; j++){
      console.log(row[i][j]);
    }
  }
};

