export var gameCanvas = {
    setup() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width = 800;
        this.canvas.height = this.height = 600;
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    }
};