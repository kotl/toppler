import {drawBall} from './_ball';

/**
 * Blue ball
 * @type {HTMLCanvasElement}
 */
let canvas = document.createElement('canvas');
canvas.width = 25;
canvas.height = 25;

let ctx = canvas.getContext('2d');
drawBall(ctx, 12, 12, 'rgb(0, 0, 255)');

export {canvas as blueBall};