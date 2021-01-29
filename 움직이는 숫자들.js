function nextRandomInteger(limit){
  return Math.round(Math.random() * limit);
}
var alphabet = "&#x1F601";
function randomAlphabet(){
  return alphabet.charAt(nextRandomInteger(25));
}
function randomSpeed(maxSpeed){
  return Math.random() * maxSpeed - Math.random() * maxSpeed;

}
var canvasWidth = 1400;
var canvasHeight = 500;
function MovingText(){
  this.x = nextRandomInteger(canvasWidth);
  this.y = nextRandomInteger(canvasHeight);
  this.vX = randomSpeed(10);
  this.vY = randomSpeed(10);
  this.body = document.createElement('h1');
  this.body.innerHTML = randomAlphabet();
  this.body.style.position = 'absolute';
  document.body.appendChild(this.body);

}
MovingText.prototype.move = function(){
  if(this.x < 0 || this.x > canvasWidth){this.vX *= -1;}
  if(this.y < 0 || this.y > canvasHeight){this.vY *= -1;}
  this.x += this.vX;
  this.y += this.vY;
  this.body.style.left = this.x +'px';
  this.body.style.top = this.y +'px';
};
window.onload = function(){
  var movingTexts = [];
  for(var i = 0 ; i< 100; i++){
    movingTexts.push(new MovingText());
  }
  setInterval(function(){
    for(var i in movingTexts){
      movingTexts[i].move();
    }
  },1000/60);
};
