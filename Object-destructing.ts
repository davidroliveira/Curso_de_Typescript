console.clear();

var rect = {x: 0, y: 10, width: 15, heigth: 20};

//Desconstruindo o object
//Os valores podem ser independentemente da ordem dos parametros,
//mas deixa-se na mesma ordem por legibilidade
//tem que ser o mesmo nome;
var {x, y, width, heigth} = rect;
console.log(x, y, width, heigth);

//var {b, y, width, heigth} = rect;
//console.log(b, y, width, heigth);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Bimestre4 {
  constructor(public nota1: number, public nota2: number, public nota3: number, public nota4: number) {

  }  
}

let bimestre4: Bimestre4 = new Bimestre4(7, 10, 9, 8);

//object destructing
let {nota1, nota2, nota3, nota4} = bimestre4;

console.log(nota1, nota2, nota3, nota4);