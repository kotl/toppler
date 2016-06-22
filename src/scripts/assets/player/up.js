import {ellipse} from '../_ellipse';

/**
 * Player looking up
 * @type {HTMLCanvasElement}
 */
let canvas = document.createElement('canvas');
canvas.width = 80;
canvas.height = 80;

let ctx = canvas.getContext('2d');

export {canvas as playerUp};

let x = 40;
let y = 40;

ctx.strokeStyle = '#000000';

ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(x-2, y+3.5);
ctx.bezierCurveTo(x-2, y+8.5, x-2, y+8.5, x-9, y+8.5);
ctx.moveTo(x+2, y+3.5);
ctx.bezierCurveTo(x+2, y+8.5, x+2, y+8.5, x+9, y+8.5);
ctx.stroke();

ctx.lineWidth = 0.5;

let radgrad = ctx.createRadialGradient(x-5, y-3, 1, x, y, 20);
radgrad.addColorStop(0, 'rgba(255,255,255,0.8)');
radgrad.addColorStop(0.2, '#00ff00');

ctx.fillStyle = radgrad;
ellipse(ctx, x, y, 18, 17, true, true);

radgrad = ctx.createRadialGradient(x+6, y-10, 0, x, y, 20);
radgrad.addColorStop(0, 'rgba(255,255,255,0.5)');
radgrad.addColorStop(0.2, '#0000ff');
ctx.fillStyle = radgrad;

ellipse(ctx, x+5, y-8, 8, 7, true, true);

radgrad = ctx.createRadialGradient(x-4, y-10, 0, x, y, 20);
radgrad.addColorStop(0, 'rgba(255,255,255,0.5)');
radgrad.addColorStop(0.2, '#0000ff');
ctx.fillStyle = radgrad;
ellipse(ctx, x-5, y-8, 8, 7, true, true);

ctx.fillStyle = 'rgb(255,170,0)';
ctx.strokeStyle = 'rgba(0,0,0,0.7)';

ctx.beginPath();
ctx.moveTo(x, y-4);
ctx.bezierCurveTo(x-2, y+1, x-3, y+1, x, y+6);
ctx.stroke();
