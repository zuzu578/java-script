/*function Person(name,first,second,third){
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}
Person.prototype.sum = function(){
  return this.first+this.second;
}
//자식과 부모를 연결하기 //

PersonPlus.prototype = new Person();

function PersonPlus(name,first,second,third){
  Person.call(this,name,first,second);
  this.third = third;
}
PersonPlus.prototype.avg = function(){
  return(this.first+this.second+this.third)/3;
}
var kim = new PersonPlus("kim",10,20,30);
console.log(kim.sum());
console.log(kim.avg());
*/
function Calculator(x,y){
  this.x= x;
  this.y = y;
}
Calculator.prototype.sum = function(){
  return this.x+this.y;
}
Calculator.prototype.sub = function(){
  return this.x - this.y;
}
//자식과 부모를 프로토타입으로 이어준다 //
// 상속 준비를 한다 // 
// 연결을 한다.//
Result.prototype = new Calculator();

//궁극적으로...//
//1) Calculator ==>기능은 덧셈과 뺄셈 두개의 기능//
//2) Result==>기능은 평균 기능//
// 상속을 받았기 때문에 Result 에서 부모의 모든 기능을 이용할수 있게 되었다.//
function Result(x,y){
  //.call ==> 부모의 초기화 값을 가져와준다 //
  // super 와 비슷한 개념 //
  Calculator.call(this,x,y);
}
Result.prototype.avg = function(){
  return (this.x +this.y)/2;
}
//생성자 하나 만든다 (객체를 새롭게 만들기)//
var r1 = new Result(40,20);

console.log(r1.avg());//==>자식의 기능//
console.log(r1.sum());//==>부모의 기능//
console.log(r1.sub());//==>부모의 기능//
