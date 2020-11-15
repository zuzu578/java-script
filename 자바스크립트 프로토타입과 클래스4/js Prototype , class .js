class Car{
  constructor(){

  }
  drive(){
    return document.write("부모의 차가 움직인다.");
  }
  stop(){
    return document.write("부모의 차가 멈춘다.");
  }
}
class myCar extends Car{
  constructor(){
    super();

  }
  drive(){
    return document.write("자식의 차가 움직인다.");
  }
  stop(){
    return document.write("자식의 차가 멈춘다.");
  }
}

class Animal{
  constructor(){

  }
  move(){
    document.write("동물들이 움직인다.");
  }
}
class Human{
  constructor(){
 

  }
  move(){
    document.write("사람이 움직인다.");
  }
}
class Tiger{
  constructor(){
  }
  move(){
    document.write("호랑이가 움직인다.");
  }
}
class Eagle{
  constructor(){


  }
  move(){
    document.write("독수리가 움직인다.");
  }
}
var h1 = new Human();
var t1 = new Tiger();
var e1 = new Eagle();
h1.move();
t1.move();
e1.move();

//함수 ==>생성자를 만든다.//
//상위 클래스가 되기도한다.//
function Person(){

}
//Person의 walk 라는 함수의 내용을 prototype에 저장//
Person.prototype.walk = function(){
  alert("im walking");
}
//Person sayHello 라는 함수의 내용을 prototype에 저장//
Person.prototype.sayHello = function(){
  alert("hello");
}
//Student 라는 함수를 통해서 객체를 만들었다 (생성자 포함) //
//하위 클래스 가 되기도 한다.//
function Student(){
   Person.call(this);
}

//상속//
//==> Student와 Person을 prototype으로
//연결해서 상속을함.//
Student.prototype = new Person();
//Student의 생성자를 prototype에 저장//
Student.prototype.constructor = Student;
//overriding//
//student의 sayHello 함수를 prototype에 넣는다.//
Student.prototype.sayHello = function(){
  alert("hi,im a student");
}
//student의 sayGoodBye함수를 prototype에 저장//
Student.prototype.sayGoodBye = function(){
  alert('goodBye');
}
//student 의 생성자를 생성//

var student1 = new Student();
//* 중요 *//
//1) sayHello는 상위 클래스(부모클래스)의 함수이다.//
//2) sayGoodBye는 상위 클래스(부모클래스)의 함수이다.//
//3) walk 는 하위클래스 (자식 클래스)의 함수이다.//
//4) 중요한 사실은 student 라는 하위클래스는 Person이라는 상위클래스를 상속을 받았기때문에.///
//5) student는 Person이라는 클래스가 가진 모든기능을 구현할수있다.//
//6) 때문에 아래와같이 student라는 하위클래스의 객체를 생성하고 부모의 함수를 호출할수있게 된것이 가능한이유이다.//
student1.sayHello();
student1.walk();
student1.sayGoodBye();
