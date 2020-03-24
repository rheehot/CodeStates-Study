
const BinarySearchTree = function(value) {
  const newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  extend(BinarySearchTreeMethod, newTree);
  return newTree;
};

const BinarySearchTreeMethod = {};

BinarySearchTreeMethod.insert = function(value) {
  let check = function(curr) {
    if (value > curr.value) {
      if (curr.right) {
        return check(curr.right);
      }
      curr.right = new BinarySearchTree(value);
      return value;
    }

    if (value < curr.value) {
      if (curr.left) {
        return check(curr.left);
      }
      curr.left = new BinarySearchTree(value);
      return value;
    }
  };
  return check(this);
};

// 인풋 벨류와 트리의 벨류와 비교
// 인풋 벨류가 더 크다면 -> 오른쪽 탐색 (재귀,while)
// 오른쪽 값이 없다면 바로 삽입
// 오른쪽 값이 있다면 다시 재귀

// 인풋 벨류가 더 작다면 -> 왼쪽으로 탐색

BinarySearchTreeMethod.contains = function(value) {
  let check = function(curr) {
    if (value === curr.value) {
      return true;
    }
    if (value > curr.value) {
      if (curr.right) {
        return check(curr.right);
      }
      return false;
    }

    if (value < curr.value) {
      if (curr.left) {
        return check(curr.left);
      }
      return false;
    }
  };
  return check(this);
};

// value가 같으면 리턴
// 인풋 value와 트리 벨류 비교 인풋 벨류가

BinarySearchTreeMethod.depthFirstLog = function(cb) {
  let check = function(curr) {
    cb(curr.value);

    if (curr.left) {
      check(curr.left);
    }

    if (curr.right) {
      check(curr.right);
    }
  };
  check(this);
};

// 전위탐색
// 노드의 유무
// 재귀 함수를 생성
// 현재값을 result삽입

var extend = function(from, to) {
  for (let key in from) {
    to[key] = from[key];
  }
};
