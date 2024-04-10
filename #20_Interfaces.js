"use strict";
//* In TS, an interface is a powerful feature that allows u to definen a contract for an objects shape. It specifies the props and their types that an object must have to be considered of that perticular interface type. 
//! Interfaces are primarily used for type-checking during dev and not generate any JS code at runtime.
const greets = {
    name: "Rocky handsome",
    age: 45
};
const Washing_Powder = {
    name: "Nirma Fast Action",
    price: 55,
    quantity: 150
};
const Dish_Washer = {
    name: "Vim Bar",
    price: 20,
    quantity: 100
};
const Soft_Drink = {
    name: "Mountain Dew",
    price: 70,
    quantity: 100
};
//! calc Total Price
const totalPrice = (product) => {
    const { price, quantity } = product;
    console.log(price * quantity);
};
//? Here we have created a arrow func wherein the arg taken is anmed as product which will represent all the aboove three classes of products created. I fwe want we can also pass any specific product
//? Then we have destructured the passed product and collected its pprice and quantity.
console.log(totalPrice(Dish_Washer));
console.log(totalPrice(Soft_Drink));
