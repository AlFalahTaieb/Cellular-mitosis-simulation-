
function Cell() {
    this.pos = createVector(random(width),random(height));
    this.r=50;
    this.c=color(random(100,255),0,random(100,255))
    this.move=function () {

    }
    this.move=function () {
      var vel=p5.Vector.random2D();
      this.pos.add(vel);
    }
    this.show=function () {
        fill(this.c);
        ellipse(this.pos.x,this.pos.y,this.r,this.r)
    }
}