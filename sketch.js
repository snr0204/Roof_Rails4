var player ;        
var roller ;
var obstacle ;
var enemiesGroup,energyGroup;
function setup() {
createCanvas(1000,500);
player = createSprite(500,250,50,50);
roller = createSprite(500,230,100,20);


player.shapeColor = "cyan";  
roller.shapeColor = "red";  

enemiesGroup = new Group()
energyGroup = new Group()

}


function draw() {
	background(0)

if(keyDown("left")){
player.x=player.x-10;
}
if(keyDown("right")){
player.x=player.x+10;
}
if(keyDown("down")){
	player.y=player.y+10;
	}
	



roller.x = player.x;
roller.y = player.y - 45;


camera.position.y = player.y;
camera.position.x = player.x;
enemies()
energy()



  drawSprites();
  
}
function enemies (){
	if(frameCount%150===0){
	var x = player.x + random(-200,+200)+80;
	var y = player.y - random(40,80)+80;
    obstacle = createSprite(x,y,100,30);
	obstacle.shapeColor = "green"
	enemiesGroup.add(obstacle);
	obstacle.lifetime = 500;

	}
}
function energy(){
if(frameCount%120===0){
 var x = random(10,1000)+40;
 var y = player.y-random(80,100)+40;
 var e = createSprite(x,y,50,30)
 e.shapeColor = "yellow";
 energyGroup.add(e);
 e.lifetime = 100;
 
}





}


