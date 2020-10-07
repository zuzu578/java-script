
var money = 0;
var change = 0;
var choice = 0;

var milk = 500;
var coke = 300;
var water = 500;
var money = prompt("돈을 넣어주세요.")

var product = prompt("상품을 선택해주세요.")
if(product == "milk" && money>milk){
  alert("milk나왔습니다"+"거스름돈"+(money-milk)+"가져가세요.")
}else if(product == "coke" && money>coke){
  alert("milk나왔습니다"+"거스름돈"+(money-coke)+"가져가세요.")
}else if(product == "water" && money>water){
  alert("milk나왔습니다"+"거스름돈"+(money-water)+"가져가세요.")
}else{
  alert("잔액이 부족합니다."+money+"원"+"도로 가져가세요.")
}
