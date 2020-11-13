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


function Animal(animal){
   this.animal = animal;
}
Animal.prototype.running=function(){
  document.write(this.animal+"is Running");
}
function Human(animal){
  this.animal = animal;
}
function Tiger(animal){
  this.animal = animal;
}
function Eagle(animal){
  this.animal = animal;
}
Human.prototype = new Animal();
Tiger.prototype = new Animal();
Eagle.prototype = new Animal();

var h1 = new Human("Human");
document.write(h1.running());

var h2 = new Tiger("Tiger");
document.write(h2.running());

var h3 = new Eagle("Eagle");
document.write(h3.running());

function Season(season){
  this.season = season;
}
Season.prototype.speaking = function(){
  return "현재 계절은"+this.season+"입니다."
}

var s1 = new Season("봄");
document.write(s1.speaking());
var s2 = new Season("여름");
document.write(s2.speaking());
var s3 = new Season("가을");
document.write(s3.speaking());
var s4 = new Season("겨울");
document.write(s4.speaking());

function Animal(animal){
  this.animal = animal;
}
Animal.prototype.running = function(){
  return this.animal+"움직인다.";
}

var p1 = new Animal("사람");
document.write(p1.running())
var p2 = new Animal("호랑이");
document.write(p2.running())
var p3 = new Animal("토끼");
document.write(p3.running())
var p4 = new Animal("독수리");
document.write(p4.running());





function Sum(num1,num2){
  this.num1 = num1;
  this.num2 = num2;
  this.sum = function(){
    return this.num1+this.num2;
  }
}


var p1 = new Sum(20,40);

document.write(p1.sum());


function Sum(number1,number2){
  this.number1 = number1;
  this.number2 = number2;
}
Sum.prototype.number1 = null;
Sum.prototype.number2 = null;
Sum.prototype.calculating = function(){
  return this.number1+this.number2
}

function Result(number1,number2){
  this.number1 = number1;
  this.number2 = number2;
}
Result.prototype = new Sum();
Result.prototype.calculating = function(){
  return this.number1+this.number2;
}

var r1 = new Result(20,30);
document.write(r1.calculating());





function Sum(num1,num2){
  this.num1 = num1;
  this.num2 = num2;
  this.calculating = function(){
    return this.num1 + this.num2
  }
}
var s1 = new Sum(20,30);
document.write(s1.calculating());
*/











/*function Avg(num1,num2){
  this.num1 = num1;
  this.num2 = num2;
}
Avg.prototype.num1 = null;
Avg.prototype.num2 = null;
Avg.prototype.calculating = function(){
  return (this.num1*this.num2)
}

function Result(num1,num2){
  this.num1 = num1;
  this.num2 = num2;
}
Result.prototype = new Avg();

var r1 = new Result(20,40);
document.write(r1.calculating());

function Avg(num1,num2){
  this.num1 = num1;
  this.num2 = num2;
  this.calculating = function(){
    return (num1*num2)
  }
}
var f1 = new Avg(20,10);
document.write(f1.calculating());
var f2 = new Avg(30,10);
document.write(f2.calculating());


function Multi(num1,num2){
  this.num1 = num1;
  this.num2 = num2;
}
Multi.prototype.num1 = null;
Multi.prototype.num2 = null;
Multi.prototype.calculating = function(){
  return this.num1*this.num2;
}

function Result(num1,num2){
  this.num1 = num1;
  this.num2 = num2;
}
Result.prototype = new Multi();

var r1 = new Multi(20,30);
document.write(r1.calculating());

*/
//1)프로토타입 이용//
/*function Multi(num1,num2){
  this.num1 = num1;
  this.num2 = num2;
}
Multi.prototype.num1 = null;
Multi.prototype.num2 = null;
Multi.prototype.calculating = function(){
  return this.num1*this.num2;
}

function Result(num1,num2){
    this.num1 = num1;
    this.num2 = num2;

}
Result.prototype = new Multi();
var  r1 = new Result(20,30);
document.write(r1.calculating());


//2)생성자를 이용//
function Multi(num1,num2){
  this.num1 = num1;
  this.num2 = num2;
  this.calculating = function(){
    return this.num1*this.num2
  }
}

var m1 = new Multi(20,30);
document.write(m1.calculating());

*/




/*function Person(name){
    this.name = name;

}
Person.prototype.name=null;
Person.prototype.introduce = function(){
  return 'my name is '+this.name;
}
function Programmer(name){
  this.name = name;

}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
  return "hello" ;
}
*/


/*
function Animal(animal){
  this.animal = animal;
}
Animal.prototype.animal=null;
Animal.prototype.running = function(){
  return this.animal+("이(가) 달린다.");
}


function Human(animal){
  this.animal = animal;
}
Human.prototype = new Animal();

function Tiger(animal){
  this.animal = animal;
}
Tiger.prototype = new Animal();

function Eagle(animal){
  this.animal = animal;
}
Eagle.prototype = new Animal();
var h1 = new Animal("사람");
document.write(h1.running());
var t1 = new Animal("호랑이");
document.write(t1.running());
var e1 = new Animal("독수리");
document.write(e1.running());


var Person = {
  name : "name1",
  myFnc : function(){
    alert("im"+this.name);
    
  }
}

Person.myFnc();
*/
/*
function Person(name){
  this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function(){
  return "my name is" + this.name;

}

function Result(name){
  this.name = name;
}

Result.prototype = new Person();

var r1 = new Person("lee");

document.write(r1.introduce());

*/

/*function Calculator(x,y){
  this.x = x;
  this.y = y;
}
Calculator.prototype.x = null;
Calculator.prototype.y = null;
Calculator.prototype.addition = function(){
  return this.x+this.y;
}


function Running(x,y){
  this.x = x;
  this.y = y;

}
Running.prototype = new Calculator();

var r1 = new Calculator(20,30);

document.write(r1.addition());

*/


class Person{
  constructor(name){
    this.name = name;
  }
}
var p1 = new Person("zu");

document.write(p1.name);

