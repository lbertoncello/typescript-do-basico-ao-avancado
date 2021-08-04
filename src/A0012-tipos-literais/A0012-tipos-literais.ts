let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
// Limitamos 'a' a ser do 'tipo' 100
let a = 100 as const; // eslint-disable-line
// ERRO!
// a = 120;

const pessoa = {
	// O campo nome não pode mais mudar!
	nome: 'Lucas' as const,
	sobrenome: 'Andrade',
};
// ERRO!
// pessoa.nome = 'Lucas2';

// Forma mais segura de se utilizar enum através de union types e literal types
// Diferentemente do enum nativo do TS, não será possível escolher um valor fora da lista
function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
	return cor;
}

console.log(escolhaCor('Vermelho'));
// ERRO!
// console.log(escolhaCor('Preto'));

// Module mode
export default 1;
