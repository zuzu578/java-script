//prototype 은 원형을 의미한다.//
//prototype 이라는 프로퍼티는 용도가 약속되어있는 특수한 프로퍼티//
//prototype 의 용도는
//1) prototype에 저장된 속성은 생성자를 통해 객체가 만들어질때//
//만들어진 객체에 연결된다.//


//function Ultra() 는 부모 이다.//

function Ultra(){}
//function Ultra()라는 메소드의 속성을 true로 지정한것을//
//prototype 이라는 프로퍼티에 저장한다.//
Ultra.prototype.ultraProp = true;
 //그리고 Super()라는 자식 메소드에 연결시켜주어서 상속하게한다//
function Super(){}
Super.prototype = new Ultra();
 //마찬가지로 Sub()라는 자식 메소드에 연결시켜주어서 상속하게한다//
function Sub(){}
Sub.prototype = new Super();
 //new Sub()이라는 생성자를 하나 만들었다//
 //그리고 만든생성자를 변수 o 에 담았다
var o = new Sub();
//console.log(o.ultraProp);이라는것은
//생성자에서 ultraProp을 찾고 보니까 없다//
//그렇때문에 바로 위의 상위인 Sub()에서 ultraProp(상속받은 속성)을
//찾게되고 거기에도 없게되면
//그다음 위인 Super 에서 찾게된다.//
//이러한 현상을 prototype chain 이라고 부르게된다.//
console.log(o.ultraProp);