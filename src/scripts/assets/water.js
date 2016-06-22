let canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;

export {canvas as water};

let ctx = canvas.getContext('2d');

ctx.strokeStyle = "rgb(0, 0, 0)";
ctx.lineWidth = 1;

let x1 = 0;
let x2 = 800;
let y1 = 0;
let y2 = 600;
let l = 20;

var tmpY = y1;

ctx.fillStyle = "rgb(85,85,170)";
ctx.fillRect(0, 0, 800, 600);


ctx.beginPath();
while ((tmpY += l * 0.3) < y2) {
    var tmpX = x1 - l;
    ctx.moveTo(tmpX,tmpY - l * 0.2);
    while ((tmpX += l) < x2) {
        ctx.lineTo(tmpX + 0.5 * l, tmpY + l * 0.15);
        ctx.lineTo(tmpX + l, tmpY - l * 0.15);
    }
}
ctx.stroke();


