/*function Calculator(x,y){
  this.x = x;
  this.y = y;
}
Calculator.prototype.sum = function(){
  return (this.x+this.y);
}
Calculator.prototype.multi = function(){
  return (this.x*this.y);
}
Calculator.prototype.div = function(){
  return (this.x/this.y);
}


function Result(x,y){
  this.x = x;
  this.y = y;
}
Result.prototype = new Calculator();

var r1 = new Result(40,20);
document.write(r1.sum());
*/
class Calculator{
  constructor(x,y){
  this.x=x;
  this.y=y;
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
var r1= new Result(20,10);
r1.sum();
