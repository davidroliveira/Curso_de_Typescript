"use strict";
console.clear();
var Minhoca = /** @class */ (function () {
    function Minhoca() {
    }
    Minhoca.prototype.mover = function (distancia) {
        console.log('Minhoca rasteja ' + distancia + ' metros');
    };
    return Minhoca;
}());
var Cavalo = /** @class */ (function () {
    function Cavalo() {
    }
    Cavalo.prototype.mover = function (distancia) {
        console.log('Cavalo rasteja ' + distancia + ' metros');
    };
    return Cavalo;
}());
var cavalo = new Cavalo();
cavalo.mover(4);
var animal = new Cavalo();
animal.mover(5);
animal = new Minhoca();
animal.mover(3);
var Minhoca3 = /** @class */ (function () {
    function Minhoca3() {
    }
    Minhoca3.prototype.mover = function (distancia) {
        console.log('Minhoca rasteja ' + distancia.distancia());
    };
    return Minhoca3;
}());
var Cavalo3 = /** @class */ (function () {
    function Cavalo3() {
    }
    Cavalo3.prototype.mover = function (distancia) {
        console.log('Cavalo trotou ' + distancia.distancia());
    };
    return Cavalo3;
}());
var Metros = /** @class */ (function () {
    function Metros(Valor) {
        this.Valor = Valor;
    }
    Metros.prototype.distancia = function () {
        return this.Valor + ' metros';
    };
    return Metros;
}());
var Milimetros = /** @class */ (function () {
    function Milimetros(Valor) {
        this.Valor = Valor;
    }
    Milimetros.prototype.distancia = function () {
        return this.Valor + ' milimetros';
    };
    return Milimetros;
}());
var cavalo3 = new Cavalo3;
cavalo3.mover(new Metros(4));
var animal3 = new Cavalo3();
animal3.mover(new Metros(3));
animal3 = new Minhoca3();
animal3.mover(new Milimetros(7));
animal3.mover(new Metros(8));
//# sourceMappingURL=Interface.js.map