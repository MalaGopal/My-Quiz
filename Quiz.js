class Quiz{
    constructor(){

    }
    
    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState = data.val()
        })

    }

    updateState(state){
        database.ref('/').update({
            gameState:state
        })

    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            question = new Question();
            question.display();
        }
    }

    play(){
        question.hide()
        
        textSize(25);
        text("Quiz Results",600,250);

        var x=0;
        var y= 100;
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            background("skyblue");
            for(var plr in allPlayers){
               
                x = 800;
                y = y+50
                console.log(allPlayers[plr].answer)
                if(allPlayers[plr].answer === "Envelope"){
                    fill("red");
                    text(allPlayers[plr].name,x,y)
                }
                else{
                    fill("green");
                    text(allPlayers[plr].name,x,y)
                }
                
                
            }
        }
    }
}