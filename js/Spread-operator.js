"use strict";
//Não funcionou
//Talves se alterar cfg do tsconfig.json pra funcionar???
//"downlevelIteration": true, 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function Soma(nota1, nota2, nota3, nota4) {
    return nota1 + nota2 + nota3 + nota4;
}
var notasBimestre1 = [7, 10, 9, 8];
//console.log('Soma das notas do Bimestre: ' + Soma(...notasBimestre1)); Pau!!!!
console.log.apply(console, notasBimestre1);
var notasBimestre2 = [6, 8, 7, 9];
var notasBimestre3 = [7, 7, 8, 9];
var notasBimestre4 = [9, 10, 7, 9];
var notasAnual = __assign(__assign(__assign(__assign({}, notasBimestre1), notasBimestre2), notasBimestre3), notasBimestre4);
console.log(notasAnual);
//# sourceMappingURL=Spread-operator.js.map