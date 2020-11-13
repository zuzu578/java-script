class Calculator{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.sum = this.x+ this.y;
    this.multi = this.x * this.y;
    this.sub = this.x - this.y;
    this.div = this.x - this.y;
  }
}
class Result extends Calculator{
  constructor(x,y){
    super(x,y);
    this.x = x;
    this.y = y;
  }
}

var c1 = new Result(20,10);
document.write(c1.sum);
document.write(c1.multi);
document.write(c1.sub);
document.write(c1.div);