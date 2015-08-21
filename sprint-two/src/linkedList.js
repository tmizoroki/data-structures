




var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var counter = 0;
  var nodes = [];

  list.addToTail = function(value){
    if(list.head === null){
      counter++;
      var node = Node(value);
      nodes.push(node);
      list.tail = node;
      list.head = node;
      console.log('call');
    } else {
    counter++;
    var node = Node(value);
    nodes.push(node);
    list.tail.next = node;
    list.tail = list.tail.next;
      }    
  };


  list.removeHead = function(){
    if(counter === 1){
      var temp = list.head.value;
      nodes.splice(nodes.indexOf(list.head),1);
      delete list.head;
      counter--;
      return temp;
    }
    else{

      var newNext = list.head.next;
      var temp = list.head.value;
      nodes.splice(nodes.indexOf(list.head),1);
      delete list.head;
      counter--;
      list.head = newNext;
      return temp;

    }


  };


  list.contains = function(target){
    for(var i = 0; i < nodes.length; i++) {
      if(nodes[i].value === target){
        return true;
      }
    }
    return false;
  };

  return list;

};
    
var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};







/*
 * Complexity: What is the time complexity of the above functions?
 */
