import {Drawable} from './drawable';

export class Container extends Drawable {

    constructor(data) {
        super(data);
        this.items = [];
        if (data && data.internalCanvas) {
            let canvas = document.createElement('canvas');
            let margin = data.margin ? data.margin << 1 : 0;
            canvas.width = this.canvas.width - margin - (data.x || 0);
            canvas.height = this.canvas.height - margin - (data.y || 0);

            this.internalCanvas = canvas;
            this.internalCtx = canvas.getContext('2d');

            this.x = (data.x || 0) + margin;
            this.y = (data.y || 0) + margin;
        }
    }

    static _checkValidItem(item) {
        if (!(item instanceof Drawable)) {
            throw new Error(`Object ${JSON.stringify(item)} is not Drawable`);
        }
    }

    push(item) {
        Container._checkValidItem(item);
        this.items.push(item);
        item.setParent(this);
    }

    unshift(item) {
        Container._checkValidItem(item);
        this.items.unshift(item);
        item.setParent(this);
    }

    pop() {
        let item = this.items.pop();
        item.resetParent();
    }

    reset() {
        this.items.forEach(item => item.resetParent());
        this.items = [];
    }

    calculate(delta, timestamp, lastTimestamp) {
        this.items.forEach(item => item.calculate(delta, timestamp, lastTimestamp));
    }

    render() {
        if (this.internalCanvas) {
            this.internalCtx.clearRect(0, 0, this.internalCanvas.width, this.internalCanvas.height);
        }
        
        this.items.forEach(item => item.render());

        if (this.internalCanvas) {
            this.ctx.drawImage(this.internalCanvas, this.x, this.y);
        }
    }
}
