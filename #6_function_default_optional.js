"use strict";
//! Optional and Default Params:
//? TS allows u to define optional and default parameters in functions.
//? Optional parameters are denoted by appending a ? symbol after a parameter name, and default parameters are specified by providing a default value in the parameter declaration
const greet1 = (name, id = 1) => {
    return `Welcome to the community, ${name}: ${id}`;
};
let emp1 = greet1("Kalki");
console.log(emp1);
const Introduce = (greet2, name1, place) => {
    if (place) {
        return `${greet2}, My name is: ${name1} and I live in ${place}`;
    }
    else {
        return `${greet2}, My name is: ${name1}.`;
    }
};
let intro = Introduce("Namaste", "D_Kumar");
let intro1 = Introduce("Namaste", "D_Kumar", "Mumbai");
console.log(intro);
console.log(intro1);
