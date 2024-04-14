//1.
//? Use custom types when you need unions, intersections. or mapped types.
//? Use INTERFACES when defining object shapes or classes that ADHERE TO A CONTRACT.

//2
//? Interfaces can extend other interfaces to inherit their members.
//? Custom types can use unions and intersections for more complextype compositions.

//! same interface name treated as one

type Stud = {
    name: string;
    age: number
};

type StudAdd = {
    city: string;
    state: string
};

type Data = Stud | StudAdd;

const BioData: Data = {
    name: "Ritvik",
    age: 23,
    state: 'MHT'
}

console.log(BioData);


interface Stud1 {
    name: string;
    age: number
};

interface StudAddr {
    city: string,
    state: string
}

interface DATA extends Stud1, StudAddr {}

class BioData1 implements DATA {
    constructor(
        public name: string,
        public age: number,
        public state: string,
        public city: string
    ) {}
}

const std1 = new BioData1('Gobind', 34, 'MHT', 'Thane');
//? Here we have created a object of the class named std1 and we have passed the params into the constucto rwhich is of the same name.

console.log(BioData1);