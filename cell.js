
function Cell(pos,c,r) {
    this.pos = pos|| createVector(random(width),random(height));
    this.r = r||40;
    this.c = c||color(random(100,255),0,random(100,255));


    this.clicked = function (x, y) {
        var d = dist(this.pos.x, this.pos.y, x, y);//check distance
        if (d < this.r) {
            return true;
        }
        return false;
    }


    this.mitosis=function () {
        var cell=new Cell(this.pos,this.r/2,this.c);//call with actual value
        return cell;
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