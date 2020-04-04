// 삽입 정렬 알고리즘

function insertionSort(array) {
  let length = array.length;
  let j;
  let temp;
  // 첫번째 요소가 정렬 되어 있다고 가정 했기 때문에 i는 1번째부터 시작 
  for (let i = 1; i < length; i++) {
    j = i;
    temp = array[i];
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
  return array;
}
