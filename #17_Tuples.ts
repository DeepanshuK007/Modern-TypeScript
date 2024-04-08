//* In TS, tuples are a data structure that allows you to store a fixed -size collection of elements of different types. They are similar to arrays, but with  akey difference: the types of ELEMENTS IN TUPLES ARE FIXED and declered at the time of creation, whereas arrays can hold elements of the same type, and their size can vary.

//? Real life examples of using tuples in TS:

//? Lets consider a scenario where u want to diprict a persons basic info, including their name, age and if they are having a drivers license. Using an tuple can be an appropriate choise because these three elements have a specific order and type.

// type PersonInfo = [string, number, boolean]

//* Now if u want your TS tule decled to be read only that is no one should make changes into it then it can be declared as follows:
type PersonInfo = readonly [string, number, boolean]


const Person1: PersonInfo = ["deep", 20, true];
//const Person1: PersonInfo = [73733, 'Thapa', true];
//* The above line will show an error as the contents are not in appropriate order.

const displayPersonsInfo = (User: PersonInfo):void => {  //here we have declared a param 'User' which will take up any user whose credentials are declared
    const [name, age, hasDrivingLicense] = User;
    console.log(`Name: ${name}, Age: ${age} and has driving license: ${hasDrivingLicense ? "Yes" : "No"}`)
}

console.log(displayPersonsInfo(Person1))  //Here we have passed User as Person1