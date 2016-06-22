import {Drawable} from './drawable';
import {water} from '../assets/water';

export class Water extends Drawable {
    render() {
        this.ctx.drawImage(water, this.data.x, this.data.y);
    }
}
