//* Emums is one of the few features of TS which is not a JS extention in TS.

//* Enums in TS are commonly used when u want to represent a set of related values and choose one value from multiple options. Enums provide a convenient way to define a set of named values and associate them with specific meanings.

//? In TS, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0. 
//? The default numeric value for the first enum constant is 0, and subsequent enum constants receive values incremented by 1.

enum Roles {
    user = "User",
    admin = "Admin"  //* here if we dont provide the string value to the param then it will take default numeric value from 0 onwards.
}

type LoginDetails = {
    name?: string;
    email: string;
    password: string;
    role: Roles
    //? Here we have passed the created enum as the type
    //role: [user, admin]  //! Here we can see that multiple values can be there for  a single prop.
    //* Sometimes we require to provide multiple values to param we can do it using enums
}

const user1: LoginDetails = {
    name: 'Deep',
    email: 'deep#007@gamil.com',
    password: "234HS@",
    role: Roles.admin //? With the help of enums we are switching between the roles and allocating it to users.
}

const user2: LoginDetails = {
    name: "Raunak",
    email: 'mandy#007@gamil.com',
    password: "25&@",
    role: Roles.user
}

const isAdmin = (user:LoginDetails) => {
    const {email, role} = user1;
    return role == 'Admin' ? ` ${email} is allowed to edit the website ` : ` ${name} is not! `
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));