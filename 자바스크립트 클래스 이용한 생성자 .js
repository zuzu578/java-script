class Polygon {
  constructor() {
    this.name = 'Polygon';
  }
}

const poly1 = new Polygon();

console.log(poly1.name);
// expected output: "Polygon"




class Square extends Polygon{
  
  constructor(length){

    super(length,length);
    this.name='Square';
  }
  get area(){
    return this.height * this.width;
  }
  set area(value){
    this.area = value;
  }

}