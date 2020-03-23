const HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, value) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, value);
};

// 해시함수를 이용해서 인덱스 정한다.
// 인덱스에 맞추어서 버킷에 저장을 해준다.

HashTable.prototype.retrieve = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);

  let temp = this._storage.get(index);
  return temp;
};

// 인덱스 정하고
// get함수를 사용하여 찾는다.

HashTable.prototype.remove = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.set(index, undefined);
};
