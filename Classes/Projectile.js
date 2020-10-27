export default class Projectile {
    constructor(DOMElement) {
        this.DOMElement = DOMElement;
        document.body.appendChild(this.DOMElement);

        this.position = {
            x: 0,
            y: 0
        }

        this.velocity = {
            x: 0,
            y: 0
        }

        this.damage = 1;

        DOMElement.style.width = '20px';
        DOMElement.style.height = '20px';
        DOMElement.style.borderRadius = '10px';
        DOMElement.style.backgroundColor = 'Black';
        DOMElement.style.position = 'absolute'
    }


    calcPosition(dt) {
        this.position.x += this.velocity.x * dt * 1000;
        this.position.y += this.velocity.y * dt * 1000;
    }

    transform(pos) {
        this.DOMElement.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    }

    update(dt) {
        this.calcPosition(dt);
        this.transform(this.position);
    }
}