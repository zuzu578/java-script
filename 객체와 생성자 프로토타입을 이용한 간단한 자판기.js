/*var MyMath = {
   PI:Math.PI,
   random:function(){
     return Maht.random();
   },
   floor:function(val){
      return Math.floor(val);
   }
}
alert(MyMath.PI);
alert(MyMath.random());
alert(MyMath.floor());
//객체는 같은 연관된 변수 함수를 객체라는곳에 그루핑해서 이름을 붙인것이다.//

//객체가 없다면//

MyMath_PI = Maht.PI;
function MyMath_random(){
  return Math.random();
}
function MyMath_floor(val){
  return Math.floor(val);
}
*/
//this ==> 자신이 속해있는 객체 자신을 가리킨다.//
/*var kim = {
  name:'kim',
  first:10,
  second:20,
  sum: function(){
    return this.first+this.second;
  }
}
console.log(kim.sum());
*/
var a1 = new Array();
var p1 = new Array();
var firstSet = 0;
var menu = 0;
var choice = 0;
var count = 0;
function Vending(){
 

}
Vending.prototype.vend= function(){
  firstSet = prompt("1.메뉴선택 2.주문조회 3.나가기");
  while(firstSet!=3){
  if(firstSet==1){
    menu = prompt("1.coffee 2.water 3.milk");
    a1.push(menu);
    count = prompt("수량을 입력해주세요.");
    p1.push(count);
    alert("주문이 접수되었습니다.");
}else if(firstSet==2){
  r1.result();
}
firstSet = prompt("1.메뉴선택 2.주문조회 3.나가기");
}
alert("terminated.");
}
Vending.prototype.result = function(){
  alert("주문"+a1+","+p1+"개");
}

Result.prototype = new Vending();
function Result(){
}
var r1 = new Result();
r1.vend();
