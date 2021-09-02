let ground;
let lander;
var diver_img;
var bg_img;
var weed1_img;
var Sophia;
var vx = 0;
var g = 0.05;
var vy = 0;
var pearl,count=1;
var pearlimj;
var shl1;
var shl2;
var shl3;
var shl1_img;
var shl2_img;
var shl3_img;

function preload()
{
  diver_img = loadAnimation("diver1.png","diver1.2.png","diver2.png","diver2.2.png","diver3.png","diver3.2.png","diver4.png","diver5.png","diver6.png");
  
  bg_img = loadImage("bg1.jpg");

  weed_img = loadImage("seaweed2.png");

  weed_imgh = loadImage("seaweedH2.png");

  pearlimj = loadImage("cshell.png");

  shl1_img = loadImage("p1.png");

  shl2_img = loadImage("p2.png");

  shl3_imgh = loadImage("p3.png");



}

function setup() {
  createCanvas(windowWidth,windowHeight);

 Sophia=createSprite(100,500,15,15);
  Sophia.addAnimation("dvr",diver_img);
  Sophia.scale=0.7;

  pearl=createSprite(1300,130,15,15);
 pearl.addImage("prl",pearlimj);
 pearl.scale=0.3;
  
//  shl1=createSprite(700,500,15,15);
//  shl1.addAnimation("shelll",shl1_img);
//   shl1.scale=0.7;

//  shl2=createSprite(800,480,15,15);
//  shl2.addImage("shell",shl2_img);
//  shl2.scale=0.3;

//  shl3=createSprite(900,480,15,15);
//  shl3.addImage("shel",shl3_img);
//  shl3.scale=0.3;
  
  

  var wall2=createSprite(940,290,20,100);
  wall2.addImage(weed_img);
  wall2.scale=0.2;

  
  
  var wall4=createSprite(580,340,90,20);
  //wall4.shapeColor="blue";
  wall4.addImage(weed_img);
  wall4.scale=0.2;

  var walll4=createSprite(570,480,90,20);
  
  walll4.addImage(weed_img);
  walll4.scale=0.2;
  
  var wall5=createSprite(220,320,20,120);
   wall5.addImage(weed_img);
  wall5.scale=0.2;

  // var wall5l=createSprite(770,470,20,120);
  // wall5l.addImage(weed_img);
  // wall5l.scale=0.3;

  var wall1=createSprite(180,90,200,20);
  wall1.addImage(weed_imgh);
  wall1.scale=0.18;

  var wall3=createSprite(400,90,150,20);
  wall3.addImage(weed_imgh);
  wall3.scale=0.18;

  
   var wall5ll=createSprite(60,180,20,110);
   wall5ll.addImage(weed_img);
   wall5ll.scale=0.3;

  //  var wall5ll1=createSprite(900,120,20,110);
  //  wall5ll1.addImage(weed_img);
  //  wall5ll1.scale=0.3;

  //  var wall5ll01=createSprite(460,410,110,20);
  //  wall5ll01.addImage(weed_imgh);
  //  wall5ll01.scale=0.3;

  //  var wall02=createSprite(480,80,110,20);
  //  wall02.addImage(weed_imgh);
  //  wall02.scale=0.3;

   var wall01=createSprite(1050,600,110,20);
   wall01.addImage(weed_imgh);
   wall01.scale=0.18;

   var wall12=createSprite(610,95,130,20);
  wall12.addImage(weed_imgh);
  wall12.scale=0.16;

 var wall5l6l=createSprite(130,590,120,20);
  wall5l6l.addImage(weed_imgh);
 wall5l6l.scale=0.18;

 var wall5l7l=createSprite(340,595,120,20);
  wall5l7l.addImage(weed_imgh);
 wall5l7l.scale=0.16;

 var wall7=createSprite(520,590,200,20);
  wall7.addImage(weed_imgh);
  wall7.scale=0.15;

//  var wall5l8l=createSprite(430,580,120,20);
//   wall5l8l.addImage(weed_imgh);
//  wall5l8l.scale=0.2;

 var wall06=createSprite(1160,340,20,120);
  wall06.addImage(weed_img);
 wall06.scale=0.25;

 var wall07=createSprite(1160,500,20,120);
  wall07.addImage(weed_img);
 wall07.scale=0.25;

 var wall08=createSprite(870,370,120,20);
 wall08.addImage(weed_imgh);
wall08.scale=0.11;


  
  
  var wall8=createSprite(290,400,130,20);
  wall8.addImage(weed_imgh);
  wall8.scale=0.12;
  
  var wall9=createSprite(950,135,20,100);
  wall9.addImage(weed_img);
  wall9.scale=0.24;
  
  // var wall10=createSprite(700,400,40,90);
  // wall10.shapeColor="yellow";
  
  // var wall11=createSprite(770,330,20,120);
  // wall11.addImage(weed_img);
  // wall11.scale=0.3;
  
  

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(bg_img);
 // image(bg_img,0,0);

if(keyDown(UP_ARROW)){
  Sophia.y=Sophia.y-2;
  Sophia.rotation=-70;
}

if(keyDown(DOWN_ARROW)){
  Sophia.y=Sophia.y+2;
  Sophia.rotation=75;
}
if(keyWentDown(LEFT_ARROW)){
  Sophia.x=Sophia.x-20;
  if(count===1){
  Sophia.mirrorX(Sophia.mirrorX() * -1);
  count++;
  }
}
if(keyDown(RIGHT_ARROW)){
  Sophia.x=Sophia.x+2;
  Sophia.rotation=0;
  if(count===2){
    Sophia.mirrorX(Sophia.mirrorX() * -1);
    count=1;
    }
}






 
  drawSprites();
}


