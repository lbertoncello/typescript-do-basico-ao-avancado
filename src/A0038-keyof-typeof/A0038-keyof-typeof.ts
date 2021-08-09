type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
	vermelho: 'red',
	azul: 'azul',
	verde: 'blue',
	roxo: 'purple',
};

// Typeof faz com que o tipo seja inferado através das chaves e valores do objeto coresObj
function traduzirCor(cor: CoresChaves, cores: CoresObj) {
	return cores[cor];
}

console.log(traduzirCor('roxo', coresObj));
