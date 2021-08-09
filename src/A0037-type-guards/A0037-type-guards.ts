/*
 * --- Type Guards ---
 * Em uma função que aceita múltiplos tipos, é necessário tratar as operações
 * de acordo com esses tipos
 */
export function add(a: unknown, b: unknown): number | string {
	if (typeof a === 'number' && typeof b === 'number') return a + b;

	return `${a} + ${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

interface Pessoa {
	nome: string;
	tipo: 'pessoa';
}
interface Animal {
	cor: string;
	tipo: 'animal';
}

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
	tipo: 'pessoa' = 'pessoa';

	constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal) {
	// if ('nome' in obj) console.log(obj.nome);
	// if (obj instanceof Aluno) console.log(obj.nome);
	switch (obj.tipo) {
		case 'pessoa':
			console.log(obj.nome);
			return;
		case 'animal':
			console.log('Isso é um animal', obj.cor);
			return;
	}
}

mostraNome(new Aluno('João'));
mostraNome({ cor: 'branco', tipo: 'animal' });
