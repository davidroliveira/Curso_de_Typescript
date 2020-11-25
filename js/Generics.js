"use strict";
console.clear();
var Greeter2 = /** @class */ (function () {
    function Greeter2(message) {
        this.greeting = message;
    }
    Greeter2.prototype.greet = function () {
        return this.greeting;
    };
    return Greeter2;
}());
;
var greeter2 = new Greeter2("Hello world");
var button2 = document.createElement('button');
button2.textContent = "Say Hello";
button2.onclick = function () {
    alert(greeter2.greet());
};
document.body.appendChild(button2);
//console.log('david2');
//# sourceMappingURL=Generics.js.map