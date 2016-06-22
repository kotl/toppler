import {ellipse} from './_ellipse';

/**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param x
 * @param y
 * @param colorStop
 */
export function drawBall(ctx, x, y, colorStop) {
    ctx.fillStyle = "rgba(0,0,0, 0.8)";
    ellipse(ctx, x + 1.5, y + 1.5, 15, 15, false, true);

    ctx.strokeStyle = "rgba(0,0,0,0.5)";
    let radgrad = ctx.createRadialGradient(x-1.5, y-1.5, 0, x, y, 20);
    radgrad.addColorStop(0, '#ffffff');
    radgrad.addColorStop(0.2, colorStop);

    ctx.lineWidth = 0.5;
    ctx.fillStyle = radgrad;
    ellipse(ctx, x, y, 15, 15, true, true);
}
