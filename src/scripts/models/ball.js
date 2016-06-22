import {Drawable} from './drawable';
import {blueBall} from '../assets/blue-ball';
import {redBall} from '../assets/red-ball';

export class Ball extends Drawable {
    render(timestamp) {
        if (this.data.blue) {
            this.ctx.drawImage(blueBall, this.data.x, this.data.y);
        } else {
            this.ctx.drawImage(redBall, this.data.x, this.data.y);
        }
    }
}
