/*
 * 배열이 주어졌을 때, 이 중 3개의 숫자를 곱하여 나올 수 있는 최대값을 return하는 함수를 작성하세요.
 *
 * 예시:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Advanced : 음수가 포함되었을때, 작동할 수 있도록 작성하세요.
 */

// const largestProductOfThree = function (array) {
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     let compare = array[0];
//     if (compare <= array[i]) {
//       compare = array[i];
//       result.push(compare);
//     }
//   }

//   let arr = result.slice(0, 3);

//   let resultNumber = arr.reduce((acc, val) => {
//     return acc * val;
//   });

//   return resultNumber;
// };

// const largestProductOfThree = function (array) {
//   let resultArr = [];
//   let num1 = Math.max(...array);
//   resultArr.push(num1);

//   array.splice(array.indexOf(num1), 1);

//   let num2 = Math.max(...array);
//   array.splice(array.indexOf(num2), 1);
//   resultArr.push(num2);

//   let num3 = Math.max(...array);

//   array.splice(array.indexOf(num3), 1);
//   resultArr.push(num3);

//   let result = resultArr.reduce(function (acc, val) {
//     return acc * val;
//   });

//   return result;
// };

const largestProductOfThree = function (array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        result.push(array[i] * array[j] * array[k]);
      }
    }
  }
  return Math.max(...result);
};

// 1, 2, 3
// 2, 3, 4
// 3, 4 ,5
