var Tree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent || null;

  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};


  // your code here
  //newTree.children = null;  // fix me


var treeMethods = {};

treeMethods.addChild = function(value){
  //console.log(this);
  this.children.push(Tree(value,this));
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



treeMethods.removeFromParent = function(){
  //this.parent.children.splice(this.children.indexOf(this),1);

  for(var i = 0; i < this.parent.children.length; i++){ 

    if (this.parent.children[i].value === this.value) {
      this.parent.children.splice(i, 1);
    }
  }


  this.parent = null;


};


/*
 * Complexity: What is the time complexity of the above functions?
 */
