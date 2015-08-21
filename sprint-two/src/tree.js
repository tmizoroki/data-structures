var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};


  // your code here
  //newTree.children = null;  // fix me


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }


var bool = false;

  var deepSearch = function(node) {
    if(node.value === target){
      bool = true;
    }

    if(node.children.length > 0){
      
      _.each(node.children, function(item, i) {
        if (item.value === target) {
          bool = true;
        }
      });

    }
   
  };
  
  for(var i =0; i<this.children.length; i++) {
    deepSearch(this.children[i]);
  }

  return bool;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
