//imagens
let imagemEstrada;
let imagemAtor;
let imagemCarro

//carro
let xCarro = 700;

//ator
let yAtor = 367;

function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png")
  imagemCarro = loadImage("imagens/carro-1.png")
}

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(imagemEstrada);
  mostrarAtor();
  mostrarCarro();
  movimentoCarro();
  movimentoAtor();
}

function mostrarAtor(){
  image(imagemAtor, 70, yAtor, 34, 30);
}

function mostrarCarro(){
  image(imagemCarro, xCarro, 97, 70, 35);
}

function movimentoCarro(){
  xCarro -= 2;
}

function movimentoAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor += 2;
  }
}