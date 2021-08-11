// extends keyof restringe o generics K para apenas keys contidas em O
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
	cor: 'Rosa',
	vacinas: ['Vacina 1', 'Vacian 2'],
};

const vacinas = obterChave(animal, 'cor');

console.log(vacinas);
// ERRO! A chave 'nome' não faz parte do tipo definido no objeto animal
// console.log(obterChave(animal, 'nome'));
