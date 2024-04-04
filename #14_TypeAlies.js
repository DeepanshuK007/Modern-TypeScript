"use strict";
//* In TS, type alies is a way to give a name to a specific type or combination of types. It allows u to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. Type alies provide better readability, organization, and abstraction of complex types.
const person1 = {
    name: 'Deep',
    age: 20,
    isStudent: true,
    address: {
        city: 'Chandigarh',
        country: 'India'
    }
};
const person2 = {
    name: 'Ramuu',
    age: 20,
    isStudent: true,
    address: {
        city: 'Chandigarh',
        country: 'India'
    }
};
const products = {
    Name: {
        BrandName: 'MSI',
        ProductName: 'Productivity Laptop'
    },
    Price: 70000,
    Quantity: 10
};
console.log(products.Name.BrandName);
//* WAF to return the total cost
const calcTotalPrice = (products) => {
    return (` ${products.Name.BrandName} has total cost of  ${products.Price * products.Quantity}`);
};
console.log(calcTotalPrice(products));
