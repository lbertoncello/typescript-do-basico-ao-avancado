/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Lucas';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [ 1, 2, 3 ];
let arrayDeNumeros2: number[] = [ 1, 2, 3 ];
let arrayDeStrings: Array<string> = [ 'a', 'b' ];
let arrayDeStrings2: string[] = [ 'a', 'b' ];

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    idade: 30,
    nome: 'Lucas'
}

// Funções
// Com inferência de tipo de retorno
function soma(x: number, y: number) {
    return x + y;
}

// Sem inferência de tipo de retorno
function mult(x: number, y: number): number {
    return x * y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;