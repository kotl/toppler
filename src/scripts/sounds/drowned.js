import {audioContext} from '../services/audio-context';
let frameCount = audioContext.sampleRate * (3 * 0.115 + 2 * 0.005);
let part = audioContext.sampleRate * 0.115;
let pause = audioContext.sampleRate * 0.005;

let arrayBuffer = audioContext.createBuffer(1, frameCount, audioContext.sampleRate);
let buffering = arrayBuffer.getChannelData(0);

let start = 0;

for (let i = start; i < part; i++) {
    let percentage = (i - start) / part;
    buffering[i] = Math.min(Math.max(Math.sin((i-start) / 6 * (percentage+.5)) * 0.8, -0.2), 0.2);
}

start += part;

for (let i = start; i < start + pause; i++) {
    buffering[i] = 0;
}

start += pause;

for (let i = start; i < start + part; i++) {
    let percentage = (i - start) / part;
    buffering[i] = Math.min(Math.max(Math.sin((i-start) / 6 * (percentage+.5)) * 0.8, -0.2), 0.2);
}

start += part;

for (let i = start; i < start + pause; i++) {
    buffering[i] = 0;
}

start += pause;

for (let i = start; i < start + part; i++) {
    let percentage = (i - start) / part;
    buffering[i] = Math.min(Math.max(Math.sin((i-start) / 6 * (percentage+.5)) * 0.8, -0.2), 0.2);
}

export {arrayBuffer as Drowned};