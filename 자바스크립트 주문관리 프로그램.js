
var a1 = new Array();
var p1 = new Array();
function Vending(){
var choice = 0;
var count = 0;
var menu = 0;
}
Vending.prototype.vend =  function(){
  menu = prompt("1.주문 2.주문내역 3.나가기");
  while(menu!=3){
  if(menu==1){
    choice = prompt("1.콜라 2.사이다 3.우유");
    a1.push(choice);
    
    count = prompt("수량을입력해주세요.");
    p1.push(count);
    
  }else if(menu==2){
    r1.result();
  }
  menu = prompt("1.주문 2.주문내역 3.나가기");
  
}
alert("종료합니다.");
}
Vending.prototype.result = function(){
   return alert(a1+""+p1+"개");
}
function Result(choice,count){
  this.choice = choice;
  this.count = count;
  
}
Result.prototype = new Vending();

var r1 = new Vending();
r1.vend();
