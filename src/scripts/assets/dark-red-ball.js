import {drawBall} from './_ball';

/**
 * Dark red ball
 * @type {HTMLCanvasElement}
 */
let canvas = document.createElement('canvas');
canvas.width = 25;
canvas.height = 25;

let ctx = canvas.getContext('2d');
drawBall(ctx, 12, 12, 'rgb(164, 4, 4)');

export {canvas as darkRedBall};