export default class Player {
    constructor(DOMElement, xInit, yInit) {
        this.DOMElement = DOMElement;
        document.body.appendChild(this.DOMElement)

        this.position = {
            x : xInit,
            y : yInit
        }
    }
}