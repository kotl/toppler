import {audioContext} from '../services/audio-context';
let frameCount = audioContext.sampleRate * 0.1;

let arrayBuffer1 = audioContext.createBuffer(1, frameCount, audioContext.sampleRate);
let buffering1 = arrayBuffer1.getChannelData(0);

let arrayBuffer2 = audioContext.createBuffer(1, frameCount, audioContext.sampleRate);
let buffering2 = arrayBuffer2.getChannelData(0);

let arrayBuffer3 = audioContext.createBuffer(1, frameCount, audioContext.sampleRate);
let buffering3 = arrayBuffer3.getChannelData(0);


for (let i = 0; i < frameCount; i++) {
    let percentage = i / frameCount;
    buffering1[i] = Math.sin(i / 3 * (percentage+.5)) * 0.2;
    buffering2[i] = Math.sin(i / 4 * (percentage+.5)) * 0.2;
    buffering3[i] = Math.sin(i / 5 * (percentage+.5)) * 0.2;
}

export {arrayBuffer1 as Leaf1};
export {arrayBuffer2 as Leaf2};
export {arrayBuffer3 as Leaf3};