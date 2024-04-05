//!---------------------------IMP-----------------------

//? In case of Method call signature we define the type of the method for ex inside an object.

//* A function call signature refers to the declaration or definition of a func, which includes the func's name, parameters, and return type. It defines the struct and type information of a func without including the func's implementation on body.

//? Adding one func inside the object. Its more like creating an method in an object.

//! Call signatures are typically used inside object type notations to describe the shape of funcs within object types.

type Student= {
    name: string;
    age: number;
    gender?: string;
    greet: (country:string) => string  //? thsi method will have a param of type string and will return a string
    //! Here we have passed a func as a param, called METHOD CALL SIGNATURE which is just the struct of the method
}

const student1 : Student = {
    name: 'Basid',
    age: 23,
    greet: (country): string => `Welcome, My name is ${student1.name}, I am ${student1.age} yrs old and I am from ${country} `
}

const student2 : Student = {
    name: 'Basid',
    age: 23,
    greet: (country): string => `Welcome, My name is ${student2.name}, I am ${student2.age} yrs old and I am from ${country} `
}
//* If some other day a new student comes then we can just create a struct or object of that student having his details and console it. 

const introduction = (student1:Student): string => {
    const {name, age} = student1; //? Here we ahve destructured the contents of stud1
    return `Welcome, My name is ${name}, I am ${age} yrs old`
}

console.log(introduction(student1))
console.log(student1.greet("India"))
console.log(student2.greet)