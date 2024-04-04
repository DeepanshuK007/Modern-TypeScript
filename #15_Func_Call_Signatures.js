"use strict";
//!---------------------------IMP-----------------------
const student1 = {
    name: 'Basid',
    age: 23,
    greet: (country) => `Welcome, My name is ${student1.name}, I am ${student1.age} yrs old and I am from ${country} `
};
const student2 = {
    name: 'Basid',
    age: 23,
    greet: (country) => `Welcome, My name is ${student2.name}, I am ${student2.age} yrs old and I am from ${country} `
};
//* If some other day a new student comes then we can just create a struct or object of that student having his details and console it. 
const introduction = (student1) => {
    const { name, age } = student1; //? Here we ahve destructured the contents of stud1
    return `Welcome, My name is ${name}, I am ${age} yrs old`;
};
console.log(introduction(student1));
console.log(student1.greet("India"));
console.log(student2.greet);
