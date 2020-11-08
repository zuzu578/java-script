//내부함수 , 외부함수 ,클로저 //

function outter(){
  //outter는 외부함수이다//
  //var title 은 외부함수의 지역변수이다.//
    var title = 'coding everybody';  
    return function(){   
    //return function()은 즉 내부함수이다//
    //함수를 리턴할수있는 내부함수//
    //그런데 내부함수에서 외부함수의 지역변수에 접근하고있다//
    //이러한 개념을 클로저라고 한다//

        alert(title);
    }
}
//그리고 외부함수가 끝나도 외부함수의 지역변수를 접근하고 있는 내부함수가 소멸될때까지 외부함수의 지역변수는 살아있는것을 볼수있다.//
//이것또한 클로저의 특징중하나이다.//

inner = outter();
inner();