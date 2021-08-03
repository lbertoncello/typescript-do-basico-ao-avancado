const objetoA = {
	chaveA: 'Valor A',
	chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor';
// ERRO! Não é possível criar uma nova chave
// objetoA.chaveC = 'Nova chave';

const objetoB: {
	chaveA: string;
	chaveB: string;
	chaveC?: string;
	readonly chaveD: string;
	[key: string]: unknown;
} = {
	chaveA: 'Valor A',
	chaveB: 'Valor B',
};

objetoB.chaveA = 'Outro valor';
objetoB.chaveC = 'Chave opcional';
// ERRO! Não é possível alterar readonly
// objetoB.chaveD = 'Não é possível alterar';
objetoB.chaveE = 'Nova chave';
