class Question{
    constructor(){
        this.input = createInput("Enter your name here");
        this.input1 = createInput("Enter the answer here");
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.reset = createButton('Reset');
        this.question = createElement("h3")
        this.option1 = createElement("h3")
        this.option2 = createElement("h3")
    
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.input1.hide();
      }

      display(){
          this.title.html("MyQuiz Game");
          this.title.position(350,0);

          this.question.html("What starts with an e and ends with an e and has only 1 letter in it? ");
          this.question.position(150,80);

          this.option1.html("Everyone");
          this.option2.html("Envelope");
          this.option1.position(150,100);
          this.option2.position(150,120);

          this.input.position(150,230);
          this.input1.position(370,230)
          this.button.position(150,300)

          this.reset.position(250,300)

          this.button.mousePressed(()=>{
              console.log(this.input.value());
              console.log(this.input1.value())
              player.name=this.input.value();
              player.answer = this.input1.value();
              playerCount = playerCount + 1;
              player.index = playerCount;

              player.update();
              player.updateCount(playerCount)
          })

          this.reset.mousePressed(()=>{
              player.updateCount(0);
              quiz.updateState(0);
              database.ref("/").update({
                  players:null
              })
          })
         
      }
}