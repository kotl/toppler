/**
 * Cross
 * @type {HTMLCanvasElement}
 */
let canvas = document.createElement('canvas');
canvas.width = 35;
canvas.height = 75;

let ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';

let x = canvas.width >> 1;
let y = canvas.height >> 1;
ctx.lineWidth = 4;
ctx.strokeStyle = 'white';
ctx.strokeRect(x-2.5, y-25, 5, 50);
ctx.strokeRect(x-15, y-12, 30, 5);
ctx.strokeStyle = '#ffaa55';
ctx.lineWidth = 3;
ctx.strokeRect(x-2.5, y-25, 5, 50);
ctx.strokeRect(x-15, y-12, 30, 5);
ctx.fillRect(x-2.5, y-25, 5, 50);
ctx.fillRect(x-15, y-12, 30, 5);

export {canvas as cross};