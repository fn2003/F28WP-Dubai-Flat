//projectile is a child function/class of projSpawner
export default class Projectile {
    constructor(xPos) {
        //Projectile speed and position accumulator
        this.velocity = 10;
        this.current = 0;

        // creates projectile element on the html side
        this.projectile = $('<img />', { 
            id: '#projectile',
            src: 'Flat01.png',
            alt: 'Proj'
        });
    
        //sets projectiles position and generates it on the map element
        this.projectile = this.projectile.css({"position":"absolute", "top":0, "left":xPos})
        $("#map").prepend(this.projectile)
    }

    /*  ****Helper Code. Do not uncomment unless required****
        console.log("Projectile created at: "+xPos)
        let topP = Number(projectile.css("top").replace("px",""));
    */
    
    
    //updates projectile's position every 10ms
    update() {
        setInterval(function(){
            this.current += this.velocity;
            this.projectile = this.projectile.css({"top":this.current})
        },10);
    }
}