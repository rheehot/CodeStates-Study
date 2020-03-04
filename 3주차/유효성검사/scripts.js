/// 특정값은 반드시 입력
/// 비밀번호 특정자리 수 이상 특수문자 요구
/// 비밀번호와 비밀번호 확인란 같아야한다 . 
//  신용카드 넘버가 유효한지 

function check(){
  let result = document.getElementById("firstName");
    if(result.value.length <= 6 ){
    window.alert("확인 되었습니다.");
    } else if(result.value.length > 6) {
      window.alert("다시 입력하세요.");
    }
  }

  document.querySelector("#confirm").onclick = check;

function passwordCheck2(){
  let result = document.getElementById("identity");

  if(result.value.length <= 6 ){
  window.alert("다시 입력 하세요.");
  } else if(result.value.length > 6) {
    window.alert("확인 되었습니다.");
  }
}

document.querySelector("#Lastconfirm").onclick = passwordCheck2;

function buttonCheck(){
    window.alert("뒤로 돌아갑니다.");
}

document.querySelector("#back").onclick = buttonCheck ;

// 피니쉬 박스 아이디 완성
function finishCheck(){
  window.alert("아이디가 만들어졌습니다 로그인 하세요.");
}

document.querySelector("#finish").onclick = finishCheck;

// 주민등록번호 두개 확인 
function identityCheck () {
  let result1 = document.getElementById("identity");
  let result2 = document.getElementById("identity-second");
  
  if(result1.value === result2.value) {
    window.alert("확인 되었습니다.")
  }else {
    window.alert("다시 입력하세요");
  }
}

document.querySelector("#identityConfirm").onclick = identityCheck ; 

// <span class="contents-input">
//                         Last name<input type="text" id = "LastName"> 
//                     </span>
//                     <span class="contents-input">
//                         phone number<input type="text" id = "phoneNumber"> 
//                     </span>
//                     <span class="contents-input">
//                         confirm phone number<input type="text" id = "confirm" > 
//                     </span>
//                     <span class="contents-input">
//                         Alternative phone number<input type="text" id="Alternative"> 
//                     </span>
//                     <span class="contents-input">
//                         Email address<input type="text" id="email address"> 
//                     </span>
