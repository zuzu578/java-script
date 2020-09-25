var id ="easy1004"
var pwd="112233"

var id = prompt("아이디를 입력해주세요.")
if(id === "easy1004"){
  var pwd = prompt("비밀번호를 입력해주세요.")
  if(pwd ==="112233"){
    alert("easy1004님"+"반갑습니다")
  }else{
    alert("비밀번호를 확인해주세요.")
  }
}else{
  alert("아이디를 확인해주세요.")
}









/*아이디가 easy1004 pw 112233 라고 가정하에 질의 응답 창을 사용해서 회원의 아이디,패스워드를입력받아서  로그인 처리를 하시오.*/
var id ="easy1004"
var pwd="112233"

var id = prompt("아이디를 입력해주세요.")
if(id === "easy1004"){
  var pwd = prompt("비밀번호를 입력해주세요.")
  if(pwd ==="112233"){
    alert("easy1004님"+"반갑습니다")
  }else{
    alert("비밀번호를 확인해주세요.")
    location.reload();
  }
}else{
  alert("아이디를 확인해주세요.")
  location.reload();
}