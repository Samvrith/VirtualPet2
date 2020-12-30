//Create variables here
var dog,dogimg,happydogimg,database,foods,foodstock;
var database, milkImg;
var feed, addFood, fedTime, lastFed, foodObj;
function preload()
{
  //load images here
  happydogimg = loadImage("dogImg.png");
  dogimg= loadImage("dogImg1.png");
}

function setup() {
  createCanvas(700, 600);
  database = firebase.database();
  dog = createSprite(300,300);
  dog.addImage("dog",dogimg);
  dog.scale =0.5;
  foodstock=database.ref('Food');
  foodstock.on("value",readStock);

  foodObj = new Food();

  feed = createButton("Feed the Dog");
  feed.position(700, 95);
  feed.mousedPressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800, 95);
  addFood.mousedPressed(addFoods);
  
}

function readStock(data){ 
  foods=data.val(); 
} 
//Function to write values in DB 
function writeStock(x){ 
  if(x <= 0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({ 
    Food:x 
  }) 
} 

function draw() {  
  background(46,139,87);
  
  
  //Function to read values from DB
  if(keyWentDown(UP_ARROW)){ 
    writeStock(foods); 
    dog.addImage("dog",happydogimg); 
  }  
  fill("black");
  textSize(30);
  text("Food Available:" + foods,200,500);
  drawSprites();
  //add styles here
  fill("black");
  textSize(30);
  text("Press the Up arrow to feed the Dog",100,100);
  

}

function feedDog()
{
  
}



