var dinossaurao;
var dinoImg;
var edges;

function preload() {
  //pre carrega imagens, sons, animações etc

  dinoImg = loadAnimation("trex3.png", "trex4.png");
}

function setup() {
  //função de configuração

  //muda o tamanho da tela do jogo
  createCanvas(600, 200);

  //cria o sprite do dinossauro
  dinossaurao = createSprite(50, 100, 20, 20);

  //adicionando animação ao dinossauro
  dinossaurao.addAnimation("running", dinoImg);

  //mudando o tamanho do dinossauro
  dinossaurao.scale = 0.5;

  edges = createEdgeSprites();
}

function draw() {
  background("white");

  if (keyDown("space")) {
    dinossaurao.velocityY = -10;
  }

  dinossaurao.velocityY = dinossaurao.velocityY + 0.85;

  dinossaurao.collide(edges);

  drawSprites();
}
