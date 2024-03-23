//TODO Addition of two nums.
//TODO How to catch error and solve it (Run Time Compilation)
//TODO TS Configuration File

//*func define
//? What does this func return- Number (mention it)

//@ts-ignore
    //--to ignore the error in TS file after compilation


    //arrow func 
const sum = (a:number, b:number) :number => {
    //! we have to define the type of the var declared - {Type Annotation}
    //* The moment we write this TS throws an error for 'Deep'
    return a + b
}

//*func call
console.log(sum (5, 10));  //output: 15
//* also give output on typing node Addition.ts in pwsh

//console.log(sum (5, 'Deep')); //* output: 5Deep (concatination) would add normally in JS but in TS-  
//* 'Static binding'

//* Now bydefault if we compile a TS file with errors then it would create a JS file .
//* Now if we use TS Config File it will not create a file for JS if the TS file has errors.
//* U can do this by creating a tsconfig.json file bu writing tsc --init in pwsh
//* After this it will pop up errs in your TS file and wont create a JS file if written tsc

//export {}