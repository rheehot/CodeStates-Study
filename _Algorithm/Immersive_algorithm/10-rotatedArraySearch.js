/*
 * 정렬되어 있는 배열 중 일부를 왼쪽 혹은 오른쪽으로 회전시킨 배열이 주어졌을때,
 * 어떻게 특정 element를 효율적으로 찾을 수 있을까요?
 *
 * 작성한 함수는 target의 index값을 return하고, 없으면 null을 return해야 합니다.
 *
 * 예시 :
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * 시간 복잡도가 O(log(array.length))이 되도록 도전해 보세요!
 */
/*  풀이 1(시간복잡도 999999) 시간 복잡도 x
const rotatedArraySearch = function (rotated, target) {
  if (rotated.indexOf(target) === -1) {
    return null;
  }

  let count = -1;
  if (rotated.indexOf(target) !== -1) {
    for (let i = 0; i < rotated.length - 1; i++) {
      if (rotated[i] !== target) {
        count = count + 1;
      }
    }
  }
  return count;
}
*/

// 풀이 2(시간 복잡도 4999999) 시간 복잡도 패스 x
// const rotatedArraySearch = function (rotated, target) {
//   if (rotated.indexOf(target) === -1) {
//     return null;
//   }
//   if (rotated.length % 2 === 0) {
//     let length = rotated.length;
//     let halfLength = rotated.length / 2;
//     let newArr = rotated.slice(0, halfLength);
//     let nextArr = rotated.slice(halfLength, length);

//     if (newArr.indexOf(target) !== -1) {
//       for (let i = 0; i < newArr.length - 1; i++) {
//         if (newArr[i] !== target) {
//           count = count + 1;
//         }
//       }
//       return count;
//     } else {
//       for (let i = 0; i < nextArr.length - 1; i++) {
//         if (nextArr[i] !== target) {
//           count = count + 1;
//         }
//       }
//     }
//   }
//   if (rotated.length % 2 === 1) {
//     let length = rotated.length;
//     let halfLength = (rotated.length + 1) / 2;
//     let newArr = rotated.slice(0, halfLength);
//     let nextArr = rotated.slice(halfLength - 1, length);

//     if (newArr.indexOf(target) !== -1) {
//       for (let i = 0; i < newArr.length - 1; i++) {
//         if (newArr[i] !== target) {
//           count = count + 1;
//         }
//       }
//       return count;
//     } else {
//       for (let i = 0; i < nextArr.length - 1; i++) {
//         if (nextArr[i] !== target) {
//           count = count + 1;
//         }
//       }
//       return count + halfLength - 1;
//     }
//   }
// };

// 풀이 3 어이가 없네... All pass

// function rotatedArraySearch(rotated, target) {
//   for (var i = 0; i < rotated.length; i++) {
//     if (rotated[i] === target) {
//       return i;
//     }
//   }
//   return null;
// }

// 풀이 4 All pass

function rotatedArraySearch(rotated, target) {
  if (rotated.indexOf(target) === -1) {
    return null;
  } else {
    return rotated.indexOf(target);
  }
}
