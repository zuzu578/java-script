
//전역변수 ===> null;
var funcThis = null; 
 
function Func(){
  //이 맥락에서의 funcThis 는 전역 변수 null;을 가리키고
  //this 는 window 전역객체를 가리키므로
  //funcThis에는 window 전역객체 가 저장되게된다.//
    funcThis = this;
}
var o1 = Func();
//일반 메소드 o1에서 funcThis는 window === window이므로
//window 가 출력된다./
if(funcThis === window){
    document.write('window <br />');
}
 
var o2 = new Func();
//하지만 생성자 안o2 에서의 funcThis는 o2 생성자 (객체)자기 자신을 가리키므로 , o2가 된다.//
if(funcThis === o2){
    document.write('o2 <br />');
}
// 이렇듯 this 는 맥락에따라 가리키는(객체) 가 달라지게 된다//