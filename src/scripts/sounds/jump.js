import {audioContext} from '../services/audio-context';

let frameCount = audioContext.sampleRate * 0.01;
let f = frameCount / 6;

let arrayBuffer = audioContext.createBuffer(1, frameCount, audioContext.sampleRate);
let buffering = arrayBuffer.getChannelData(0);

let sign = -1;

for (let i = 0; i < frameCount; i++) {
    buffering[i] = .1 * sign + .1;
    ((i % f) === 0) && (sign = -sign);
}

export {arrayBuffer as Jump};