//* In TS, objects are used to represent data with key value pairs. Each key in an object is a string(or a symbol) that maps to a value.

//? Lets consider a real life ex of representing ia persons info using TS objects.
//? 🧍🏻-> name, age, isStudent, address(city, country)

//? Defining the type of your object is like defining the schema of your object. It is defined a bit similar to key value pairs and
//! donot seperate with commas. Even declare the type of the keys of your nested objects

//* In most of the cases u dont need to define the type of your keys as TS gets it by its own using type-inference.

const person: {
    name: string
    age: number
    isStudent: boolean
    address: {
        city: string
        country: string
    }
} = {
    name: 'Deep',
    age: 20,
    isStudent: true,
    address: {
        city: 'Chandigarh',
        country: 'India'
    }
}

//todo Accessing the data
console.log(person.address.country); //India
//? We can access the values of the objects using the dot operator

//todo Updating object properties
person.address.city = 'Mohali';
//* person.address.city = 2.45, In case of JS it would be valid but in TS this would show an error which would say type num cannot be allocated to type string
console.log(person.address.city);

//? now what if we ahve some more names but the other keys of those is same as the person obj then for declaring those in our code comes the role of 'Type-allies'.