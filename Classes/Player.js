export default class Player {

    constructor(DOMElement, xInit, yInit) {
        this.DOMElement = DOMElement;
        document.body.appendChild(this.DOMElement)

        //player attributes 
        this.speed = 20 //arbritrary at the moment
        this.x_dir = 0
        this.y_dir = 0
        this.x_speed = 0
        this.y_speed = 0
        this.life = 100 //arbritary at the moment
        this.isDead = false
        this.timeSinceShoot = 0

        this.position = {
            x : xInit,
            y : yInit
        }
    }
    
    //player functions

    //player move function
    move() {

    }

    move = () => {

    }

    //checks if direction is possible
    checkCollision = () => {

    }

    //checks if player can shoot
    checkShoot = () => {

    }

    //shoots projectile
    shoot = () => {

    }

    //changes player's isDeath state from false to true 
    changeAliveState = () => {

    }

    //function to check key inputs, and change player movement
    doKeyDown = (keyP) => {

        switch (keyP.keyCode) {
            case 38:	// UP Arrow Key pressed
                keyP.preventDefault();
            case 87: 	// W pressed
                //code
                break
            case 40:	// DOWN Arrow Key pressed
                keyP.preventDefault()
            case 83:	// S pressed 
                //code
                break
            case 37:	// LEFT Arrow Key pressed
                keyP.preventDefault()
            case 65:	// A pressed
                //code
                break
            case 39:	// RIGHT Arrow Key pressed
                keyP.preventDefault()
            case 68:	// D pressed
                //code
                break;
            
        }
    }

    playerEvent = (eventNum) => {
        if(eventNum == 0) {
            window.addEventListener('keydown', doKeyDown)
        }
    }

    
}
    


