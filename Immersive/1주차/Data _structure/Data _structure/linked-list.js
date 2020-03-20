const LinkedList = function() {
  const list = {};
  // 가장 먼저 들어온 Node;
  list.head = null;
  // 마지막에 들어온 Node;
  list.tail = null;
  
  list.addToTail = function(value) {
    var newNode = new Node(value); //새로운 노드 생성 
    if (list.tail) {
      list.tail.next = newNode; 
      list.tail = newNode;
    } else {
      list.head = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (!list.head) {
      return 'empty list';
    }
    var beforeHeadValue = list.head.value;
    list.head = list.head.next;
    return beforeHeadValue;
  };

  list.contains = function(target) {
    if (!list.head) {
      return false;
    }
    var temp = list.head;
    while (temp.value !== target) {
      temp = temp.next;
      if (!temp) {
        return false;
      }
    }
    return true;
  };

  return list;
};

// 노드 생성 

const Node = function(value) {
  this.value = value;
  this.next = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
module.exports = LinkedList;
