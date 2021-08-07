/* Recomendado */
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion - Informa ao TS que o tipo vai garantidamente ser o especificado
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* Não recomendado */

// Non-null assertion (!) - Não recomendado
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Obrigar que um determinado tipo seja aceito
const body4 = document.querySelector('body') as unknown as number;
