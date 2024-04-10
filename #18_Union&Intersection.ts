//? Union types allow you to specify that a variable can hold values of multiple types. You use the '|' pipe symbol to define a union type. 

//* In TS, when using a union type, it is essential to ensure that atleast one of the types in the union requires all the props. Failure to do so will result in a type error during compilation.

const inputValue= (value: string | number | boolean): void =>{ }

inputValue("Fiat")
inputValue(2911)
inputValue(false)

//* Practice, we'll create a func that can accept different types of arguments and perform different actions based on the type of the input. Suppose we want to create a function that doubles the value if the input is a number, or converts the input to upper case uf it is a string. to achieve this we can use a union type to allow the function to accept both numbers and strings.

const userInput = (value: string | number) => {
     if (typeof value === 'number') {
        return value * 2
     } else if (typeof value === 'string') {
        return value.charAt(0).toUpperCase 
     } else {
        console.error("Invalid input data!")
     }
}

console.log (userInput('deep'))
console.log (userInput(3))

//*  INTERSECTION
type _Person = {
    name: string;
    age: number
}

type Employee = {
    emp_id: number;
    department: string
}

//! IMP
type EmployeeDetails = _Person & Employee
//? Here we ahve declared the type which is a union of both the above created types.

const employee: EmployeeDetails = {
    name: "Vinod",
    age: 29,
    emp_id: 445, //* Could even work if emp_id was not mentioned in union
    department: 'Logistics'
    //! U have to mention atleast both the data of atleast one of the types in case of union
    //? But in case of intersection it has nothing to do with common params, u ahve to mention all the params of both the data types.
}

const myPersonelInfo: _Person = {
    name: 'Rocky',
    age: 34
}

//* Practice: Create User Profile
//* You are given two TS types: User and MyLocation. The User type represents basic user info, while the MyLoaction type contains details about the user's location. Create a func called createUserProfile that takes a User object and MyLocation object as args and prints the users name and the city they are in.