//* In TS, an interface is a powerful feature that allows u to definen a contract for an objects shape. It specifies the props and their types that an object must have to be considered of that perticular interface type. 
//! Interfaces are primarily used for type-checking during dev and not generate any JS code at runtime.

//? In case of JS the fundamental way by which we pass and group around data is through objects, in TS we represent those through object types.

//? This can be done by 1. simply passing as function arguments 2. they can be named using an interface 3. also by type aliies as studied earlier.

interface Greet {
    name: string;
    age: number
}

const greets: Greet = {
    name: "Rocky handsome",
    age: 45
}

//todo Create a Prodict Object:
//? Define a interface or type representing a product with props for name, price, and quantity. Create a product object with the foll data:
//Name: "Laptop"
//Price: 1000
//Quantity: 5

interface Products {
    name: string;
    price: number;
    quantity: number 
}

const Washing_Powder : Products = {
    name : "Nirma Fast Action",
    price: 55,
    quantity: 150
}

const Dish_Washer : Products = {
    name : "Vim Bar",
    price: 20,
    quantity: 100
}

const Soft_Drink : Products = {
    name : "Mountain Dew",
    price: 70,
    quantity: 100
}

//! calc Total Price
const totalPrice = (product: Products) : void => {
    const {price, quantity } = product;
    console.log(price*quantity)
}

//? Here we have created a arrow func wherein the arg taken is anmed as product which will represent all the aboove three classes of products created. I fwe want we can also pass any specific product

//? Then we have destructured the passed product and collected its pprice and quantity.

console.log(totalPrice(Dish_Washer))
console.log(totalPrice(Soft_Drink))

