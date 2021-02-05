class Player{
    constructor(){
      this.index = null;
      this.name = null;
      this.answer = null;
    }

    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
    }

    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }

    update(){
      var playerIndex = "players/player"+this.index;
      console.log(playerIndex)
      database.ref(playerIndex).set({
        name:this.name,
        answer:this.answer
      })
    }

    static getPlayerInfo(){
      var playerInfoRef = database.ref("players");
      playerInfoRef.on("value",function(data){
        allPlayers = data.val();
      })
    }

    
}