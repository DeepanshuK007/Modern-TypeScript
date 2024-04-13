"use strict";
//1.
//? Use custom types when you need unions, intersections. or mapped types.
//? Use INTERFACES when defining object shapes or classes that ADHERE TO A CONTRACT.
const BioData = {
    name: "Ritvik",
    age: 23,
    state: 'MHT'
};
console.log(BioData);
;
class BioData1 {
    name;
    age;
    state;
    city;
    constructor(name, age, state, city) {
        this.name = name;
        this.age = age;
        this.state = state;
        this.city = city;
    }
}
const std1 = new BioData1('Gobind', 34, 'MHT', 'Thane');
//? Here we have created a object of the class named std1 and we have passed the params into the constucto rwhich is of the same name.
console.log(BioData1);
