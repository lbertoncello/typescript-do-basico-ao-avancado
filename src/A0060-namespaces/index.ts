/* eslint-disable @typescript-eslint/triple-slash-reference */
/*
 * Como importar um namespace em TS
 */
/// <reference path="./module.ts" />
/*
 * Para funcionar, é necessário executar com o seguinte comando
 * yarn tsc .\src\A0060-namespaces\index.ts --outFile .\src\A0060-namespaces\index.js
 * E então rodar o arquivo index.js gerado
 */

console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
/*
 * Esta variável vem de ./module.ts e funciona porque o namespace e os arquivos que importam o namespace são compilados em um só arquivo
 */
console.log(varQueVaiFuncionarEmOutroArquivo);
