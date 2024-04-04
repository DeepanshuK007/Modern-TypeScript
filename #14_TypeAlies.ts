//* In TS, type alies is a way to give a name to a specific type or combination of types. It allows u to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. Type alies provide better readability, organization, and abstraction of complex types.

//* To define a type alies, you use the type keyword followed by the alies name and the type definition:

type Person = {
    name: string;
    age: number;
    class? : string;  //? optional param
    isStudent: boolean;
    address: {city: string; country: string}
}

const person1: Person = {
    name: 'Deep',
    age: 20,
    isStudent: true,
    address: {
        city: 'Chandigarh',
        country: 'India'
    }
}

const person2: Person = {
    name: 'Ramuu',
    age: 20,
    isStudent: true,
    address: {
        city: 'Chandigarh',
        country: 'India'
    }
}

//? So in here as u can see that we have made a user defined type using type aliels which can be used again as type annotation while defining an object having the similar schema.
//? This helps us save a lot of space in our code.

//todo: Define an interface or type representing a product with properties for name, price, and quantity.Create a product obj with the foll data: 
//Name: 'Laptop'
//Price: 1000
//Quantity: 5

type Product = {
    Name: {
        BrandName: string;
        ProductName: string
    };
    Price: number;
    Quantity: number
}

const products: Product= {
    Name: {
        BrandName: 'MSI',
        ProductName: 'Productivity Laptop'
    },
    Price: 70000,
    Quantity: 10
}

console.log(products.Name.BrandName)

//* WAF to return the total cost
const calcTotalPrice = (products: Product) => {  //! Here we have passed the whole products object so that if we need any key of it in the future along with its type.
    return (` ${products.Name.BrandName} has total cost of  ${products.Price * products.Quantity}`)
}

console.log(calcTotalPrice(products))