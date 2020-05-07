/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function () {
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function (key, value /*...*/) {
    // TODO: implement `insert()`

    // 해쉬 함수로 랜덤 인덱스 생성

    const index = getIndexBelowMaxForKey(key, storageLimit);

    // 버킷 생성
    var bucket = storage[index];

    // 저장소가 비었을 경우
    // 빈 버킷 생성
    if (!bucket) {
      bucket = [];
      storage[index] = bucket;
    }

    // 버킷의 value가 맞는 지 확인 하기 위한 변수 선언
    var check = false;

    // 버킷을 순회
    for (let i = 0; i < bucket.length; i++) {
      // 비교할 임시 버킷 생성
      let temp = bucket[i];
      // 키 값으로 원하는 버킷을 찾음
      if (temp[0] === key) {
        temp[1] = value;
        check = true;
      }
    }
    // 버킷에 키와 값이 없을 경우 삽입
    if (!check) {
      bucket.push([key, value]);
    }
  };

  // 키로 원하는 값을 찾는 함수

  result.retrieve = function (key /*...*/) {
    const index = getIndexBelowMaxForKey(key, storageLimit);
    let bucket = storage[index];

    if (!bucket) {
      return null;
    }

    for (let i = 0; i < bucket.length; i++) {
      let temp = bucket[i];
      if (temp[0] === key) {
        return temp[1];
      }
    }

    return null;
    // TODO: implement `retrieve()`
  };

  // key로 버킷 값 삭제
  result.remove = function (key /*...*/) {
    // TODO: implement `remove()`

    const index = getIndexBelowMaxForKey(key, storageLimit);

    let bucket = storage[index];

    if (!bucket) {
      return null;
    }

    for (let i = 0; i < bucket.length; i++) {
      let temp = bucket[i];

      if (temp[0] === key) {
        bucket.splice(i, 1);
      }

      return temp[1];
    }
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function (str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
