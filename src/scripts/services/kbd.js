export const kbd = {
    keyCodes: {
        38: 'up',
        40: 'down',
        37: 'left',
        39: 'right'
    },

    cb: null,

    start() {
        if (this.cb) {
            return;
        }

        this.cb = (e) => {
            if (this.keyCodes[e.keyCode]) {
                this._callbacks[this.keyCodes[e.keyCode]].forEach(cb => cb());
            }
        };
        document.addEventListener('keydown', this.cb);
    },

    stop() {
        document.removeEventListener('keydown', this.cb);
        this.cb = null;
    },

    _callbacks: {
        up: [],
        down: [],
        left: [],
        right: []
    },

    on(keyCode, callback) {
        let availableKeys = Object.keys(this._callbacks);
        if (availableKeys.indexOf(keyCode) === -1) {
            throw new Error(`keyCode ${keyCode} not found. Available key codes: ${availableKeys.join(', ')}`);
        }

        this._callbacks[keyCode].push(callback);
    }
};