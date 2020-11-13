//생성자와 프로토타입 을 이용한 상속 모방 //
function Calculator(x,y){
  this.x = x;
  this.y = y;
}
Calculator.prototype.x = null;
Calculator.prototype.y = null;
Calculator.prototype.sum = function(){
  return this.x + this.y;
}
Calculator.prototype.multi = function(){
  return this.x * this.y;
}
Calculator.prototype.div = function(){
  return (this.x / this.y);
}

function Result(x,y){
  this.x = x;
  this.y = y;
}
Result.prototype = new Calculator();
var r1 = new Result(20,10);
document.write(r1.sum());
