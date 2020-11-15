/*
//prototype//
function Person(name,first,second,third){
  this.name=name;
  this.first=first;
  this.second=second;

}
Person.prototype.sum = function(){
  return this.first+this.second;
}
//객체를 새로 생성한다.. new //
//new 가 붙게되면 생성자 함수가 된다.//
//constructor 역할
//1) 객체를 만든다 
//2) 객체의 초기상태를 설정(초기화 작업을 도와준다.)//
//생성자 함수이다.//
//생성자를 통해서 객체의 정의를 재정의 할필요없이 객체를 새롭게 
//만듬으로써 유지보수의 용이성이 좋아지게될수있다.//
var p2 = new Person("lee",10,20,30);
document.write(p2.sum()+"<br>");
var p3 = new Person("zu",20,50,80);
document.write(p3.sum());
*/
/*
//클래스//
class Person{
  //생성자임//
  //객체가 생성되는 과정에서 생성자는 실행이 된다.//
  constructor(first,second){
    this.name = name;
    this.first= first;
    this.second = second;
    console.log('constructor');

  }
  sum(){
   return this.first+this.second;
  }
  

}
class PersonPlus extends Person{
  constructor(first,second){
    super(first,second);
    
  }
  sum(){
    //부모클래스의 sum을 호출되고 자식의 내용을 재정의해서 오버라이딩한다.//
    return super.sum();
  }
  avg(){
   return (this.first+this.second)/2
  }
}

var k1 = new PersonPlus(20,40)
console.log(k1.sum());
console.log(k1.avg());

class Calculator{
  constructor(x,y){
    this.x = x;
    this.y = y;

  }
  sum(){
    return this.x + this.y;
  }
  div(){
    return this.x/this.y;
  }
  multi(){
    return this.x*this.y;
  }
  sub(){
    return this.x - this.y;
  }
}
class Result extends Calculator{
  constructor(x,y){
    super(x,y)
  }
  sum(){
    //overriding
    return super.sum();
  }
}
var r1 = new Result(40,20);
console.log(r1.sum());
console.log(r1.sub());
console.log(r1.div());
console.log(r1.multi());
console.log(r1.sum());
*/





var superObj = {superVal:'super'}
var subObj = Object.create(superObj);
subObj.subVal = 'sub';


//var subObj = {
//   subVal:'sub'
//}
//subObj.__proto__= superObj;

var kim = {
   name : 'kim',
   first:10, second:20,
   sum:function(){
     return this.first+this.second;
   }
}
/*
//object creat방법//
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
  return (this.first+this.second) / 2
}
var lee = {
  name:'lee',
  first:10,second:10,
  avg:function(){
    return (this.first+this.second)/2;
  }
  
}

//proto를 이용해서 사용자 정의 객체를 상속할수있다.//
lee.__proto__ = kim;
console.log(kim.sum());
console.log(lee.sum());
console.log(lee.avg());
*/

