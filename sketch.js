var canvas,playerCount,gameState
var database,quiz,question,player;
var allPlayers;
gameState = 0;
playerCount = 0;

function setup(){
  canvas = createCanvas(1200,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start()
}


function draw(){
  background("pink");
  if(playerCount === 4){
    quiz.updateState(1)
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  if(gameState === 2){
    quiz.end();
  }
}
