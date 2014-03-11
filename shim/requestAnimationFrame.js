(function () {
    var lastTime = 0,
                vendors = ['webkit', 'moz', 'o'],
                requestAnimationFrame = window.requestAnimationFrame,
                cancelAnimationFrame = window.cancelAnimationFrame,
                i = vendors.length;

        // try to un-prefix existing raf
        while (--i >= 0 && !requestAnimationFrame) {
                requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
                cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'];
        }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback) {
                        var now = Date.now(), nextTime = Math.max(lastTime + 16, now);
                        return setTimeout(function() {
                                callback(lastTime = nextTime);
                        }, nextTime - now);
                };


        window.cancelAnimationFrame = clearTimeout;
    }
})();