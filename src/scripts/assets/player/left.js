import {ellipse} from '../_ellipse';

/**
 * Player looking left
 * @type {HTMLCanvasElement}
 */
let canvas = document.createElement('canvas');
canvas.width = 80;
canvas.height = 80;

let ctx = canvas.getContext('2d');

export {canvas as playerLeft};

let x = 40;
let y = 40;

ctx.strokeStyle = '#000000';

ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(x+4,y+3.5);
ctx.bezierCurveTo(x+4, y+6.5, x, y+6.5, x+11, y+6.5);
ctx.moveTo(x-2,y+3.5);
ctx.bezierCurveTo(x-2, y+8.5, x-2, y+8.5, x-9, y+8.5);
ctx.stroke();

ctx.lineWidth = 0.5;

let radgrad = ctx.createRadialGradient(x,y-3,1,x,y,20);
radgrad.addColorStop(0, 'rgba(255,255,255,0.8)');
radgrad.addColorStop(0.2, '#00ff00');

ctx.fillStyle = radgrad;
ellipse(ctx, x, y-1, 18, 17, true, true);

radgrad = ctx.createRadialGradient(x+4,y-10,0,x,y,20);
radgrad.addColorStop(0, 'rgba(255,255,255,0.5)');
radgrad.addColorStop(0.2, '#0000ff');
ctx.fillStyle = radgrad;

ellipse(ctx, x+3, y-8, 8, 7, true, true);

radgrad = ctx.createRadialGradient(x-7, y-10,0,x,y,20);
radgrad.addColorStop(0, 'rgba(255,255,255,0.5)');
radgrad.addColorStop(0.2, '#0000ff');
ctx.fillStyle = radgrad;
ellipse(ctx, x-8, y-8, 8, 7, true, true);

radgrad = ctx.createRadialGradient(x-5.5,y-4.5,0,x,y,20);
radgrad.addColorStop(0, '#FFDA92');
radgrad.addColorStop(0.2, 'rgb(255,170,0)');
ctx.fillStyle = radgrad;

ctx.beginPath();
ctx.moveTo(x,y-3);
ctx.bezierCurveTo(x-3,y-10, x-14,y-8, x-11,y+2);
ctx.moveTo(x,y-3);
ctx.bezierCurveTo(x-1,y+8, x-7,y-3, x-11,y+2);
ctx.fill();

ctx.beginPath();
ctx.moveTo(x,y-3);
ctx.bezierCurveTo(x-3,y-10, x-14,y-8, x-11,y+2);
ctx.moveTo(x,y-3);
ctx.bezierCurveTo(x-1,y+8, x-7,y-3, x-11,y+2);
ctx.stroke();

