/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x
 * @param {Number} y
 * @param {Number} r1
 * @param {Number} r2
 * @param {Boolean} stroke
 * @param {Boolean} fill
 */
export function ellipse(ctx, x, y, r1, r2, stroke, fill) {
    ctx.beginPath();
    ctx.moveTo(x-r1/2,y);
    ctx.bezierCurveTo(x-r1/2, y-r2/2, x+r1/2, y-r2/2, x+r1/2, y);
    ctx.bezierCurveTo(x+r1/2, y+r2/2, x-r1/2, y+r2/2, x-r1/2, y);

    fill && ctx.fill();
    stroke && ctx.stroke();

}
