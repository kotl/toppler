import {audioContext} from '../services/audio-context';
let channels = 1;

let frameCount = audioContext.sampleRate * 0.45;
let ms100 = audioContext.sampleRate * 0.01;
let f = ~~(ms100 / 13.5);

let arrayBuffer = audioContext.createBuffer(1, frameCount, audioContext.sampleRate);
let buffering = arrayBuffer.getChannelData(0);

let sign = -1;

for (let i = 0; i < frameCount; i++) {
    if (i < ms100) {
        // max 0.5
        let value = (i / ms100) / 2;
        buffering[i] = value * sign * 0.5;
    } else {
        let value = 1 - ((i / frameCount));
        buffering[i] = value * sign * 0.5;
    }
    ((i % f) === 0) && (sign = -sign);
}

export {arrayBuffer as Coin};