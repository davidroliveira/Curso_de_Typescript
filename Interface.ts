console.clear();

interface Animal2 {
    mover(distancia: number): void;
}

class Minhoca implements Animal2 {
    mover (distancia: number) {
        console.log('Minhoca rasteja ' + distancia + ' metros');
    }
}

class Cavalo implements Animal2 {
    mover (distancia: number) {
        console.log('Cavalo rasteja ' + distancia + ' metros');
    }
}

let cavalo: Cavalo = new Cavalo();
cavalo.mover(4);

let animal: Animal2 = new Cavalo();
animal.mover(5);

animal = new Minhoca();
animal.mover(3);
////////////////////////////////////////////////////////////////////////
interface Animal3 {
  mover(distancia: UnidadeMedida): void;
}

class Minhoca3 implements Animal3 {
    mover(distancia: UnidadeMedida) {
        console.log('Minhoca rasteja ' + distancia.distancia());
    }
}

class Cavalo3 implements Animal3 {
    mover(distancia: UnidadeMedida) {
        console.log('Cavalo trotou ' + distancia.distancia());
    }
}

interface UnidadeMedida {
    distancia(): string;
}

class Metros implements UnidadeMedida {
    constructor(private Valor: number) {

    }

    distancia(): string {
        return this.Valor + ' metros';
    }
}

class Milimetros implements UnidadeMedida {
    constructor(private Valor: number) {
        
    }

    distancia(): string {
        return this.Valor + ' milimetros';
    }
}

let cavalo3: Cavalo3 = new Cavalo3;
cavalo3.mover(new Metros(4));

let animal3: Animal3 = new Cavalo3();
animal3.mover(new Metros(3))

animal3 = new Minhoca3();
animal3.mover(new Milimetros(7));
animal3.mover(new Metros(8));