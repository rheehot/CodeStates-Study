/*
 * 두 개의 문자열을 매개변수로 받아 공통으로 가지고 있는 문자를 순서대로 return하는 함수를 작성하세요. (공백, 중복 제외)
 * 예시 : commonCharacters('acexivou', 'aegihobu')
 * 결과 : 'aeiou'
 *
 * Advanced : 두 개 이상의 문자열을 받을 수 있도록 기능을 확장하세요.
 */

const commonCharacters = function (string1, string2) {
  let arr1 = string1.split("");
  let arr2 = string2.split("");
  let result = [];

  if (arr1 === [] || arr2 === []) {
    return undefined;
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  return result.join("");
};
