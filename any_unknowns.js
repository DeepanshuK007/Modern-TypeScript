//! Any Type
//? The any type is the most flexible type in TS. It is essentially turns off all type checkings for the variables or expressions it is applied to.
var maxNumber = Number.MAX_SAFE_INTEGER;
//* if u would have written just number it wont have recognised the type.
console.log(maxNumber);
var myFavNum = 5;
myFavNum = "VS_Code";
myFavNum = true;
//! Use Cases:
//* Working with Dynamic Data: When dealing with data from dynamic sources like user inputs, network responses, or deserialized JSON objects, the any type can be useful.
//* Migration from JS: When migrating an existing JS codebase to TS, using the any type can be convinent way to quickly annotate variables and functions without immediately specifying their precise type. 
//! Unknown type:
//? The uunknown type is a safer alternative to any because it still enforces type checking(once a type declered cannot to overwritten) and type safety(ensures that the property u are appling doesnot exist on the type declared).
//? Variables of type unknown can hold values of any type, but u must perform type checks or type assertions before using them in specific ways.
// let myFavNum1 = 24;
// myFavNum1 = true (type checking)
// myFavNum1.map(() => {  (Type safety)
// })
//! Use Cases:
//? This is a safer alternative to any because it still enforces type checking and type safety.
//? Var of type unknown can hold values of any type, but u must perform type checks or type assertions before using them in specific ways.
var num2;
num2 = 5;
// num2 = "Namaste";
num2 = true; // ok
//? Ex of type checking:
if (typeof num2 === "number") {
    console.log(num2 + 5);
}
else if (typeof num2 === "boolean") {
    console.log(num2);
}
