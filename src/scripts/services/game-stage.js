import {Container} from '../models/container';
import {Water} from '../models/water';
import {SummaryScreen} from '../models/summary-screen';

export var gameStage = {
    setup() {
        this.stage = new Container();

        // background
        this.stage.push(new Water({x: 0, y: 60}));


        let game = this.game = new Container({x: 0, y: 60, margin: 10, internalCanvas: true});
        this.stage.push(game);

        // leaf grid
        this.leafGrid = new Container({internalCanvas: true, parent: game});

        // player
        this.player = new Container({internalCanvas: true, parent: game});
    },

    showSummaryScreen(data) {
        this.game.push(new SummaryScreen(data));
        this.stage.render();
    },

    hideSummaryScreen() {
        this.game.pop();
    }
};