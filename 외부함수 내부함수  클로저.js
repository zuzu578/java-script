/*function outter(){
    var title = 'coding everybody';  
    function inner(){        
        alert(title);
    }
    inner();
  
}
 outter();
 */

//외부함수//
 function makeFunc() {
   //외부함수의 지역변수//
  var name = "Mozilla";
  function displayName() {
    //내부함수//
  //==>외부함수의 지역변수를 호출<==//
    alert(name);
  }
  
  //1)방법displayName();
  //2)방법return displayName;
  //==> 공통점 ==> displayName()라는 함수를 호출한다//

}
//외부함수 밖에서는 외부함수를 호출하고 그 호출한 내용을 myFunc라는 변수에
//결과를 담아준다//
//그리고 그변수를호출해준다//
//사실 함수가 호출된다음에 외부함수의 지역변수가 소멸되어야하는데 클로저에서는 소멸을 하지않는다./
//즉 클로저라는것은 내부함수가 외부함의 지역변수에 접근할수있고.
//외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될때까지 소멸되지않는다//

var myFunc = makeFunc();

myFunc();
