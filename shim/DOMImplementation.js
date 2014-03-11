(function () {
    function shimDOMImplementation() {

    }
    for (var method in document.implementation)
    if (document.implementation.hasOwnProperty(method)) {
        shimDOMImplementation.prototype[method] = document.implementation[method];
    }

    if (typeof window.DOMImplementation !== 'function') {
        window.DOMImplementation = shimDOMImplementation;
    }
})();
