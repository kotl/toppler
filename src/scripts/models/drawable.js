import {gameCanvas} from '../services/game-canvas';

export class Drawable {
    /**
     *
     * @param {Object.<*>} data
     */
    constructor(data) {
        if (!gameCanvas.ctx) {
            throw new Error('gameCanvas service not configured');
        }
        if (!data || !data.parent || !data.parent.internalCanvas) {
            this.ctx = gameCanvas.ctx;
            this.canvas = gameCanvas.canvas;
        } else {
            this.setCanvas(data.parent.internalCanvas);
            data.parent.push(this);
        }
        this.data = data;
        if (this._generateCache) {
            this._generateCache();
        }
    }

    /**
     * Empty action to calculate properties
     * Implement logic if needed
     * @param {Number} timestamp
     */
    calculate(delta, timestamp, lastTimestamp) {}

    setParent(container) {
        this.parent = container;
        if (container.internalCanvas) {
            this.setCanvas(container.internalCanvas);
        }
    }

    resetParent() {
        this.parent = null;
    }

    setCanvas(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    render() {
        throw new Error('Render method not initialized');
    }
}