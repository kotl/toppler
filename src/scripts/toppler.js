import {Water} from './models/water';

import {kbd} from './services/kbd';
import {gameCanvas} from './services/game-canvas';
import {gameStage} from './services/game-stage';
import {gameState} from './services/game-state';


export class Toppler {
    canvas = null;
    ctx = null;
    frame = null;
    lastTimestamp = null;

    constructor() {
        gameCanvas.setup();
        gameStage.setup();
        kbd.start();
        gameState.stopGame = () => this.stop();
        gameState.startGame = () => {
            this.lastTimestamp = Date.now();
            this.loop();
            kbd.start();
        };
        gameState.restartGame = () => this.start();
    }
    
    startLevel(level) {
        gameState.level = level;
        gameState.reset();
        kbd.start();
    }

    start() {
        this.startLevel(1);
        this.lastTimestamp = Date.now();
        this.loop();
    }

    loop() {
        this.frame = window.requestAnimationFrame(() => {
            this.loop();
            let timestamp = Date.now();
            let delta = timestamp - this.lastTimestamp;

            gameStage.stage.calculate(delta, timestamp, this.lastTimestamp);
            gameStage.stage.render();

            this.lastTimestamp = timestamp;
        });
    }

    stop() {
        window.cancelAnimationFrame(this.frame);
        kbd.stop();
    }
}