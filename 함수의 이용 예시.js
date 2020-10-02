function myFunction(area,number){
  document.write(area)
  return
  document.write(number)



}
myFunction("지역",8)



a=1000;
b=300;
c=500;


var vending = prompt("원하는상품을 입력해주세요");
if(vending == "a"){
  var money = prompt("금액을 넣어주세요.")
  if(money == "1000"){
    alert("상품이 나왔습니다.")
  }else{
    alert("잔액이 부족합니다.")
  }myFunction1();
}



function myFunction1(){
var vending = prompt("원하는상품을 입력해주세요");
if(vending == "b"){
  var money = prompt("금액을 넣어주세요.")
  if(money == "300"){
    alert("상품이 나왔습니다.")
  }else{
    alert("잔액이 부족합니다.")
  }
}
  
}

function myFunction2(){
var vending = prompt("원하는상품을 입력해주세요");
if(vending == "c"){
  var money = prompt("금액을 넣어주세요.")
  if(money == "500"){
    alert("상품이 나왔습니다.")
  }else{
    alert("잔액이 부족합니다.")
  }
}
  
}

