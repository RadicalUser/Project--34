//Create variables here
var dog ,happyDog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  dog_image=loadImage("images/dogImg.png");
  dog_Image2=loadImage("images/dogImg1.png");
}

function setup() {  
  database=firebase.database();

  createCanvas(500, 500);
  
  dog=createSprite(300,300,20,20);
  dog.scale=0.4;
  dog.addImage(dog_image);


  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyIsDown(UP_ARROW)){
       dog.addImage(dog_Image2);

    writeStock(foodS);
  }

  drawSprites();
  //add styles here
  fill("red")
textSize(20);
text("Note: Press UP ARROW to feed the dog milk",50,100);
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x <=0){
    x=0;
  }else{
    x=x-1;
  }
  text("Food remaining : " + x,200,200);

database.ref('/').update({

  Food:x
})

}



