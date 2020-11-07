/*function sum(){
    var i, _sum = 0;    
    for(i = 0; i < arguments.length; i++){
        document.write(i+' : '+arguments[i]+'<br />');
        _sum += arguments[i];
    }   
    return _sum;
}
document.write('result : ' + sum(1,2,3,4));

// arguments 는 배열과 비슷하게 사용이 되는데,//
//function sum() 는 인자에 대한 구현이 없음에도 인자를 전달 할수있다//
// 그 이유는 함수안에 arguments라는 특수한 배열이 있기 때문이다//
//그래서 우리는 전달하는 값의 개수만큼 인자에 대한 구현이 없음에도 불구하고
//그 인자를 받을수있다//
//예를들어서 
//function sum1(){}  
//sum(1,2,3,4,5,6,7);
// 위 와같이 즉 인자가 없음에도 불구하고 1,2,3,4,5,6,7 의 값을 
//전달 받을수있다.//
*/
//zero()함수는 인자가 없다//
/*function zero(){
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
//one()함수는 인자가 하나이다//
function one(){
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
//two()함수는 인자가 2개이다//
function two(){
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}

zero(); //zero()매개 변수가 없다//
one('val1', 'val2');  //one()매개변수가 2개이다//
two('val1');  // two()매개변수가 1개이다//
*/

/*function zero(){
   console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
    
    
}
function one(arg1,arg2){
   document.write(
        arg1+arg2
    );
}
function two(arg1, arg2){
    document.write(
     arg1+arg2

    );
}
zero(1,2,3,4,5); // zero.length 0 arguments 5 
one('val1', 'val2');  // one.length 1 arguments 2 
two('val1');  // two.length 2 arguments 1
*/

