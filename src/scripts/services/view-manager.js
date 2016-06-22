import {gameView} from '../views/game';
import {welcomeView} from '../views/welcome';

export const viewManager = {
    GAME: gameView,
    WELCOME: welcomeView,
    _current: null,
    switchView(view) {
        if (this._current !== view) {
            this._current.off();
            this._current = view;
            this._current.on();
        }
    }
};