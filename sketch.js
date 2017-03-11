var x=0;
var speed=4;
function setup(){
    createCanvas(600,400);
    background(155,161,163);
}

function draw(){
    //i wrote this so background changes to light blue when clicked.
    background(155,161,163);
    if(mouseIsPressed){
    background(20,215,255);
    }
    //makes outline white, 6px thick, no color inside shapes
    stroke(255);
    strokeWeight(6);
    noFill();
    
    if(mouseY<150){
        fill(53,186,153);
    }
    else{
        noFill();
        
    }
    
    //a rectangle
    rect(x,200,100,100)
    ellipse(x,200,100,100)
  
    
    //this code is going to get the shapes to move on its own
    if(x<width || x<0){
      
    }


    if(x>width){
        console.log("CIRCLE IS OFF THE SCREEN!!!!")
        speed=speed* -1;
    }
      x=x+speed; 
    console.log(x);
}