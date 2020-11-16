function Animal(animal){
  this.animal = animal;
}
Animal.prototype.running = function(){
  return (this.animal+"이(가)달린다.");
}
Human.prototype = new Animal();
function Human(animal){
  Animal.call(this,animal);
}
Tiger.prototype = new Animal();
function Tiger(animal){
  Animal.call(this,animal);
}
Eagle.prototype = new Animal();
function Eagle(animal){
  Animal.call(this,animal);
}
var h1 = new Human("사람");
var t1 = new Tiger("호랑이");
var e1 = new Eagle("독수리");
document.write(h1.running());
document.write(t1.running());
document.write(e1.running());