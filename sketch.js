
function preload() {
    //load the images here
    tom=loadImage("cat1.png");
    bgImage= loadAnimation("https://in.pinterest.com/pin/226024475028133148/")
    jerryImage= loadAnimation("mouse1.png");
    tom2Image= loadAnimation("cat2.png,cat3.png")
    jerry2Image= loadAnimation("mouse2.png and mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(400,200);
    jerry= createSprite(600,400);
}

function draw() {

    background("https://in.pinterest.com/pin/226024475028133148/");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.widht)/2 ){

    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("catRunning");




if(keycode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing")
    mouse.framedelay = 25;
}
if(keycode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing")
    mouse.framedelay = 25;
}
}
