let x: any;
let z: unknown;

x = 100;
x = 'Lucas';
x = 900;
x = '10';
z = 200;
z = 1000;
const y = 800;

console.log(x + y);
// ERRO!
// console.log(z + y);
// O tipo unknown é semelhante ao tipo any, mas é mais seguro
if (typeof z === 'number') console.log(z + y);
