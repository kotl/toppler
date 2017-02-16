import {Drawable} from './drawable';
import {coin} from '../assets/coin';
import {topMenu} from '../assets/top-menu';
import {Coin} from './coin';
import {playerDown as player} from '../assets/player/down';
import {gameState} from '../services/game-state';

export class TopMenu extends Drawable {
    constructor() {
      super()
      this._rendered = false;
    }
    update() {
        this._rendered = false;
    }
    render() {

        if (this._rendered) {
            return;
        }

        this.ctx.drawImage(topMenu, 0, 0);

        for (let i = gameState.level-2; i > 0; --i) {
            this.ctx.drawImage(coin, 60 + i * 7, 7 + 1 * (i % 2));
        }

        if (gameState.level > 1) {
            this.ctx.drawImage(Coin.renderCoin(gameState.level - 1), 60, 7);
        }

        for (let i = 0; i < gameState.player.lives-1; ++i) {
            this.ctx.drawImage(player, 380 + i * 25, -10);
        }


        this.ctx.fillStyle = '#aa0000';
        this.ctx.font = 'bold 12px "Trebuchet MS"';
        let width = this.ctx.measureText(gameState.points).width;
        this.ctx.fillText(gameState.points, 680 - (width >> 1), 34);

    }
}