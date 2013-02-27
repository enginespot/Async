Async
=====

async library for javascript

code sample:
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
