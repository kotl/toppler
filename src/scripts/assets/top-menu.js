let canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 60;

export {canvas as topMenu};

let ctx = canvas.getContext('2d');

ctx.fillStyle = '#55aaff';
ctx.fillRect(0,0, canvas.width, 60);
ctx.fillStyle = '#000000';
ctx.font = '12px "Trebuchet MS"';
ctx.fillText('COINS:', 10, 34);

ctx.font = '12px "Trebuchet MS"';
let width = ctx.measureText('LIVES:').width;
ctx.fillText('LIVES:', 360, 34);

ctx.fillStyle = '#000000';
ctx.font = '12px "Trebuchet MS"';
width = ctx.measureText('POINTS:').width;
ctx.fillText('POINTS:',560,34);

ctx.fillStyle = '#cce6ff';
var dx = 50;
var dy = 0;
let pi2 = Math.PI*2;
ctx.beginPath();
ctx.arc(600+dx, 34+dy, 18, 0, pi2, true);
ctx.fill();
ctx.beginPath();
ctx.arc(625+dx, 38+dy, 18, 0, pi2, true);
ctx.fill();
ctx.beginPath();
ctx.arc(635+dx, 20+dy, 18, 0, pi2, true);
ctx.fill();
ctx.beginPath();
ctx.arc(640+dx, 38+dy, 18, 0, pi2, true);
ctx.fill();
ctx.beginPath();
ctx.arc(660+dx, 30+dy, 18, 0, pi2, true);
ctx.fill();
ctx.beginPath();
ctx.arc(680+dx, 15+dy, 10, 0, pi2, true);
ctx.fill();
ctx.beginPath();
ctx.arc(580+dx, 50+dy, 7.5, 0, pi2, true);
ctx.fill();
