var game;

game = new Phaser.Game(600, 450, Phaser.AUTO, "content");

var textHolderSpeed = document.getElementById("textHolderSpeed");
         var textHolderScore = document.getElementById("textHolderScore");
        textHolderScore.innerHTML = "SCORE: 0";
         textHolderSpeed.innerHTML = "SPEED: 0";


game.state.add("Menu", Menu);
game.state.add("Game", Game);
game.state.add("Game_Over", Game_Over);
game.state.start("Menu");