const toArray = (x) => Array.prototype.slice.call(x, 0);
window.$ = (a, b) => typeof b == 'undefined' ? document.querySelector(a) : a.querySelector(b);
window.$$ = (a, b) => toArray(typeof b == 'undefined' ? document.querySelectorAll(a) : a.querySelectorAll(b));
