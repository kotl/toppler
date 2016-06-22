import {coin} from '../assets/coin';
import {Drawable} from './drawable';

export class Coin extends Drawable {

    render() {
        this.ctx.drawImage(this._cache, this.data.x - (this._cache.width >> 1), this.data.y - this._cache.height * 0.65);
    }

    _generateCache() {
        this._cache = Coin.renderCoin(this.data.level);
    }

    static renderCoin(level) {
        let render = coin.cloneNode();
        let ctx = render.getContext('2d');
        ctx.drawImage(coin, 0, 0);
        ctx.font = '20px "Trebuchet MS"';
        let size = ctx.measureText(level);
        ctx.fillText(level, (render.width - size.width) >> 1, (render.height + 14) >> 1);
        return render;
    }
}