"use strict";
function addNumTyped(num1, num2) {
    return num1 + num2;
}
;
function addNums(num1, num2) {
    if (typeof (num1) == "string") {
        if (isNaN(parseInt(num1, 10))) {
            return 0;
        }
        num1 = parseInt(num1, 10);
    }
    return num1 + num2;
}
console.log(addNumTyped(10, 20));
console.log(addNums('10', 20));
//# sourceMappingURL=Paradigima-funcional.js.map