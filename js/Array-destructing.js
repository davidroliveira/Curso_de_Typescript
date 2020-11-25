"use strict";
var _a, _b;
console.clear();
var x = 1, y = 2;
_a = [y, x], x = _a[0], y = _a[1]; //Invertendo
console.log(x, y);
////////////////////////////////////////////////
var x = 10, y = 20;
var t = 0, v = 0;
_b = [y, x], t = _b[0], v = _b[1];
console.log([t, v]);
////////////////////////////////////////////////
//destruction com ignores
var _c = [1, 2, 3, 4], x = _c[0], remaining = _c.slice(2);
console.log(x, remaining);
////////////////////////////////////////////////
var _d = [1, 2, 3, 4], x = _d[0], y = _d[1], remaining = _d.slice(2);
console.log(x, y, remaining);
//# sourceMappingURL=Array-destructing.js.map