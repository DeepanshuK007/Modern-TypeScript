//?            / Parent Class / Child Class / Outside Class
//             /-------------/ ----------- / ------------ /
//? Public     / ✅         / ✅          / ✅
//? Protected  / ✅         / ✅          / ❌
//? Private    / ✅         / ❌         / ❌

class Persons { //! no '=' while declaring a class
    public name: string;
    age: number;
    private hobbies: string[];

    constructor (name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    } {}
    
    introduceParent(): string {
        return `Hi, Im ${this.name} and im ${this.age} years old. I love ${this.hobbies.join(seperator: ",")}. `;
    }
}
