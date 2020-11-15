export default class Player {
    constructor() {
        this.dPlayer = 100;
        this.htmlElement = document.getElementById("player");
        this.x = this.htmlElement.offsetLeft;;
    }

    move(xDir) {
        this.x += this.dPlayer * xDir;
        this.display();
    } 

    display() {
        this.fitBounds();
        this.htmlElement.style.left = this.x + "px";
        this.htmlElement.style.top = (this.htmlElement.parentElement.offsetHeight - this.htmlElement.offsetHeight) + "px";
        this.htmlElement.style.display = "block";
    }

    fitBounds() {
        let parent = this.htmlElement.parentElement;
        let iw = this.htmlElement.offsetWidth;
        let w = parent.offsetWidth;
        if (this.x < 0)
            this.x = 0;
        if (this.x > w - iw)
            this.x = w - iw;
    }
}