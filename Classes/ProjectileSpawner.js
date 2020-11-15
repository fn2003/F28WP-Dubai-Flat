import Projectile from "./Projectile.js"

// Class that spawns the projectiles
export default class ProjSpawner {
    constructor() {
        this.timer = 200;
    }

    // function to start the projectile spawning.
    start() {
        setInterval(function () {
            let check = (randomize(-100, 1050));
            if (check <= 0)
                check = 0;
            let proj = new Projectile(check);
            proj.update();
        }, this.timer);
    }
}

// Helper function to randomize value
function randomize(min, max) {
    return (Math.floor(Math.random() * (max - min) ) + min);
}