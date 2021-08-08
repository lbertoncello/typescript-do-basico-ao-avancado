// Declaration merging
interface Pessoa {
	nome: string;
}

interface Pessoa {
	readonly sobrenome: string;
}

interface Pessoa {
	readonly enderecos: readonly string[];
}

// Idade se torna opcional
interface Pessoa {
	readonly idade?: number;
}

// ERRO! Ao declarar uma mesma interface duas vezes suas propriedades se fundem
// const pessoa: Pessoa = {
// 	nome: 'Lucas',
// };
export const pessoa: Pessoa = {
	nome: 'Lucas',
	sobrenome: 'Bertoncello',
	enderecos: ['Av. Brasil'],
	idade: 30,
};

console.log(pessoa);
// ERRO! readonly string[] não permite push
// pessoa.enderecos.push('Rua nova');
console.log(pessoa);
