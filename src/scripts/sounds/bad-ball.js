import {audioContext} from '../services/audio-context';

let frameCount = audioContext.sampleRate * 0.07;
let f = frameCount / 18;
let f2 = frameCount / 180;

let arrayBuffer = audioContext.createBuffer(1, frameCount, audioContext.sampleRate);
let buffering = arrayBuffer.getChannelData(0);

let sign = -1;
let smallSign = -1;

for (let i = 0; i < frameCount; i++) {
    buffering[i] = Math.abs(Math.min(Math.max(Math.sin(i / 20), -.3) * .3 + Math.sin(i / 11.5) * .2), 0.5) - 0.1 + .2 * Math.random();
    ((i % f) === 0) && (sign = -sign);
    ((i % f2) === 0) && (smallSign = -smallSign);
}

export {arrayBuffer as BadBall};