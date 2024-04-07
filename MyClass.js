function Sprite(tempX, tempY){
  this.x = tempX;
  this.y = tempY;
  this.xSpeed = random(-2, 2);
  this.ySpeed = random(-2, 2);

  this.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  }

  this.display = function(){
    push();
    translate(this.x, this.y);
    fill(255)
    ellipse(0, 0, 40, 60);
    fill(0);
    ellipse(-20, -10, 20, 20);
    ellipse(20, -10, 20, 20);
    fill(0); 
    rect(-20, -30, 40, 10); 
    rect(-10, -60, 20, 30);
    fill(255);
    arc(0, 10, 10, 10, 0, PI);
    pop();
  }
}