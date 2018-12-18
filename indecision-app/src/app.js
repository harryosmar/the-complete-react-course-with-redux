import deafultSubstract, { add, multiply } from './playground/math.js';
import isSenior, { canDrink, isAdult } from './playground/person.js';
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('app is running!!');
console.log(add(1, 2), multiply(3,4), deafultSubstract(6,1));
console.log(isAdult(18), canDrink(21), isSenior(65));
console.log('email validation', validator.isEmail('foo@bar.com'));

ReactDOM.render(<p>JSX Paragraph</p>, document.getElementById('placedhere'));