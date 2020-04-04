// 선택 정렬 알고리즘 


function selection_sort(array) {
  let length = array.length;
  let minIdx;

  for (let i = 0; i < length - 1; i++) {
    let minIdx = i;
    for (let j = i; j < length; j++) {
      if (array[minIdx] > array[j]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      swap(array, minIdx, i);
    }
  }
  return array;
}

function swap(array, minIdx, index) {
  let temp = array[minIdx];

  array[minIdx] = array[index];
  array[index] = temp;
}
