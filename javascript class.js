/*function Calculator(x,y){
  this.x = x;
  this.y = y;
}
Calculator.prototype.x = null;
Calculator.prototype.y = null;
Calculator.prototype.sum=function(){
  return this.x+this.y;
}
Calculator.prototype.multi=function(){
  return this.x*this.y;
}
Calculator.prototype.div=function(){
  return this.x/this.y;
}
function Result(x,y){
  this.x = x;
  this.y = y;
}
Result.prototype = new Calculator();

var r1 = new Result(40,20);
document.write(r1.sum()+"<br>");
document.write(r1.multi()+"<br>");
document.write(r1.div()+"<br>");

class Calculator{
  constructor(x,y){
   this.x = x;
   this.y = y;

  }
  sum(){
    document.write(this.x+this.y);
  }


}
class Result extends Calculator{
  constructor(x,y){
    super(x,y);
    this.x = x;
    this.y = y;
  }
}

var r1 = new Result(20,40);
r1.sum();
*/
/*
class Animal{
  constructor(animal){
    this.animal = animal;
  }
  running(){
    document.write(this.animal+"이(가)달린다."+"<br>");
  }

}
class Human extends Animal{
  constructor(animal){
    this.animal = animal;
  }
}
class Tiger extends Animal{
  constructor(animal){
    this.animal = animal;
  }
}
class Eagle extends Animal{
  constructor(animal){
    this.animal = animal;
  }
}
var h1 = new Animal("사람");
h1.running();
var t1 = new Animal("호랑이");
t1.running();
var e1 = new Animal("독수리");
e1.running();

class Calculator{
 
  constructor(x,y){
    this.x = x;
    this.y = y;

  }
  sum(){
    document.write(this.x+this.y);
  }
}
class Result  extends Calculator{
  constructor(x,y){
    super(x,y)
    this.x =x;
    this.y =y;

  }

}

var r1 = new Result(20,30);
r1.sum();

*/
/*
class Vending{
  //var choice = 0;
  //var count = 0;

 constructor(num1,num2){
  var choice = num1;
  var count = num2;
 
  
 }
 vend(){
     var choice = prompt("원하시는 음료를 선택해주세요."+"0번은 취소"+"1.콜라,2.사이다,3우유");
   while(choice!=0){
    var count = prompt("수량을 입력해주세요.");
    alert("주문이 접수되었습니다.");
    choice = prompt("원하시는 음료를 선택해주세요."+"1.콜라,2.사이다,3우유");
   }
 }

}

class Result extends Vending{
 constructor(num1,num2){
   super(num1,num2);
   this.choice = num1;
   this.count  = num2;

 }

}
var r2 = new Result(this.choice,this.count);
r2.vend();
document.write(r2.choice+"번음료");
document.write(r2.count+"잔");
*/
var count = 0;
var choice = 0;
var vending = class{
  constructor(count,choice){
    this.count = count;
    this.choice = choice;
  }
  vend(){
    choice = prompt("음료를 선택해주세요. 1.콜라 2.사이다 3.물");
    while(choice!=0){
      count = prompt("수량을 입력해주세요.");
      alert("접수되었습니다.");
      choice = prompt("음료를 선택해주세요. 1.콜라 2.사이다 3.물");
    }
    alert("종료!");
  }
}

var v1 = new vending();
v1.vend();
document.write(v1.count);
document.write(v1.choice);



 /*var person =function() {
  var choice = prompt("원하는 음료를 선택해주세요.1콜라 2사이다 3물");
  while(choice=!0){
    var count = prompt("수량을 입력해주세요.");
    alert("접수되었습니다.");
     choice = prompt("원하는 음료를 선택해주세요.1콜라 2사이다 3물");
  }
  alert("종료!");
}

person();*/