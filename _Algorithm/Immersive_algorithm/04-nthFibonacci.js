/*
 * 피보나치 수는 첫째 및 둘째 항이 1입니다. 그 뒤의 모든 항은 바로 앞 두 항의 합인 수의 나열입니다.
 *
 * 다음과 같은 규칙을 가집니다.
 *
 *   1 1 2 3 ...
 *
 *
 * 재귀를 이용하여 피보나치 수열의 n번째 항을 return하는 함수를 작성하세요.
 *
 * n이 4로 주어진다면, 작성한 함수는 3을 return해야 하고 5가 주어진다면 5를 return 해야 합니다.
 *
 * Advanced : 재귀를 사용하지 않고 iterative하게 함수를 작성하세요.
 * 참고 : https://techdifferences.com/difference-between-recursion-and-iteration-2.html
 *
 * ex)
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */


// sol1) while 문 사용

const nthFibonacci = function(n) {
  let i = 2;
  let value1 = 1;
  let value2 = 1;
  let result = [];

  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 1;
  }
  while (i < n) {
    let newValue = value1 + value2;

    result.push(newValue);

    value1 = value2;
    value2 = newValue;
    i++;
  }
  return result[result.length - 1];
};

// sol2) for문 사용
const nthFibonacci = function(n) {
  let first = 1;
  let second = 1;
  let result;

  if (n === 0) {
    return 0;
  }
  if (n < 3) {
    return 1;
  }
  for (let i = 2; i < n; i++) {
    result = first + second;
    first = second;
    second = result;
  }
  return result;
};

