// EXAMPLE 1 - Replacing Spaces with Underscores in JavaScript

const str = 'bobby hadz com';
const replaced = str.replaceAll(' ', '_');

console.log(replaced); // 👉️ bobby_hadz_com

// ------------------------------------------------------------------

// // EXAMPLE 2 - Replace spaces with underscores in JavaScript using `String.replace()`

// const str = 'bobby hadz com';
// const strUnderscores = str.replace(/ /g, '_');

// console.log(strUnderscores); // 👉️ bobby_hadz_com

// ------------------------------------------------------------------

// // EXAMPLE 3 - Replace the first occurrence of a space with an underscore

// const str = 'bobby hadz com';
// const strUnderscores = str.replace(/ /, '_');

// console.log(strUnderscores); // 👉️ bobby_hadz com

// ------------------------------------------------------------------

// // EXAMPLE 4 - Replace all whitespace characters with underscores

// const str = 'bobby\nhadz\tcom abc';
// const strUnderscores = str.replace(/\s/g, '_');

// console.log(strUnderscores); // 👉️ bobby_hadz_com_abc

// ------------------------------------------------------------------

// // EXAMPLE 5 - Replace all spaces with underscores using `split()` and `join()`

// const str = 'bobby hadz com';

// const result = str.split(' ').join('_');
// console.log(result); // 👉️ bobby_hadz_com
