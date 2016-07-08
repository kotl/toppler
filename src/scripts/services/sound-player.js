import {Jump} from '../sounds/jump';
import {Coin} from '../sounds/coin';
import {Ball} from '../sounds/ball';
import {BadBall} from '../sounds/bad-ball';
import {OneUp} from '../sounds/one-up';
import {Drowned} from '../sounds/drowned';
import {Leaf1, Leaf2, Leaf3} from '../sounds/leaf';
import {audioContext} from './audio-context';

export var soundPlayer = {
    play(sound) {
        let buffer;
        switch(sound) {
            case 'jump': buffer = Jump; break;
            case 'coin': buffer = Coin; break;
            case 'ball': buffer = Ball; break;
            case 'one-up': buffer = OneUp; break;
            case 'drowned': buffer = Drowned; break;
            case 'leaf':
                let calc = Math.random();
                if (calc < 0.34) {
                    buffer = Leaf1;
                } else if (calc < 0.67) {
                    buffer = Leaf2;
                } else {
                    buffer = Leaf3;
                }
                break;
            default: return;
        }
        let source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start();
    }
};