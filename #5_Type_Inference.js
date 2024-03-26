"use strict";
//* TypeInference in TS refers to the ability of the TS compiler to automatically determine and assign types of variables, expressions, and function return values based on their usage and context in the code.
//* Tpe Inference is when the compiler gets the type , type annotation is when we write the type for out var.
let myCar = "Mercedes"; //here the compiler infers the type string for the var name.
console.log(typeof (myCar));
//todo: What are some best practices for using type inference in TS?
//? Use type inference for simple cases where the assigned value clearly indicates the intented type, like in the above case "" indkicates string.
//? When in doubt, provvide explicit type annotations to make your intentions clear.
//? Avoid relying too heavily on type inference when the assigned value is complex or ambiguous.
//? Regularly review and refactor your code to ensure that inferred types align with your intentions.
function Area(length, width) {
    return length * width;
}
let A = Area(10, 4);
console.log("The calc area is: " + A + ',' + "type of " + typeof (A));
