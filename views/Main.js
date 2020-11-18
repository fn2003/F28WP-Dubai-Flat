console.log("Program has started")

// Global values
let spawnStop = false;
let gameOver = false;
let score = 0;

// Class that spawns the projectiles
function projSpawner() {
    this.timer = 400;
}

// function to start the projectile spawning. ****Recommened that this function is called in init****
projSpawner.prototype.start = function() {
    var spawn = setInterval(function(){
        let check = (randomize(-100, 1050));
        if(check<=0)
            check = 0;
        projectile(check);
        if(spawnStop)
            clearInterval(spawn);
    }, this.timer);
}

projSpawner.prototype.stop = function() {
    clearInterval(spawn);
}

//projectile is a child function/class of projSpawner
function projectile(xPos){
    //Projectile speed and position accumulator
    let velocity = 7;
    let current = 0

    // creates projectile element on the html side
    let projectile = $('<img />', { 
        id: 'projectile',
        src: './Images/FLat01.png',
        alt: 'Proj'
      });
    //sets projectiles position and generates it on the map element
    projectile = projectile.css({"position":"absolute", "top":0, "left":xPos})
    if(!spawnStop)
        $("#map").prepend(projectile)
    
    //updates projectile's position every 10ms
    let interval = setInterval(function(){
        //current keeps track of player position
        current += velocity;
        projectile = projectile.css({"top":current})
        //If position is below game window, interval is stopped and element is deleted
        //Checks collision
        isHit(projectile, player);
        
        if(current > 550) {
            score += 10
            clearInterval(interval);
            projectile.remove();
        }

        if(spawnStop) {
            clearInterval(interval);
            projectile.remove()
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
    if ((e.keyCode == 39) || (e.keyCode == 68)) {
        player.move(1);
    }
    if ((e.keyCode == 37) || (e.keyCode == 65)) {
        player.move(-1);
    }
}

document.addEventListener("keydown", keyDownHandler, false);

function isHit(defender, offender) {
    if (cross(defender, offender)) {
        console.log("Player got hit");
        spawnStop = true;
        gameOver = true;
        console.log("Your score is: " + score)
    }
}

function cross(element1, element2) {
    let left1 = element1.offset().left - 200;
    let top1 = element1.offset().top-119;
    let right1 = left1 + element1.width();
    let bottom1 = top1 + element1.height();

    let left2 = element2.htmlElement.offsetLeft;
    let top2 = element2.htmlElement.offsetTop;
    let right2 = element2.htmlElement.offsetLeft + element2.htmlElement.offsetWidth;
    let bottom2 = element2.htmlElement.offsetTop + element2.htmlElement.offsetHeight;
    
    let x_overlap = Math.max(0, Math.min(right1, right2) - Math.max(left1, left2));
    let y_overlap = Math.max(0, Math.min(bottom1, bottom2) - Math.max(top1, top2));
    let overlapArea = x_overlap * y_overlap;


    if (overlapArea == 0 || isNaN(overlapArea)) 
        return false;

    return true;
    
}
