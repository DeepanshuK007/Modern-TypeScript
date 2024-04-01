"use strict";
const fruits = ["apple", "banana", "orange", "mango"];
//todo Adding elements to an array using push:
const updatedFruits = fruits.push("kiwi"); //? Adds at the end
//! unshift inserts at the start
const insertAtStart = fruits.unshift("Dragon_Fruit"); //donot shift
console.log(updatedFruits); //? returns us the position at which pushed not the value nor the index
console.log(fruits);
//todo Removing elements from an array using pop:
let lastElementRemovedFromArray = fruits.pop();
//! shift removes from the start
//* pop returns the last element removed but shift does not.
let removeFromStart = fruits.shift();
console.log(lastElementRemovedFromArray);
//! Iterating over elements:
//? You can iterate over the elements of an array using various looping constructors such as for, for...of, or array methods like forEach.
//* for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); //* gives the index values as output
}
//* for...of/...in loop
//? for in loop (iterates over indices) and for of (iterates over value)
for (const fruit of fruits) { //* returns the values, here we declare a var for the individual element in the arr first
    console.log(fruit);
}
for (const fruit in fruits) { //* returns the index
    console.log(fruit);
}
//* forEach
fruits.forEach((fruit) => {
    console.log(fruit);
});
