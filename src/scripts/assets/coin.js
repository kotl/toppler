import {ellipse} from './_ellipse';

/**
 * Coin asset
 * @type {HTMLCanvasElement}
 */
let canvas = document.createElement('canvas');
canvas.width = 45;
canvas.height = 45;

let ctx = canvas.getContext('2d');

export {canvas as coin};


ctx.strokeStyle = "rgba(0, 0, 0, 1)";
ctx.lineWidth = 0.5;
ctx.fillStyle = "rgba(170, 170, 0, 1)";
ellipse(ctx, 25, 22, 37, 45, true, true);
ctx.fillStyle = "rgba(255, 255, 85, 1)";
ellipse(ctx, 22, 22, 40, 45, true, true);
ctx.strokeStyle = "rgba(170, 170, 0, 1)";
ellipse(ctx, 22, 22, 35, 40, true, false);