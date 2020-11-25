"use strict";
console.clear();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
;
var greeter = new Greeter("world");
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
//console.log('david2');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Bimestre = /** @class */ (function () {
    function Bimestre(nota1, nota2, nota3, nota4) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
        this._notaA = nota1;
    }
    ///////////get e set estilo JAVA
    Bimestre.prototype.getNotaA = function () {
        return this._notaA;
    };
    Bimestre.prototype.setNotaA = function (notaA) {
        this._notaA = notaA;
    };
    Object.defineProperty(Bimestre.prototype, "NotaA", {
        ///////////////////////////////
        ///////////get e set estilo C#
        get: function () {
            return this._notaA;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bimestre.prototype, "notaA", {
        set: function (notaA) {
            this._notaA = notaA;
        },
        enumerable: false,
        configurable: true
    });
    ///////////////////////////////
    Bimestre.prototype.soma = function (nota1, nota2, nota3, nota4) {
        return nota1 + nota2 + nota3 + nota4;
    };
    return Bimestre;
}());
var notasBimatre1 = [7, 10, 9, 8];
//let bimestre = new Bimestre(...notasBimatre1); //Não deu certo
var bimestre = new Bimestre(notasBimatre1[0], notasBimatre1[1], notasBimatre1[2], notasBimatre1[3]);
console.log('1ª nota: ' + bimestre.nota1);
//console.log('Soma das notas do Bimestre 1: ' + bimestre.soma(...notasBimatre1)); //Não deu certo
console.log('Soma das notas do Bimestre 1: ' + bimestre.soma(notasBimatre1[0], notasBimatre1[1], notasBimatre1[2], notasBimatre1[3]));
console.log('nota A: ' + bimestre.getNotaA());
//# sourceMappingURL=Classes.js.map