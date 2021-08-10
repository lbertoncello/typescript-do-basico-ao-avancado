// Encadeamento opcional e Operador de coalescência nula
type Documento = {
	titulo: string;
	texto: string;
	data?: Date;
};

const documento: Documento = {
	titulo: 'Título',
	texto: 'Texto',
};

console.log(documento);
console.log(documento.data);
/*
 * --- Encadeamento opcional ---
 * Retorna undefined se a entrada opcional data estiver undefined (ao invés de disparar erro)
 */
console.log(documento.data?.toDateString());
/*
 * --- Coalescência nula ---
 * Se a expressão avaliada for null ou undefined, retorna o lado direito da operação,
 * senão, retorna a própria expressão avaliada
 */
console.log(documento?.data?.toDateString() ?? 'Data não definida');
console.log(null ?? 'Isto é null');
console.log(undefined ?? 'Isto é undefined');
console.log(false ?? 'Isto é false');
console.log(0 ?? 'Isto é 0');
console.log('' ?? 'Isto é string vazia');
