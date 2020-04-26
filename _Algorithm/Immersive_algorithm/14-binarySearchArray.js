/*
 * 정렬된 배열이 주어졌을때, 이진 탐색 알고리즘을 이용하여 특정 요소의 인덱스값을 return하는 함수를 작성하세요.
 *
 * 예시 :
 *
 * let index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 *
 * 참고 : https://qph.fs.quoracdn.net/main-qimg-742d049387316193be2d097fe7a499de
 */

const binarySearch = function (array, target) {
  let start = 0;
  let end = array.length;

  // target이 없을 경우

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      end = mid - 1;
    } else if (array[mid] < target) {
      start = mid + 1;
    }
  }
};
