console.clear();

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
};

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};

document.body.appendChild(button);

//console.log('david2');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Bimestre {
    
    private _notaA: number;

    constructor (public nota1: number, public nota2: number, public nota3: number, public nota4: number) {
        this._notaA = nota1;
    }

///////////get e set estilo JAVA
    public getNotaA(): number {
        return this._notaA;
    }

    public setNotaA(notaA: number) {
        this._notaA = notaA;
    }
///////////////////////////////

///////////get e set estilo C#
    get NotaA(): number {
        return this._notaA;
    }

    set notaA(notaA: number){
        this._notaA = notaA;
    }
///////////////////////////////

    soma(nota1: number, nota2: number, nota3: number, nota4: number): number {
        return nota1 + nota2 + nota3 + nota4;
    }
}

let notasBimatre1: number[] = [7,10,9,8];
//let bimestre = new Bimestre(...notasBimatre1); //Não deu certo
let bimestre = new Bimestre(notasBimatre1[0], notasBimatre1[1], notasBimatre1[2], notasBimatre1[3]);
console.log('1ª nota: ' + bimestre.nota1);

//console.log('Soma das notas do Bimestre 1: ' + bimestre.soma(...notasBimatre1)); //Não deu certo
console.log('Soma das notas do Bimestre 1: ' + bimestre.soma(notasBimatre1[0], notasBimatre1[1], notasBimatre1[2], notasBimatre1[3]));


console.log('nota A: ' + bimestre.getNotaA());
