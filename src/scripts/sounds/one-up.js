import {audioContext} from '../services/audio-context';

let frameCount = audioContext.sampleRate * 0.076;
let part = frameCount / 3;

let arrayBuffer = audioContext.createBuffer(1, frameCount, audioContext.sampleRate);
let buffering = arrayBuffer.getChannelData(0);

let sign = -1;
let initialF = 22;
let f = [
    initialF,
    initialF << 2,
    initialF << 1
];

for (let i = 0; i < frameCount; i++) {
    let currentF = f[~~(i / part)];
    buffering[i] = 0.25 * sign;
    ((i % currentF) === 0) && (sign = -sign);
}

export {arrayBuffer as OneUp};