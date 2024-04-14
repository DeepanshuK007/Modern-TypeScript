"use strict";
//* A typeof guard in TS lets you narrow down the type of a variable based on its runtime value. In TS, type narrowing allows you to write type-safe code by ensuring you only operate on the correct type under certain circumstances. This is particularly useful with union types and generic types.
const favHobbies = (hobby) => {
    // return hobby.map(() : void => {});
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map(() => { });
    }
    else {
        console.log(hobby);
    }
};
//? Lets break down the above code:
//* Now the param named hobby in the func favHobbies is of type string or an array of strings. The func is having a return type of array of void(nothing bu the array itself) or undefined.
//? in the if statement we have the condition wherein it checks if 'hobby' is an object (arrays are objects in JS) and if its an array.
//* If the condition is true, then the hobbby is an array so the func uses map to just 'iterate' over its elements. THe callback func is a placeholder that doesnt do anything. This line returns the result of map which is an array of void.
favHobbies("coding");
favHobbies(["football", 'badminton', 'fax']);
