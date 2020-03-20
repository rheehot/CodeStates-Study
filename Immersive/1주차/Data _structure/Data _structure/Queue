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

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue,
  };
}
