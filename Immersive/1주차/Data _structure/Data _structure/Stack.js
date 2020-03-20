//스택 구현 코드입니다.


// functional 방식 

const Stack = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let count = 0;

  // Implement the methods below
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
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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

if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = {
    Stack,
    stackMethods
  };
}
