var Async;
Async = (function() {

    function Async() {
        this.callbacks = [];
        this.running = false;
    }

    Async.prototype.series = function(func) {
        if (this.running) {
            return this.callbacks.push(func);
        } else {
            this.running = true;
            return func();
        }
    };

    Async.prototype.callback = function() {
        if (this.callbacks.length > 0) {
            return this.callbacks.shift()();
        }
    };

    return Async;

})();