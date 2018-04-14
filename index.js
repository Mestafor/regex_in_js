'use strict';
// i -ignore case
// g - find global

const string = 'Is this This?';
const regexp1 = new RegExp('it', 'g');
const r2 = /is/gi;

console.log(regexp1.test(string));
console.log(r2.exec(string));
console.log(string.match(r2));

console.log(string.replace(r2, str => '***'));
console.log(string.replace(r2, '***'));
