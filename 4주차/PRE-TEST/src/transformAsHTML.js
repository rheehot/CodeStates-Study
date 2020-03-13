/*
"transformAsHTML" 함수를 작성합니다.

사원들의 정보를 HTML 엘리먼트의 형태로 변형할 수 있는 함수 "transformAsHTML" 함수를 작성하세요.
사원들의 정보는 아래와 같은 배열로 주어질 수 있습니다.

[
  { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
  { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
];

위의 배열이 input으로 주어진다면, SpecRunner의 transformAsHTML 결과 창이 다음과 같은 HTML로 렌더링되어야 합니다.
SpecRunner.html 파일을 열어보면, transformAsHTML 결과 창을 어떻게 접근해야 하는지 알 수 있습니다.

<ul id="container">
  <li>
    <a class="name">Joe Blow</a>
    <div class="age">42</div>
  </li>
  <li>
    <a class="name">Mary Jenkins</a>
    <div class="age">36</div>
  </li>
</ul>

* Note:
<a> 태그로 만들어진 사원의 이름을 클릭할 경우, 제공되는 printRole 함수를 실행하여,
해당 사원의 role이 콘솔에 출력되도록 하십시오.

*/

function printRole(user) {
  // Joe Blow를 클릭하면 clerk 이
  // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
  // 이 함수는 수정하지 마십시오.
  console.log(user.role);
}

// 풀이 1
function transformAsHTML(array) {
  
  let target = document.querySelector("#container");
  let li = document.createElement("li");
  let a = document.createElement("a");
  let div = document.createElement("div");

  // class 이름 생성
  a.className = "name"
  div.className = "div"

 // text 넣어주기

 for(let i = 0 ; i < array.length; i++){
   a.textContent = array[i].firstName + " " + array[i].lastName;
   div.textContent = array[i].age
 }

 //생명력 불어 넣기
 target.appendChild(li);
 li.appendChild(a);
 li.appendChild(div);


 // onclick
 let btn  = document.querySelectorAll(".name");

 function click(){
   for(let i = 0 ; i < btn.length; i ++){
     btn[i].onclick = function(){
       for(let j=0; j < array.length; j++){
         let name = array[j].firstName + ' ' + array[j].lastName;
         if(btn[i].textContent === name){
           return printRole(array[i])
         }
       }
     }
   }
 }
 click();
}



// 풀이 2

// function transformAsHTML(array) {

//   let target = document.querySelector("#container");

//     // 배열 순회 
//     array.forEach(el => {
//       let li = document.createElement("li");
//       let a = document.createElement("a");
//       let div = document.createElement("div");

//       a.className = "name";
//       a.textContent = el.firstName + " " + el.lastName;

//       div.className = "age";
//       div.textContent = el.age;

//       target.appendChild(li);
//       li.appendChild(a);
//       li.appendChild(div);
//     });

//       let btn = document.querySelectorAll(".name");

//       // 클릭 함수 
//       function click() {
//         for(let i = 0 ; i < btn.length; i++){
//           btn[i].onclick = function(){
//           for(let j = 0 ; j < array.length; j++){
//             let name = array[j].firstName + ' ' + array[j].lastName;
//             if(btn[i].textContent === name){
//               return printRole(array[j]);
//             }
//           }
//         }
//       }
//     }    
//     click();
// }