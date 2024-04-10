"use strict";
//* Generics in TS allow you to create reusabe components or functions that can work with multiple data types.
function logAndReturn(value) {
    console.log(value);
    return value;
}
const numberResult = logAndReturn(42);
const stringResult = logAndReturn('Promy');
const boolResult = logAndReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(boolResult);
//* Generic funcs to load and return an input value
function LogAndReturn(args) {
    return args;
}
//* Using the generic funcs with diff types:
const numberResult1 = LogAndReturn(57);
const stringResult1 = LogAndReturn('Fobies');
console.log(LogAndReturn(false));
console.log(stringResult1);
// function add<T> (elem1: T, elem2: T): void {
//     if (typeof elem1 === 'string') {
//       elem1 + elem2
// } else if (typeof elem1 === 'number') {
//   elem1 + elem2
// }
//         } 
//     }
//* IMP: When we use generic and non generic type together then while calling the function we need to define the type in a matter but with non generics we dont
function add(elem1, elem2, c) {
    //console.log(elem1 + elem2)  //? + ope cannot be used with type T/U
    console.log(typeof elem1);
    console.log(typeof elem2);
    console.log(typeof c);
}
const result1 = add(5, "Mrinmoy", true);
const result2 = add('Giyan', 57, false);
console.log(add(23, "Geet", true));
console.log(result1);
console.log(result2);
