class Polygon{
  constructor(x,y){
    this.name = 'lee';
    this.x = x;
    this.y = y;
    this.sum =this.x+this.y;
  }
}
class Square extends Polygon{
  constructor(x,y){
    super(x,y);
    this.name = "lee";
  }
}
var s1 = new Square(20,40);
document.write(s1.sum);