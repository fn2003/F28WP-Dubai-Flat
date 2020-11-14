console.log("Program has started")

// Class that spawns the projectiles
function projSpawner() {
    this.timer = 200;
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
    let velocity = 10;
    let current = 0

    // creates projectile element on the html side
    let projectile = $('<img />', { 
        id: '#projectile',
        src: 'Flat01.png',
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
    setInterval(function(){
        current += velocity;
        projectile = projectile.css({"top":current})
    },10);
}

//Creates an object from projSpawner
projSpawn = new projSpawner();
/*This is to be called when starting projectile spawning 
    ****Call this in the init function**** */
projSpawn.start();

// Helper function to randomize value
function randomize(min, max) {
    return (Math.floor(Math.random() * (max - min) ) + min);
