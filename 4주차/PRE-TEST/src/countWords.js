/*
"countWords" 함수를 작성합니다.

string이 input으로 주어지면, "countWords" 함수는 주어진 문자열의 각 단어들을 키 값으로 갖고 있는 객체를 리턴합니다.
키 값과 더불어, 각 단어의 빈도수를 알아낸 후 값으로 적용합니다.

Notes:
* 만일 빈 문자열이 주어지면, 빈 객체를 리턴해야 합니다.

let output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/

// 풀이 1 foreach를 사용한 풀이 
function countWords(input) {
 let obj = {}
 let arr = input.split(" ");
 
 if(input.length === 0){
   return {};
 }

  arr.forEach(el => {
    let count = 0 ; 
    for(let i = 0 ; i < arr.length; i++){
      if(el === arr[i]){
        count++
        obj[el] = count ; 
      }
    }
  });

 return obj
}


// 풀이 2 for문을 통한 풀이 
// function countWords(input) {
//   let obj = {};
//   let arr = input.split(" ");
 
//   if(input === ''){
//     return {};
//   }
 
//   for(let i = 0 ; i < arr.length; i++){
//     let count = 0 ;
 
//     for(let j = 0 ; j < arr.length; j++){
//       if(arr[j] === arr[i]){
//         count++
//         obj[arr[i]] = count; 
//       }
//     }
//   }
//   return obj ;
//  }


// keep this code for testing
if(typeof window === 'undefined') {
  module.exports = countWords;
}

// 1. 단어를 쪼갠다.
// 2. 단어가 있는지 확인 한다.
// 단어가 있다면 카운트를 올린다.