//생성자의 정의//
//생성자란 새로운 객체를 생성하도록 도와주는것을 생성자라고 한다//
//생성자는 새로운 객체를 생성하도록 도와주고 (new),그리고 인자를 전달받아서 초기화를 도와주는 역할을 한다.//

//생성자는 함수형태이다.
//일반 함수와 비교되기 위해서 생성자는 앞글자를 대문자로 시작한다.//
function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name; 
    }   
}
//이렇게 새로운 객체를 만듬으로써 그 새로운객체의 인자를전달해준다//
//new 가 붙게되면 새로운 객체를 만든다는 의미이다.//

var p1 = new Person('egoing');
document.write(p1.introduce()+"<br />");
 
var p2 = new Person('leezche');
document.write(p2.introduce());