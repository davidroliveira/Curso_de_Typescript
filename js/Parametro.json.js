"use strict";
console.clear();
var Ponto = /** @class */ (function () {
    function Ponto(p) {
        this._x = 0;
        this._y = 0;
        this._x = p.x;
        this._y = p.y;
    }
    return Ponto;
}());
var p1 = new Ponto({ x: 10, y: 20 });
console.log(p1);
////////////////////////////////////////////////////////////////////////////////
var Javali = /** @class */ (function () {
    function Javali() {
    }
    Javali.prototype.mover = function (unidade2) {
        console.log('Javali moveu-se ' + unidade2.distancia);
    };
    return Javali;
}());
var Kilometro2 = /** @class */ (function () {
    function Kilometro2() {
    }
    return Kilometro2;
}());
var animal2 = new Javali();
var km = new Kilometro2;
km.distancia = 0.1;
animal2.mover(km);
animal2.mover({ distancia: 0.2 });
//# sourceMappingURL=Parametro.json.js.map