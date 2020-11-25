"use strict";
console.clear();
function add(num1, num2, num3) {
    console.log('num3 é ' + num3);
    if (typeof (num3) == "undefined") {
        return num1 + num2;
    }
    //No curso ensina assim, mas não rolou!
    //if (isNaN(num3)) {        
    //    return num1 + num2;
    //}   
    return num1 + num2 + num3;
}
;
console.log(add(10, 20));
//# sourceMappingURL=Optional-parameter.js.map