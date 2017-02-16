import {Drawable} from './drawable';
import {playerUp} from '../assets/player/up';
import {playerDown} from '../assets/player/down';
import {playerLeft} from '../assets/player/left';
import {playerRight} from '../assets/player/right';
import {cross} from '../assets/cross';
import {soundPlayer} from '../services/sound-player';

import {kbd} from '../services/kbd';

export class Player extends Drawable {

    constructor(data, game) {

        super(data);
    this.assets = {
        up: playerUp,
        down: playerDown,
        left: playerLeft,
        right: playerRight
    };

	this.dead = false;
        this.lives = 4;

        this.direction = data && data.direction || 'left';
        this.game = game;

        kbd.on('up', () => this.moveUp());
        kbd.on('down', () => this.moveDown());
        kbd.on('left', () => this.moveLeft());
        kbd.on('right', () => this.moveRight());
    }

    reset(grid) {
        this.grid = grid;

        this.position = {
            x: 0,
            y: this.grid[0].length - 1
        };

        this.dead = false;
    }

    resurrect() {
        this.lives = 4;
    }
 
    render() {
        if (!this.grid) {
            return;
        }

        let leaf = this.grid[this.position.x][this.position.y];
        if (!this.dead) {
            let posX = leaf.x - (this.assets[this.direction].width >> 1);
            let posY = leaf.y - (this.assets[this.direction].height >> 1);
            this.ctx.drawImage(this.assets[this.direction], posX, posY);
        } else {
            let posX = leaf.x - (cross.width >> 1);
            let posY = leaf.y - (cross.height >> 1);
            this.ctx.drawImage(cross, posX, posY);
        }
    }

    moveUp() {
        this.direction = 'up';
        if (this.position.y == 0) {
            return;
        }
        this.stepOff();
        --this.position.y;
        this._verifyStep();
    }

    moveDown() {
        this.direction = 'down';
        if (this.position.y == this.grid[0].length -1) {
            return;
        }
        this.stepOff();
        ++this.position.y;
        this._verifyStep();
    }

    moveLeft() {
        this.direction = 'left';
        if (this.position.x == 0) {
            return;
        }
        this.stepOff();
        --this.position.x;
        this._verifyStep();
    }

    moveRight() {
        this.direction = 'right';
        if (this.position.x == this.grid.length -1) {
            return;
        }
        this.stepOff();
        ++this.position.x;
        this._verifyStep();
    }

    stepOff() {
        this.grid[this.position.x][this.position.y].stepOff();
    }

    kill() {
        soundPlayer.play('drowned');
        this.dead = true;
        --this.lives;
    }

    _verifyStep() {
        let leaf = this.grid[this.position.x][this.position.y];

        if (leaf.coin) {
            this.game.levelUp();
            soundPlayer.play('coin');
        }

        if (!leaf.stepOn()) {
            this.game.kill();
        }
    }

}