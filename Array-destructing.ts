console.clear();

var x = 1, y = 2;
[x, y] = [y, x]; //Invertendo
console.log(x, y);

////////////////////////////////////////////////

var x = 10, y = 20;
var t = 0, v = 0;
[t, v] = [y, x];
console.log([t, v]);


////////////////////////////////////////////////
//destruction com ignores
var [x, , ...remaining] = [1,2,3,4];
console.log(x, remaining);

////////////////////////////////////////////////
var [x, y, ...remaining] = [1,2,3,4];
console.log(x, y, remaining);
