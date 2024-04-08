"use strict";
//* In TS, tuples are a data structure that allows you to store a fixed -size collection of elements of different types. They are similar to arrays, but with  akey difference: the types of ELEMENTS IN TUPLES ARE FIXED and declered at the time of creation, whereas arrays can hold elements of the same type, and their size can vary.
const Person1 = ["deep", 20, true];
//const Person1: PersonInfo = [73733, 'Thapa', true];
//* The above line will show an error as the contents are not in appropriate order.
const displayPersonsInfo = (User) => {
    const [name, age, hasDrivingLicense] = User;
    console.log(`Name: ${name}, Age: ${age} and has driving license: ${hasDrivingLicense ? "Yes" : "No"}`);
};
console.log(displayPersonsInfo(Person1)); //Here we have passed User as Person1
