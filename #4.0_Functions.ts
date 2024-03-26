//! Function Declaration:
//* You can declare a func using the func keyword, followed by the func name, a list of parameters enclosed in parenthesis, and a return type. 
//* The func body contains the code that will be executed when the function is called.

//? function type is undefined instead of unknown.
// const greet = (name:string, id:number) =>  {  //here the return type shows string
//     console.log("Your name is: " + name + " and your ID is: " + id)
//     return `Your name is: ${name} and your ID is ${id}`
// }

const greet = (name:string, id:number) => `Your name is: ${name} and your ID is ${id}`
//here the return type shows string

//* When u write in back quotes u dont need to write return and in case of arrow func no need of curly brackts too.
var Greet = greet ('Kalki', 10257)
console.log(`${Greet}`, typeof(greet))

//! IMPP
//todo WAF called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome (reads the same farward and backward)

const isPalindrome = (number:string) : boolean => {
    let isPalin = number.split("").reverse().join("");
    return isPalin === number
}

console.log(isPalindrome ('12321'))

//? func to find the max of the nos.
// const max = () => {
//     let max = arr[0];
// //     for (let i=0; i<size; i++) {
// //         if (arr[i] > max){
// //             max = arr[i]
// //         } return max;
// //     }
// // }
// console.log(`Enter the total no of numbers u will enter: `)
// let size:number;
// let nos : Array<number>;
// nos = [2, 5, 7, 9]
// console.log(`Enter the nos: `)
// // for (let i=0; i<size; i++ ) {   //arr.length
// //     let input = prompt(`Enter the number: `) 
// //     arr[i] = input;
// // }
// console.log (`Max value is: `+ getMax)