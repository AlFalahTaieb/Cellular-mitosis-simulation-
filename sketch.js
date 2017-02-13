var cells=[];
function setup() {
createCanvas(400,400);
cells.push (new Cell());//Cell=name of constructer ,cell individual cell, cells heya el arraycells.push (new Cell());
    cells.push(new Cell())
}

function draw() {
  background(51);
  for(var i=0;i<cells.length;i++){
  cells[i].move();
  cells[i].show();
    }
}

function mousePressed() {

    for(var i=0;i<cells.length;i++){
       if (cells[i].clicked(mouseX,mouseY)){
console.log("CLICKED")
       }
    }
}
