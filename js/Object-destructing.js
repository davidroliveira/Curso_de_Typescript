"use strict";
console.clear();
var rect = { x: 0, y: 10, width: 15, heigth: 20 };
//Desconstruindo o object
//Os valores podem ser independentemente da ordem dos parametros,
//mas deixa-se na mesma ordem por legibilidade
//tem que ser o mesmo nome;
var x = rect.x, y = rect.y, width = rect.width, heigth = rect.heigth;
console.log(x, y, width, heigth);
//var {b, y, width, heigth} = rect;
//console.log(b, y, width, heigth);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Bimestre4 = /** @class */ (function () {
    function Bimestre4(nota1, nota2, nota3, nota4) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }
    return Bimestre4;
}());
var bimestre4 = new Bimestre4(7, 10, 9, 8);
//object destructing
var nota1 = bimestre4.nota1, nota2 = bimestre4.nota2, nota3 = bimestre4.nota3, nota4 = bimestre4.nota4;
console.log(nota1, nota2, nota3, nota4);
//# sourceMappingURL=Object-destructing.js.map