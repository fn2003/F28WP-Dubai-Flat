function main() {

    var gameState;
    let gameOver;

    init();

    // initializer function
    function init() {
        gameState = 0
        gameOver = false
    }

    //generates the map
    function mapGeneration() {

    }

    // return the coordinates of the centre of the game window corresponding to the canvas
    function getCentrePos() {

    }


    // manages game state
    function gameStateManager() {
        // gameState0 may possibly be the start screen
        if(gameState == 0) {
            //do something
        }
        else if(gameState == 1) {
            //do something
        }
        else if(gameState == 2) {
            //do something
        }
        else if(gameState == 3) {
            //do something
        }
        else
            console.log("How did we get here")
    }


    // game update function
    function update() {

    }
}

main()

/* code fragments to later consider:
1.  _Add in game state manager_

    //create player object
    playerMain.prototype = new players()
    var playerMain = new playerMain()

*/