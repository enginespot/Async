// Generated by CoffeeScript 1.5.0

/*
Async Library for Node,Browser
*/


(function() {

  (function(define) {
    define("Async", function(require) {
      var Async;
      Async = (function() {

        function Async() {
          this.callbacks = [];
          this.running = false;
        }

        Async.prototype.series = function(func) {
          if (this.running) {
            this.callbacks.push(func);
          } else {
            this.running = true;
            func();
          }
        };

        Async.prototype.callback = function() {
          if (this.callbacks.length > 0) {
            this.callbacks.shift()();
          } else {
            this.running = false;
          }
        };

        return Async;

      })();
      return Async;
    });
  })((typeof define === "function" && define.amd ? define : function(id, factory) {
    if (typeof module !== "undefined" && module.exports) {
      return module.exports = factory(require);
    } else {
      return window[id] = factory(function(value) {
        return window[value];
      });
    }
  }));

}).call(this);
