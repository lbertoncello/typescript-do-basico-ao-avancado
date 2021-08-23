/*
 * Arquivo apenas de declaração. É enxergado globalmente.
 * Necessário assegurar que tudo que foi declaro realmente foi implementado.
 * Neste caso, a implementação está no arquivo "modulo.ts", que é importado pelo
 * arquivo "A0063_namespaces_uteis.ts"
 */
// Faz um "merge" do namespace criado com o já existente
declare namespace _ {
	interface LoDashStatic {
		mul(array: number[]): number;
	}
}

// Faz um "merge" do namespace criado com o já existente
declare namespace NodeJS {
	interface Global {
		MINHAGLOBAL: string;
	}
}
