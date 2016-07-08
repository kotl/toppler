import {gameStage} from './game-stage';
import {Leaf} from '../models/leaf';
import {Player} from '../models/player';
import {TopMenu} from '../models/top-menu';
import {soundPlayer} from './sound-player';

export var gameState = {
    grid: null,
    level: 1,
    points: 0,
    player: null,
    nextLive: 10000,

    reset() {
        this.level = 1;
        this.points = 0;
        this.balls = {
            blue: 0,
            red: 0,
            darkRed: 0,
            brown: 0
        };
        this.nextLive = 10000;
        this.startLevel();
        this.startTime = Date.now();
        this.player.resurrect();
    },

    startLevel() {
        this.generateGrid();
        if (!this.player) {
            this.player = new Player({parent: gameStage.player}, this);
        }
        if (!this.topMenu) {
            this.topMenu = new TopMenu();
            gameStage.stage.push(this.topMenu);
        }
        this.player.reset(this.grid);
        this.topMenu.update();
    },

    levelUp() {
        setTimeout(() => {
            gameStage.stage.render();
            this.stopGame();
            setTimeout(() => {
                ++this.level;
                this.startGame();
                this.startLevel();
                this.topMenu.update();
            }, 1000);
        });
    },

    catchBall(type) {
        this.balls[type]++;
    },

    addPoints(points) {
        this.points = Math.max(0, this.points + points * this.level);
        if (this.points > this.nextLive) {
            this.player.lives++;
            soundPlayer.play('one-up');
            this.nextLive = this.nextLive << 1;
        }
        this.topMenu.update();
    },

    kill() {
        this.player.kill();
        setTimeout(() => {

            gameStage.stage.render();
            this.topMenu.update();

            this.stopGame();
            if (this.player.lives === 0) {
                setTimeout(() => {
                    gameStage.showSummaryScreen({
                        points: this.points,
                        balls: this.balls,
                        startTime: this.startTime
                    });

                    let cb = () => {
                        gameStage.hideSummaryScreen();
                        this.reset();
                        this.restartGame();
                        document.removeEventListener('keydown', cb);
                        document.removeEventListener('click', cb);
                    };

                    setTimeout(() => {
                        document.addEventListener('keydown', cb);
                        document.addEventListener('click', cb);
                    }, 200);

                }, 1000);
            } else {
                setTimeout(() => {
                    this.startGame();
                    this.startLevel();
                    this.topMenu.update();
                }, 1000);
            }
        });
    },

    generateGrid() {
        this.grid = [];
        this.sizeX = Math.min(this.level + 6, 14);
        this.sizeY = Math.min((this.level + 7) >> 1, 8);

        gameStage.leafGrid.reset();

        for (let i = 0; i < this.sizeX; ++i) {
            for (let j = 0; j < this.sizeY; ++j) {

                if (this.grid[i] === undefined) {
                    this.grid[i] = [];
                }

                let special = null;

                if ((i === 0 && j === this.sizeY - 1)) {
                    special = {
                        start: true
                    };
                }

                if (i === this.sizeX - 1 && j === 0) {
                    special = {
                        coin: true
                    };
                }
                this.grid[i][j] = new Leaf({x: i, y: j, special, parent: gameStage.leafGrid});

                // leaf with coin
                if (i === 0 && j === this.sizeY - 1) {
                    this.grid[i][j].speed = Math.random() / 2000;
                    this.grid[i][j].show();
                }

                // start leaf
                if (i === this.sizeX - 1 && j === 0) {
                    this.grid[i][j].speed = 0;
                    this.grid[i][j].show();
                }
            }
        }

    }
};