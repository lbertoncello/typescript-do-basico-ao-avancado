/*
 * Em alguns packages é necessários instalar um package adicional para funcionar com TS.
 * Exemplo:
 * yarn add validator
 * yarn add @types/validator -D
 * Em alguns casos os tipos já vem inclusos no package e não é necessário instalar nada adicional.
 */
import validator from 'validator';
/* Quando o package de tipos não está instalado, o TS reclama e pede para instalar. Além disso, o autocomplete não funciona. */
import _ from 'lodash';

console.log(validator.isEmail('lucas@gmail.com'));
console.log(_.clone([1, 2, 3, 4, 5]));
