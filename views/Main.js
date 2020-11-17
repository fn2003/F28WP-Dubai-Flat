console.log("Program has started")

// Class that spawns the projectiles
function projSpawner() {
    this.timer = 1000;
}

// function to start the projectile spawning. ****Recommened that this function is called in init****
projSpawner.prototype.start = function() {
    setInterval(function(){
        let check = (randomize(-100, 1050));
        if(check<=0)
            check = 0;
        projectile(check);
    }, this.timer);
}

//projectile is a child function/class of projSpawner
function projectile(xPos){
    //Projectile speed and position accumulator
    let velocity = 5;
    let current = 0

    // creates projectile element on the html side
    let projectile = $('<img />', { 
        id: 'projectile',
        src: './Images/FLat01.png',
        alt: 'Proj'
      });
    //sets projectiles position and generates it on the map element
    projectile = projectile.css({"position":"absolute", "top":0, "left":xPos})
    $("#map").prepend(projectile)

    /*  ****Helper Code. Do not uncomment unless required****
        console.log("Projectile created at: "+xPos)
        let topP = Number(projectile.css("top").replace("px",""));
    */
    
    //updates projectile's position every 10ms
    let interval = setInterval(function(){
        //current keeps track of player position
        current += velocity;
        projectile = projectile.css({"top":current})
        //If position is below game window, interval is stopped and element is deleted
        //Checks collision
        isHit(projectile, player);
        
        if(current > 600) {
            clearInterval(interval);
            projectile.remove();
        }
    },10);
}



// Helper function to randomize value
function randomize(min, max) {
    return (Math.floor(Math.random() * (max - min) ) + min);
}

////////////////////////////////////
import Player from "./Classes/Player.js"

var player = new Player();
player.spawn();

//Creates an object from projSpawner
let projSpawn = new projSpawner();
/*This is to be called when starting projectile spawning 
    ****Call this in the init function**** */
projSpawn.start();

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        player.move(1);
    }
    if (e.keyCode == 37) {
        player.move(-1);
    }
}

document.addEventListener("keydown", keyDownHandler, false);

function isHit(defender, offender) {
    if (cross(defender, offender)) {
        console.log("Player got hit");
    }
}

function cross(element1, element2) {
    let left1 = element1.offset().left;
    let top1 = element1.offset().top;
    let right1 = left1 + element1.width();
    let bottom1 = top1 + element1.height();
    

    let left2 = element2.htmlElement.offsetLeft;
    let top2 = element2.htmlElement.offsetTop;
    let right2 = element2.htmlElement.offsetLeft + element2.htmlElement.offsetWidth;
    let bottom2 = element2.htmlElement.offsetTop + element2.htmlElement.offsetHeight;

    

    let x_overlap = Math.max(0, Math.min(right1, right2) - Math.max(left1, left2));
    let y_overlap = Math.max(0, Math.min(bottom1, bottom2) - Math.max(top1, top2));
    let overlapArea = x_overlap * y_overlap;

    console.log(left1+" "+left2)

    if (overlapArea == 0 || isNaN(overlapArea)) {
        return false;
    }
    return true;

}
