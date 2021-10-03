//Bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamanhoBolinha = 20;
let raio = tamanhoBolinha / 2;

//movimento Bolinha
let xMovimentoBolinha = 6;
let yMovimentoBolinha = 6;

//minha Raquete
let xMinhaRaquete = 5;
let yMinhaRaquete = 150;
let larguraMinhaRaquete = 10;
let alturaMinhaRaquete = 100;
let velocidadeMinhaRaquete = 10;


//colisao bolinha com minha raquete
let colidiu = false;

//raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let VelocidadeYRaqueteOponente;

//pontos
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let trilha;
let ponto;
let raquetada;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup(){
  createCanvas(600, 400);
  trilha.loop();
}

function draw(){
  background(0);
  mostrarBolinha();
  Raquete(xMinhaRaquete, yMinhaRaquete);
  movimentoBolinha();
  colisaoBorda();
  movimentoMinhaRaquete();
  //colisaoMinhaRaquete();
  colisaoRaqueteComReferencia(xMinhaRaquete, yMinhaRaquete);
  colisaoRaqueteComReferencia(xRaqueteOponente, yRaqueteOponente);
  Raquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
  //colisaoRaqueteOponente();
  placar();
  pontos();
}

function mostrarBolinha(){
  circle(xBolinha, yBolinha, tamanhoBolinha);
}

function movimentoBolinha(){
  xBolinha += xMovimentoBolinha;
  yBolinha += yMovimentoBolinha;
}

function colisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    xMovimentoBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    yMovimentoBolinha *= -1;
  }
}

function Raquete(x,y){
  rect(x, y, larguraMinhaRaquete, alturaMinhaRaquete);
}

function movimentoMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yMinhaRaquete -= velocidadeMinhaRaquete;
  }
  if(yMinhaRaquete < 0){
    yMinhaRaquete = 0;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    yMinhaRaquete += 10;
  }
  if(yMinhaRaquete + alturaMinhaRaquete > height){
    yMinhaRaquete = 300;
  }
}

function colisaoMinhaRaquete(){
  if (xBolinha - raio < xMinhaRaquete + larguraMinhaRaquete && yBolinha - raio < yMinhaRaquete + alturaMinhaRaquete && yBolinha + raio > yMinhaRaquete){
    xMovimentoBolinha *= -1;
  }
}

function colisaoRaqueteComReferencia(x, y){
  colidiu = collideRectCircle(x, y, larguraMinhaRaquete, alturaMinhaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    xMovimentoBolinha *= -1;
    raquetada.play();
  }
}

function movimentoRaqueteOponente(){
  velocidadeYRaqueteOponente = yBolinha - alturaMinhaRaquete/2;
  yRaqueteOponente = velocidadeYRaqueteOponente;
  if(yRaqueteOponente < 0){
    yRaqueteOponente = 0;
  }
  if(yRaqueteOponente + alturaMinhaRaquete > height){
    yRaqueteOponente = 300;
  }
}

function colisaoRaqueteOponente(){
  if(xBolinha + raio > xRaqueteOponente && yBolinha - raio < yRaqueteOponente + alturaMinhaRaquete && yBolinha + raio > yRaqueteOponente){
    xMovimentoBolinha *= -1;
  }
}

function placar(){;
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 100, 0));                
  rect(125, 15, 50, 30, 30);
  fill(color(255, 100, 0));                
  rect(425, 15, 50, 30, 30);
  fill(255);                
  text(meusPontos, 150, 37);
  fill(255);                
  text(pontosDoOponente, 450, 37);
}

function pontos(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play;
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
    ponto.play();
  }
}