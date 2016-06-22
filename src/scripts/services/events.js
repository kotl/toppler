export const events = {
    _events: {},
    sub(e, cb) {
        if (!this._events[e]) {
            this._events[e] = [];
        }

        this._events[e].push(cb);
    },
    unsub(e, cb) {
        if (!this._events[e]) {
            return;
        }
        let index = this._events[e].indexOf(cb);
        if (index !== -1) {
            this._events[e].splice(index, 1);
        }
    },
    pub(e, data) {
        if (this._events[e]) {
            this._events[e].forEach(cb => cb(data));
        }
    }
};