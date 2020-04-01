/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var printArray = function(arr) {
  let check = function(arr) {
    let newArr = arr.reduce(function(acc, val) {
      if (Array.isArray(val)) {
        acc = acc.concat(check(val));
      }
      if (!Array.isArray(val)) {
        acc.push(val);
      }
      return acc;
    }, []);
    return newArr;
  };

  let resultArr = check(arr); // join으로 배열을 [12345]로 만들어 준다.
  return console.log(resultArr.join(""));
};
// flatten 문제
//(([1, 2, ,[3, 4], 5]);
// 만약 arr의 값이 배열이면 concat
// 만약 arr의 값이 배열이 아니면 push
// check함수를 써서 확인 배열인지 아닌지

// check 함수를 만들고 나중에 console.log로 확인

module.exports = printArray;
