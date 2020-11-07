/*function a(){
  return "hello world"
}
alert(a());
*/
/*function get(args1,args2){

 return args1 + args2
  
}
alert(get(2,4));*/
/*var grades = {
  'egoing':50,
  'k8805':30,
  'sorialgi':20
}
for(key in grades){
  document.write(key+""+grades[key]+"<br>")
}
*/
/*var vscope ='global'//전역변수//
  function fscope(){
    alert(vscope)
  }
  //함수 안에서는 전역변수를 alert내장함수에 담았으므로//
  //함수를 호출할때 전역변수가 호출된다.//
  fscope();
  */

  /*var vscope = 'global';
function fscope(){
    var vscope = 'local';
    alert('함수안 '+vscope);
}

fscope();
alert('함수밖 '+vscope);
*/
//함수 밖 (전역변수)를 global 이라고 했는데)//
//이 전역변수는 함수 밖과 함수 안에서도 유용한 변수이다//
//따라서 이 전역변수는 어디에서나 유효하기때문에
//함수 안에서 전역변수를 다른값으로 초기화 시켜주면 기존의 전역변수의 값은 사라지고//
//새로운 값이 전역변수에 들어가기때문에
//함수 안에서는 local 이라는 새로운 전역변수의 값이, 함수 밖에서는 local이라는 새로운
//전역변수의 값이 초기화되어서 호출된것이다.//
/*var vscope = 'global';
function fscope(){
    vscope= 'local';
    alert('함수안'+vscope);
}
fscope();
alert('함수밖'+vscope);
*/
/*var i =0;
function a (){
    i = 0;
}
for(var i = 0; i < 5; i++){
    a();
    document.write(i);
}
*/
var i = 5;
 
function a(){
    var i = 10;
    b();
}
 
function b(){
    document.write(i);
}
 
a();