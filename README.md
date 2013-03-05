Async
=====

async library for javascript

code sample:

```javascript
var async = new Async();
function fun1() {
    var num = arguments[0];
    var time = arguments[1];
    setTimeout(
        function () {
            console.log(num);
            async.callback();
        }, time);
}
async.series(fun1.bind(null, 1, 1000));
async.series(fun1.bind(null, 2, 2000));
async.series(fun1.bind(null, 3, 1000));
async.series(fun1.bind(null, 4, 5000));
async.series(fun1.bind(null, 5, 1000));
```
http://jsfiddle.net/c7KqT/2/

```javascript
var async=new Async();
function fun1() {
    var num = arguments[0];
    Repeat((function (num) {
        console.log(num);
    }).bind(null, num))
    .every(1, 's')
    .for(3, 's')
    .start
    .now()
    .then(function () {
        async.callback();
    });
}
async.series(fun1.bind(null,1));
async.series(fun1.bind(null,2));
async.series(fun1.bind(null,3));
async.series(fun1.bind(null,4));
async.series(fun1.bind(null,5));
```


http://jsfiddle.net/c7KqT/1/
