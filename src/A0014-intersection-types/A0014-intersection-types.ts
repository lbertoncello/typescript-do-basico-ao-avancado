type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersecao = AB & AC; // O tipo vai ter apenas 'A'

const pessoa: Pessoa = {
	idade: 30,
	nome: 'Lucas',
	sobrenome: 'Andrade',
};

// ERRO! Falta a propriedade sobrenome
// const pessoa2: Pessoa = {
// 	idade: 30,
// 	nome: 'Lucas',
// };

console.log(pessoa);

export { pessoa };
