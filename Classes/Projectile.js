export default class Projectile {
    constructor(xPos, yPos, xVel, yVel, damage, color) {
        const DOMElement = document.createElement('div');
        DOMElement.style.width = '20px';
        DOMElement.style.height = '20px';
        DOMElement.style.borderRadius = '10px';
        DOMElement.style.backgroundColor = color;
        DOMElement.style.position = 'absolute';
        document.body.appendChild(DOMElement);

        this.position = {
            x: xPos,
            y: yPos
        }

        this.velocity = {
            x: xVel,
            y: yVel
        }

        this.damage = damage;
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