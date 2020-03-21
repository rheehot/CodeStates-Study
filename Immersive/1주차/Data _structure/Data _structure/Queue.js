// 큐 코드 입니다.

// functional 방식

const Queue = function() {
  const someInstance = {};
  let rear = 0;
  let front = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    rear += 1;
    storage[rear] = value;
  };
  someInstance.dequeue = function() {
    if (rear === front) {
      return 'empty';
    }
    front += 1;
    return storage[front];
  };

  someInstance.size = function() {
    return rear - front;
  };

  return someInstance;
};


// functional- shared 방식

const Queue = function() {
  var someInstance = {
    front: 0,
    rear: 0,
    storage: {}
  };
  extend(someInstance, queueMethods);
  return someInstance;
};

const queueMethods = {};

queueMethods.enqueue = function(value) {
  this.rear = this.rear + 1;
  this.storage[this.rear] = value;
};

queueMethods.dequeue = function() {
  if (this.rear === this.front) {
    return "empty";
  }
  this.front = this.front + 1;
  return this.storage[this.front];
};

queueMethods.size = function() {
  return this.rear - this.front;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


// prototypal 방식

const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);
  return queueInstance;
};

const queueMethods = {
  rear: 0,
  front: 0,
  storage: {}
};

queueMethods.enqueue = function(value) {
  this.rear = this.rear + 1;
  this.storage[this.rear] = value;
};

queueMethods.dequeue = function() {
  if (this.front === this.rear) {
    return "empty";
  }
  this.front = this.front + 1;
  return this.storage[this.front];
};

queueMethods.size = function() {
  return this.rear - this.front;
};

