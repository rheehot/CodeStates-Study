/*
 * 임의의 string이 주어졌을 때, 문자열 내에서 최초로 반복하지 않는 문자를 return하는 함수를 작성하세요.
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

const firstNonRepeatedCharacter = function(string) {
  let arr = string.split("");
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let conut = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        conut++;
      }
    }
    if (conut === 1) {
      result.push(arr[i]);
    }
  }
  if (result === []) {
    return "null";
  }
  return result[0];
};
