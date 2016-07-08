import {Drawable} from './drawable';
import {ellipse} from '../assets/_ellipse';
import {blueBall} from '../assets/blue-ball';
import {redBall} from '../assets/red-ball';
import {darkRedBall} from '../assets/dark-red-ball';
import {brownBall} from '../assets/brown-ball';
import {gameState} from '../services/game-state';
import {gameCanvas} from '../services/game-canvas';
import {Coin} from './coin';
import {soundPlayer} from '../services/sound-player';


export class Leaf extends Drawable {
    waveH = 100;
    waveSpeed = 11.5;

    health = 100;
    state = {
        visible: !!Math.round(Math.random()),
        waves: false,
        get hidden() {
            return !this.waves && !this.visible;
        }
    };

    speed = Math.random() * 0.035;
    respawnProb = Math.random();

    constructor(data) {
        super(data);

        if (!gameCanvas.width || !gameState.sizeX) {
            throw new Error(`gameCanvas.width: ${gameCanvas.width} or gameState.sizeX: ${gameState.sizeX} not defined`);
        }

        let gridWidth = this.gridWidth = this.canvas.width / gameState.sizeX;
        let gridHeight = this.gridHeight = this.canvas.height / gameState.sizeY;

        this.x = ~~((this.data.x + .5) * gridWidth);
        this.y = ~~((this.data.y + .5) * gridHeight);

        if (!data.special) {
            let extra = ~~(Math.random() * 100);
            if (extra == 2 && gameState.level > 2) {
                this.extra = 'darkRed';
            } if (extra == 3 && gameState.level > 2) {
                this.extra = 'brown';
            } else if (extra >= 60 && extra < 90)
                this.extra = 'blue';
            else if (extra >= 93)
                this.extra = 'red';
        } else {
            if (data.special.coin) {
                this.coin = new Coin({level: gameState.level, x: this.x, y: this.y});
                this.coin.setCanvas(this.canvas);
            }
        }

    }

    hide() {
        this.state.visible = false;
        if (this.playerOn) {
            gameState.kill();
        }
        this.state.waves = true;
        soundPlayer.play('leaf');
    }

    clear() {
        this.state.waves = false;
    }

    show() {
        this.state.visible = true;
        this.state.waves = false;
        this.health = 100;
    }

    calculate(delta, timestamp, lastTimestamp) {
        if (this.state.visible) {
            this.health -= this.speed * delta;
            if (this.health < 0) {
                this.hide();
            }
        }

        if (this.state.waves) {
            this.waveH -= this.waveSpeed * delta * 0.025;
            if (this.waveH <= 0) {
                this.waveH = 100;
                this.state.waves = false;
            }

        }

        if (this.state.hidden) {
            if (Math.random() >= 0.01 * this.respawnProb + 0.99) {
                this.show();
            }
        }

    }

    render(timestamp) {
        if (this.state.visible) {
            this._renderLeaf(timestamp);
        }

        if (this.state.waves) {
            this._renderWaves(timestamp);
        }
    }

    _getLeafSize() {
        let max = (this.canvas.width / gameState.sizeX) * 0.8;
        let min = 28;
        return ((max - min) * this.health / 100) + min;
    }

    _getWaveSize() {
        return ((this.canvas.width / gameState.sizeX) * 0.8) * ((100 - this.waveH) / 100) * 0.8;
    }

    _renderLeaf() {
        this.ctx.fillStyle = 'rgb(170, 170, 85)';
        this.ctx.strokeStyle = 'rgb(0, 255, 170)';
        this.ctx.lineWidth = 1.5;

        let size = this._getLeafSize();

        ellipse(this.ctx, this.x, this.y, size, size, true, true);

        switch (this.extra) {
            case 'blue':
                this.ctx.drawImage(blueBall, this.x - (blueBall.width >> 1), this.y - (blueBall.height >> 1));
                break;
            case 'red':
                this.ctx.drawImage(redBall, this.x - (redBall.width >> 1), this.y - (redBall.height >> 1));
                break;
            case 'brown':
                this.ctx.drawImage(brownBall, this.x - (brownBall.width >> 1), this.y - (brownBall.height >> 1));
                break;
            case 'darkRed':
                this.ctx.drawImage(darkRedBall, this.x - (darkRedBall.width >> 1), this.y - (darkRedBall.height >> 1));
                break;
        }

        if (this.coin && !this.playerOn) {
            this.coin.render();
        }
    }

    _renderWaves() {
        let r = this._getWaveSize();
        this.ctx.strokeStyle = `rgba(255,255,255,${this.waveH / 100})`;
        this.ctx.lineWidth = 1;

        ellipse(this.ctx, this.x, this.y, r, r, true, false);
        this.ctx.lineWidth = 2;
        ellipse(this.ctx, this.x, this.y, r >> 1, r >> 1, true, false);
    }

    stepOn() {
        if (!this.state.visible) {
            return false;
        }

        this.playerOn = true;

        if (this.extra) {
            switch (this.extra) {
                case 'blue': 
                    gameState.addPoints(50); 
                    soundPlayer.play('ball');
                    break;
                case 'red':
                    gameState.addPoints(1000);
                    soundPlayer.play('ball');
                    break;
                case 'brown':
                    gameState.addPoints(-500);
                    soundPlayer.play('ball');
                    break;
                case 'darkRed':
                    let rand = Math.random();
                    if (rand > 0.4) {
                        gameState.player.lives++;
                        soundPlayer.play('one-up');
                    } else {
                        this.hide();
                    }
                    break;
            }

            gameState.catchBall(this.extra);
            
            this.extra = null;
        } else {
            soundPlayer.play('jump');
        }
        return true;
    }

    stepOff() {
        this.playerOn = false;
    }
}