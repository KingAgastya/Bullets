var bullet, wall, width
var speed, weight

function setup() {
createCanvas(1600,400)
bullet = createSprite(50,200,50,50)
width = random(22,83)
wall = createSprite(500,200,width,height/2)
bullet.collide(wall)
speed = random(223,321)
weight = random(30,52)
wall.shapeColor = "black"
}

function draw() {
background("white");

bullet.velocityX = speed
if (wall.x-bullet.x < bullet.width / 2+wall.width / 2) {
  bullet.velocityX = 0
  var deformation = 0.5 * weight * speed* speed / 22509
  if (deformation>180) {
    bullet.shapeColor = color("red")
  }
  if (deformation < 180 && deformation > 100) {
    bullet.shapeColor = color("yellow")
  }
  if (deformation < 100) {
    bullet.shapeColor = color("green")
  }
}
drawSprites();
}
function collides(bullet2, wall2) {
  bullet.velocityX = 0
  var damage = 0.5 * weight * speed * speed/(width * width * width)

  if (damage>10) {
    wall.shapeColor = "red"
  }
  if (damage<10) {
    wall.shapeColor = "green"
  }
  bulletRightEdge = bullet2.x + bullet2.width
  wallLeftEdge = wall2.x
}