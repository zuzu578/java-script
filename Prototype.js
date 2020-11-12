/*function Calculator(number1,number2){
  this.number1 = number1;
  this.number2 = number2;
  this.sum= function(){
    document.write(number1+number2);
  }
  this.avg=function(){
    document.write((number1+number2)/Calculator.length);
  }
}
var c1 = new Calculator(20,10);
document.write(c1.sum());
document.write(c1.avg());
var c2 = new Calculator(40,20);
document.write(c2.sum());
document.write(c2.avg());
*/

function Person(name){
  this.name = name;
   
}
Person.prototype.name = null;
Person.prototype.introduce = function(){
  return 'my name is'+ this.name;
}

function Programmer(name){
  this.name = name;
}
Programmer.prototype = new Person();
var p1 = new Programmer("lee");
document.write(p1.introduce())





function Ultra(name){
  this.name = name;
}
Ultra.prototype.name = null;
Ultra.prototype.introduce = function(){
  return "my name is"+this.name;
}

function Super(){
}
Super.prototype = new Ultra();
function Sub(){

}
Sub.prototype = new Super();

var s1 = new Ultra("lee");
document.write(s1.introduce());

var s2 = new Ultra("zu");
document.write(s2.introduce());

