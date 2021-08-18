/* eslint-disable @typescript-eslint/no-namespace */
/*
 * No TS não é recomendável a utilização de namespace, uma vez que a mesma
 * funcionalidade pode ser obtida através do uso de modules que é preferível,
 * uma vez que se trata de um recurso nativo do JS.
 */
var MeuNamespace;
(function (MeuNamespace) {
    MeuNamespace.nomeDoNamespace = 'Lucas';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoaDoNamespace = new PessoaDoNamespace('Lucas');
    console.log(pessoaDoNamespace);
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace = 'Outro namespace';
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
// Erro! Essa classe só existe dentro do namespace
// const pessoa = new PessoaDoNamespace('Lucas');
var pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Lucas');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/*
 * Como importar um namespace em TS
 */
/// <reference path="./module.ts" />
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
