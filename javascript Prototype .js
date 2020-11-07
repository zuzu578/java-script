
//생성자가 총 3개//
//Ultra라는 객체의 속성을 true 라한다 //
//그리고 그 속성을 prototype 에 저장을한다//
function Ultra(){}
Ultra.prototype.ultraProp = true;
 
//이  new Ultra()것은 Ultra라는 객체의 속성값 (저장된)true를 말한다//
//그리고 Super객체에서 .prototype 이라는 것은 Ultra의 저장된 true값을//
//연결해준다//
//연결 해주므로 , 상속이라고 볼수있다.//
function Super(){}
Super.prototype = new Ultra();
//Sub 라는 객체는prototype으로인해 new Super의 저장된 속성값 을 연결해준다.
function Sub(){}
Sub.prototype = new Super();
 
 //객체 o는 우선적으로 prototype의 prop(속성)을 찾고 
 //o 객체에 없기때문에 위 의sub()에서의 속성을 찾고 가져오게된다(상속)//

var o = new Sub();
console.log(o.ultraProp);
//객체 o에서 ultraProp을 찾는다//
//없으면 Sub에서 찾는다//
//또 없으면 Super에서//
//또 없으면 마지막인 Ultra에서 찾는다//
//이러한 체인 관계를 prototype chain 이라한다//
