//* In TS, the bool type represents a value that can be either true or false. It is one of the basic primitive types in the lang.

let isMyNameVinod:boolean = true;
let isDone:boolean = true;
let hasStarted:boolean = false;

//? Write a TS func called isEven that takes a number as a parameter and returns true if the number is even and false otherwise.

// const isEven = (num:number) => {
//     if (num % 2 == 0) {
//         return true;
//     } else {
//         false
//     }
// }

//! Imp: Understand the syntax for func, it too has type annotations
function isEven (a:number) : boolean {
    return a%2 === 0 ?true:false ;
}

console.log(isEven(5))

//! BigInt Type
//?It is a built in type that allows to work with numbers that are larger than the range supported by regular number type.
//? BigInt literals are written by appending the n suffix to an integer literal.
//? In JS we cant read the whole numbers beyond 2 raise to power 53

const bigIntNumber1 = 9007199254740991n //* max value of bigint in js
const bigNum1:bigint = 98764321n;//BigInt
console.log(bigNum1)