import ProjSpawner from "./Classes/ProjectileSpawner.js"
import Projectile from "./Classes/Projectile.js"
import Player from "./Classes/Player.js"

console.log("Program has started")

//Creates an object from projSpawner
//let projSpawn = new ProjSpawner();
//projSpawn.start();
/*This is to be called when starting projectile spawning 
    ****Call this in the init function**** */
//projSpawn.start();
var player = new Player();

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        player.move(1);
    }
    if (e.keyCode == 37) {
        player.move(-1);
    }
}

document.addEventListener("keydown", keyDownHandler, false);