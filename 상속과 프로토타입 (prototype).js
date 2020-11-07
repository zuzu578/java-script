
/*//person 이라는 객체가(함수)있다//
function Person(name){
    this.name = name;
}
//prototype ==> 상속을 할때 사용 ,
//prototype ==>객체임 프로토 타입 이라는 객체 
//prototype이라는 객체를 통해서 상속을 사용할수 있게 해준다,//

Person.prototype.name=null;
//prototype.introduce==>introduce라는 메소드를 상속하겠다//
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}


 // 생성자 ==> 초기화작업을 담당 //
 // 매개 변수를 받아서 (인자를 받아서)초기화 작업을 도와주는 역할을한다//

function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
 //생성자를 생성//
 // new ===> Programmer 생성자를 생성//
 //egoing===>인자가 있음 //
 //egoing ==> 프로그래머스 (name);

var p1 = new Programmer('egoing');
//사실 생성자인(Programmer)에는 introduce()메소드가 없다//
//그러나 prototype이라는객체와 person객체를 연결 시켜주었기 때문에..//
//person에서 introduce라는 메소드를 가져와서 사용할수 있다.//
//이것이 상속이다.//

document.write(p1.introduce()+"<br />");
*/

//person//
function Person(name){
    this.name = name;
}
//person 상속 (prototype)이용.//
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
 

 //생성자//
function Programmer(name){
    this.name = name;
}
//Programmer를 prototype객체 ,person 객체 연결//
Programmer.prototype = new Person();

Programmer.prototype.coding = function(){

    return "hello world";
}
var p1 = new Programmer('egoing');
//prototype을 통해서 person 에서 상속받은 introduce()를programmer
//생성자에서 사용할수//
//있게되었다.//
document.write(p1.introduce()+"<br />");
document.write(p1.coding()+"<br />");