/*function Calculator(x,y){
  this.x = x;
  this.y = y;
}
Calculator.prototype.x= null;
Calculator.prototype.y= null;
Calculator.prototype.sum = function(){
  return this.x+this.y;
}

Result.prototype = new Calculator();
function Result(x,y){
  this.x =x;
  this.y =y;
}
var v1 = new Result(20,30);
document.write(v1.sum());
*/

class Calculator{
  constructor(x,y){
   this.x = x;
   this.y = y;
  }
  sum(){
    document.write(this.x+this.y);
  }
}
class Result extends Calculator{
  constructor(x,y){
    super(x,y);
    this.x=x;
    this.y=y;
  }
}
var r1 = new Result(20,30);
r1.sum();

