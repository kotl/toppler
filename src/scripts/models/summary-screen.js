import {Drawable} from './drawable';
import {blueBall} from '../assets/blue-ball';
import {redBall} from '../assets/red-ball';
import {darkRedBall} from '../assets/dark-red-ball';
import {brownBall} from '../assets/brown-ball';

export class SummaryScreen extends Drawable {
    render() {
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 0.5;
        this.ctx.fillStyle = '#000000';

        let halfWidth = this.canvas.width >> 1;

        this.ctx.fillRect(halfWidth - 178, 42, 360, 300);
        this.ctx.fillStyle = '#ffaa55';
        this.ctx.fillRect(halfWidth - 180, 40, 360, 300);
        this.ctx.strokeRect(halfWidth - 180, 40, 360, 300);

        this.ctx.font = '20px "Trebuchet MS"';
        this.ctx.fillStyle = '#000000';
        let width = this.ctx.measureText('RESUME').width;
        this.ctx.fillText('RESUME', this.canvas.width - width >> 1, 80);

        this.ctx.font = '12px "Trebuchet MS"';

        this.ctx.fillText('POINTS:', halfWidth - 100, 120);
        this.ctx.fillText(this.data.points, halfWidth + 30, 120);

        this.ctx.fillText('TIME:', halfWidth - 100, 150);
        var time = Math.round(((new Date().getTime()) - this.data.startTime) / 1000);
        var seconds = time % 60;
        var minutes = Math.floor(time / 60);
        this.ctx.fillText(`${minutes} min ${seconds} sec`, halfWidth + 30, 150);

        this.ctx.drawImage(blueBall, halfWidth - 120 - (blueBall.width >> 1), 200 - (blueBall.height >> 1));
        this.ctx.drawImage(redBall, halfWidth - 43 - (redBall.width >> 1), 200 - (redBall.height >> 1));
        this.ctx.drawImage(darkRedBall, halfWidth + 43 - (darkRedBall.width >> 1), 200 - (darkRedBall.height >> 1));
        this.ctx.drawImage(brownBall, halfWidth + 120 - (brownBall.width >> 1), 200 - (brownBall.height >> 1));

        this.ctx.fillStyle = '#000000';
        let redText = this.ctx.measureText(this.data.balls.red).width;
        let blueText = this.ctx.measureText(this.data.balls.blue).width;
        let darkRedText = this.ctx.measureText(this.data.balls.darkRed).width;
        let brownText = this.ctx.measureText(this.data.balls.brown).width;

        this.ctx.fillText(this.data.balls.blue, ((this.canvas.width - blueText) >> 1) - 120, 225);
        this.ctx.fillText(this.data.balls.red, ((this.canvas.width - redText) >> 1) - 43, 225);
        this.ctx.fillText(this.data.balls.darkRed, ((this.canvas.width - darkRedText) >> 1) + 43, 225);
        this.ctx.fillText(this.data.balls.brown, ((this.canvas.width - brownText) >> 1) + 120, 225);

        this.ctx.font = '20px "Trebuchet MS"';
        width = this.ctx.measureText('Click to restart').width;

        this.ctx.fillText('Click to restart', (this.canvas.width - width)/2, 280);

    }
}