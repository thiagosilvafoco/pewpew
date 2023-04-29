var boneco,inimigo
var edges,parede1,parede2,parede3,parede4,parede5,parede6,parede7,parede8,parede9,parede10,parede11
var ghost,federacao
var tiro,tirobom

var estado,troca

function setup() {
createCanvas(500,400)

estado = "serve";

criando()

}
function draw() {
background(80,80)
fill("purple")
text("Azul: "+ ghost,20,50)
text("Vermelho: "+ federacao,400,50)

if(estado == "serve") {
text('pressione a tecla "G" para iniciar',164,189);
if(keyDown("G")){
estado = "play";
}
}
if(estado == "play"){
if(keyDown(DOWN_ARROW)){
boneco.velocityY = 4;
}
if(keyDown(UP_ARROW)){
boneco.velocityY = -4;
}
if(keyDown(LEFT_ARROW)){
boneco.velocityX = -4;
}
if(keyDown(RIGHT_ARROW)){
boneco.velocityX = 4;
}

if(keyDown("s")){
inimigo.velocityY = 4;
}
if(keyDown("w")){
inimigo.velocityY = -4;
}
if(keyDown("a")){
inimigo.velocityX = -4;
}
if(keyDown("d")){
inimigo.velocityX = 4;
}

if(keyDown("k")){
tirobons()
}

if(keyDown('space')){
tiros()
}

boneco.collide(edges)
boneco.collide(parede1)
boneco.collide(parede2)
boneco.collide(parede3)
boneco.collide(parede4)
boneco.collide(parede5)
boneco.collide(parede6)
boneco.collide(parede7)
boneco.collide(parede8)
boneco.collide(parede9)
boneco.collide(parede10)
boneco.collide(parede11)


Gtiros.collide(parede1)
Gtiros.collide(parede2)
Gtiros.collide(parede3)
Gtiros.collide(parede4)
Gtiros.collide(parede5)
Gtiros.collide(parede6)
Gtirobons.collide(parede7)
Gtirobons.collide(parede8)
Gtirobons.collide(parede9)
Gtirobons.collide(parede10)
Gtirobons.collide(parede11)


if(Gtiros.isTouching(boneco)){
boneco.x =50
boneco.y =200
federacao +=1
}

inimigo.collide(edges)
inimigo.collide(parede1)
inimigo.collide(parede2)
inimigo.collide(parede3)
inimigo.collide(parede4)
inimigo.collide(parede5)
inimigo.collide(parede6)
inimigo.collide(parede7)
inimigo.collide(parede8)
inimigo.collide(parede9)
inimigo.collide(parede10)
inimigo.collide(parede11)

if(Gtirobons.isTouching(inimigo)){
inimigo.x =450
inimigo.y =200
ghost +=1
}
if(ghost>14){
text("Ghosts Win",200,100)
estado = "fim"
inimigo.velocityX = 0;
boneco.velocityX = 0;
inimigo.velocityY = 0;
boneco.velocityY = 0;
}
if(federacao>=6 && troca == 0){
text("Troca de Times",200,100)
estado = "serve"
inimigo.x = 50
inimigo.y = 200
inimigo.velocityX = 0;
boneco.velocityX = 0;
inimigo.velocityY = 0;
boneco.velocityY = 0;
inimigo.x = 450
inimigo.y = 200
troca=+1;
}
if(federacao>14){
estado = "fim"

}
}
drawSprites()

}


function tiros(){
if(frameCount%10==0){
tiro = createSprite(inimigo.x,inimigo.y,30,10)
  Gtiros.add(tiro)
  
tiro.shapeColor= "green"
if(inimigo.x<199){
tiro.velocityX = 4
}
if(inimigo.x>199){
tiro.velocityX = -4
}
tiro.lifetime = 90;
}

}

function tirobons(){
if(frameCount%10==0){
tirobom = createSprite(boneco.x,boneco.y,20,10)
Gtirobons.add(tirobom)


tirobom.shapeColor= "green"
if(boneco.x>199){
tirobom.velocityX = -4
}
if(boneco.x<199){
tirobom.velocityX = 4
}
tirobom.lifetime = 90;

}
}

function criando(){

boneco = createSprite(50,200,20,20)
inimigo = createSprite(450,200,20,20)
edges = createEdgeSprites();
Gtiros = new Group();
Gtirobons = new Group();

parede1 = createSprite(100,60,10,75)
parede2 = createSprite(100,180,10,75)
parede3 = createSprite(100,300,10,85)
parede4 = createSprite(160,140,10,75)
parede5 = createSprite(160,260,10,75)
parede6 = createSprite(380,70,10,75)
parede7 = createSprite(380,200,10,75)
parede8 = createSprite(380,320,10,75)
parede9 = createSprite(320,265,10,75)
parede10 = createSprite(320,135,10,75)
parede11= createSprite(240,200,90,10)

parede1.shapeColor="#795548"
parede2.shapeColor="#795548"
parede3.shapeColor="#795548"
parede4.shapeColor="#795548"
parede5.shapeColor="#795548"
parede6.shapeColor="#795548"
parede7.shapeColor="#795548"
parede8.shapeColor="#795548"
parede9.shapeColor="#795548"
parede10.shapeColor="#795548"
parede11.shapeColor="#89FF009B"

boneco.shapeColor = "blue"
inimigo.shapeColor = "red"
federacao = 0;
ghost = 0;
troca= 0;
}