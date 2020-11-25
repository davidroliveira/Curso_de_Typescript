console.clear();

class Ponto {
    private _x: number = 0;
    private _y: number = 0;

    constructor(p: {x: number; y: number}) {
        this._x = p.x;
        this._y = p.y;
    }

}

let p1 = new Ponto({x: 10, y: 20});
console.log(p1);
////////////////////////////////////////////////////////////////////////////////
class Javali {
    mover(unidade2: UnidadeMedida2) {
        console.log('Javali moveu-se ' + unidade2.distancia);
    }
}

interface UnidadeMedida2 {
    distancia: number;
}

class Kilometro2 implements UnidadeMedida2 {
    distancia!: number;
}

let animal2: Javali = new Javali();
let km = new Kilometro2;
km.distancia = 0.1;
animal2.mover(km);

animal2.mover({distancia: 0.2});

