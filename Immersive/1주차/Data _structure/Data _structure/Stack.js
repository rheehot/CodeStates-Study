//스택 구현 코드입니다.


// functional 방식 

const Stack = function() {
  const someInstance = {};
  
  var storage = {};
  let count = 0;

  someInstance.push = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.pop = function() {
    if (count === 0) {
      return "error";
    }
    count--;
    return storage[count + 1];
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = {
    Stack
  };
}



// functional- shared 방식
const Stack = function() {
 
  var someInstance = {
    top: 0,
    stroage: {}
  };
  extend(someInstance, stackMethods);
  return someInstance;
};

const stackMethods = {};

stackMethods.push = function(value) {
  this.top++;
  this.stroage[this.top] = value;
};

stackMethods.pop = function() {
  if (this.top === 0) {
    return "error";
  }
  this.top--;
  return this.stroage[this.top + 1];
};

stackMethods.size = function() {
  return this.top;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


// prototypal 방식 

const Stack = function() {

  var stackInstance = Object.create(stackMethods);
  return stackInstance;
};

const stackMethods = {
  storage: {},
  top: 0
};

stackMethods.push = function(value) {
  this.top++;
  this.storage[this.top] = value;
};
stackMethods.pop = function() {
  if (this.top === 0) {
    return "empty";
  }
  this.top--;
  return this.storage[this.top + 1];
};
stackMethods.size = function() {
  return this.top;
};

// psedoclassical 방식

const Stack = function() {
  this.top = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.top++;
  this.storage[this.top] = value;
};

Stack.prototype.pop = function() {
  if (this.top === 0) {
    return "empty";
  }
  this.top--;
  return this.storage[this.top + 1];
};

Stack.prototype.size = function() {
  return this.top;
};

