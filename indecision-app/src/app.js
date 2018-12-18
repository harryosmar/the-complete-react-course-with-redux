import deafultSubstract, { add, multiply } from './playground/math.js';
import isSenior, { canDrink, isAdult } from './playground/person.js';

console.log('app is running!!');
console.log(add(1, 2), multiply(3,4), deafultSubstract(6,1));
console.log(isAdult(18), canDrink(21), isSenior(65));