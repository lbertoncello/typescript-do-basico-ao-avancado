const dadosCliente1: [number, string] = [1, 'Lucas'];
const dadosCliente2: [number, string, string] = [1, 'Lucas', 'Miranda'];
// O sobrenome se torna opcional
// Readonly deixa a tupla imutável
const dadosCliente3: readonly [number, string, string?] = [1, 'José'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Ana', 'C++', 'JS'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Carlos';
// ERRO! Não é possível modificar a estrutura de uma tupla
// dadosCliente1[2] = 'Miranda';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
