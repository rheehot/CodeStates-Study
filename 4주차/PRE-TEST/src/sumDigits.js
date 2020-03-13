/*
"sumDigits" 함수를 작성합니다.

숫자가 주어졌을때, "sumDigits" 함수는 숫자의 각 자리수를 모두 더한 값을 반환합니다.
만약 숫자가 음수라면, 첫번째 자릿수는 음수로 고려되어야 합니다.

let output1 = sumDigits(1148);
console.log(output1); // --> 14

let output2 = sumDigits(-316);
console.log(output2); // --> 4
*/
function sumDigits(num) {
  let result = 0 ;
  let str = num.toString();
  let arr = str.split("");

  if(arr[0] === '-'){
    for(let i = 2 ; i < arr.length; i++){
      result = result + Number(arr[i]); 
    }
    return result - Number(arr[1])
  }

  for(let i = 0 ; i < arr.length; i++){
    result = result + Number(arr[i]);
  }
  return result ;

}

// 1) 숫자를 문자로 
// 2) 첫번째 자리가 음수인 경우 
// 3) 음수가 아닌 경우 


// keep this code for testing
if(typeof window === 'undefined') {
  module.exports = sumDigits;
}
