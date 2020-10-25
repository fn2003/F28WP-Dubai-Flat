function main() {

    var gameState;
    let gameOver;

    init();

    // initializer function
    function init() {
        gameState = 0
        gameOver = false
    }

    function direction(name, angle1, angle2, dirX, dirY) {
		this.name = name;
		this.angle1 = angle1;
		this.angle2 = angle2;
		this.dirX = dirX;
		this.dirY = dirY;
    }
    
    var up = new direction("up", 1.75, 1.25, 0, -1)		    // UP
	var left = new direction("left", 1.25, 0.75, -1, 0) 	// LEFT
	var down = new direction("down", 0.75, 0.25, 0, 1)		// DOWN
    var right = new direction("right", 0.25, 1.75, 1, 0)	// RIGHT
    
    // class to manage directions
    function directionManager() {
        this.dir = null
        this.set = (dir) => {
            this.dir = dir
        }
        this.get = () => {
            return this.dir
        }
    }

    function laserGeneration() {

    }

    function mapGeneration() {

    }

    // return the coordinates of the centre of the game window corresponding to the canvas
    function getCentrePos() {

    }

    function laserGenerator() {
        this.dirAngle = 0;
        this.pos;
        // add direction variable randomly assigned to either up,left,down or right here
    }

    function lasers() {

    }

    // parent class of all the players in game
    function players() {
        this.speed = 20 //arbritrary at the moment
        this.x_dir = 0
        this.y_dir = 0
        this.x_pos = 0
        this.y_pos = 0
        this.life = 100 //arbritary at the moment

       
    }

    // main player class
    function playerMain() {
        // player attributes and variables
        this.lunge = false
        this.lastTimeSinceLunge;
        this.lastTimeSinceLaser;
        this.laserSurviveTime = 30 //arbritary at the moment
        this.isInLaser = false
        this.isDead = false
    
        // player function creations 

        this.directionManager = new directionManager()

        // player function definitions 
        this.changeDir = () => {

            if(this.directionManager.get() == up) {
                this.y_dir = 1
                this.x_dir = 0

            }
            else if(this.directionManager.get() == down) {
                this.y_dir = -1
                this.x_dir = 0
            }
            else if(this.directionManager.get() == left) {
                this.x_dir = 1
                this.y_dir = 0
            }
            else if(this.directionManager.get() == right) {
                this.x_dir = -1
                this.y_dir = 0
            }
        }
        
        // moves player
        this.move = () => {

        }

        // Checks if direction is possible
        this.checkCollision = () => {

        }

        //  Checks time since last entering a laser
        this.checkLaserTime = () => {

        }

        // If in a laser, checks if exceeded time limit in laser
        this.checkLaserDeath = () => {

        }

        // Checks if player can lunge
        this.checkIfLunge = () => {

        }

        // when player lunges
        this.useLunge = () => {

        }
    }

    
    // create player object
    playerMain.prototype = new players()
    var playerMain = new playerMain()

    // game update function
    function update() {

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


    //function to check key inputs, and change player movement
    function doKeyDown(keyP) {

		switch (keyP.keyCode) {
			case 38:	// UP Arrow Key pressed
				keyP.preventDefault();
            case 87: 	// W pressed
                playerMain.directionManager.set(up)
                playerMain.changeDir()
				break
			case 40:	// DOWN Arrow Key pressed
				keyP.preventDefault()
			case 83:	// S pressed 
                playerMain.directionManager.set(down)
                playerMain.changeDir()
				break
			case 37:	// LEFT Arrow Key pressed
				keyP.preventDefault()
			case 65:	// A pressed
                playerMain.directionManager.set(left)
                playerMain.changeDir()
				break
			case 39:	// RIGHT Arrow Key pressed
				keyP.preventDefault()
			case 68:	// D pressed
                playerMain.directionManager.set(right)
                playerMain.changeDir()
				break;
			
        }
    }

    // Event listeners
    window.addEventListener('keydown', doKeyDown)
}

main()
