//* Map and Filter Method in TS:

const numbers:number[] = [1, 2, 3, 4, 5];

//! Map Method
//? The map method creates a new array by applying a provided func to each element of the original array. It transforms each element and returns a new array with the transformed values.

//? 1. Doubling each number

const doubleData:number[] = numbers.map((curValue:number) => {
    return (curValue = curValue * 2)
})  //! use curly brackets when u are returning or consoling anything, but if u are just defining an operation then dont.
console.log(doubleData)

//? Converting numbers to strings:

const numberToString:string[] = numbers.map((curElm:number) => curElm.toString());
console.log(numberToString)

//! But there is a limitation to map method that it cannot filter data if put conditions. Ex-
const greaterThan = numbers.map((curElm:any) => curElm = curElm>3);
console.log(greaterThan)
//* Here the output return an arr of bool values but doesnot filter the grater value and returns it.

//! Filter method:
//? Filtering Even nos:
const evenNos:number[] = numbers.filter((num:number) => num % 2 === 0 )
console.log(evenNos)

//? Filtering nos greater than 3:
const greaterThan3:number[] = numbers.filter((nums1:number) => nums1 > 3)
console.log(greaterThan3)

//! HW: 