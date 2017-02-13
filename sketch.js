var cells=[];
function setup() {
createCanvas(900,900);
cells.push (new Cell());//Cell=name of constructer ,cell individual cell, cells heya el arraycells.push (new Cell());
    cells.push(new Cell());
    cells.push(new Cell());
    cells.push(new Cell());
    cells.push(new Cell());
}

function draw() {
  background(51);
  for(var i=0;i<cells.length;i++){
  cells[i].move();
  cells[i].show();
    }
}

function mousePressed() {
    //As soon as you click you add +2
    for (var i = cells.length-1; i >= 0; i--) {
        if (cells[i].clicked(mouseX, mouseY)) {
            cells.push(cells[i].mitosis());
            cells.push(cells[i].mitosis());

            cells.splice(i, 1);
        }
    }
}
