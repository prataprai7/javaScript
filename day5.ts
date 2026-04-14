console.log("Typescript running")
let a=4;
console.log(a)


let numberVar: number =5;
//cannot change type after declaration
//numberVar ="Hello";
//a="Hello";
console.log(numberVar, typeof numberVar);


let stringVar: string = "Hello";
let booleanVar: boolean = true;
let anyVar: any = "Can be any type";
let unknownVar: unknown = 10;

//any can be assigned to unknown
//but unknown cannot be assigned to any without type assertion

anyVar = 123;
unknownVar = "Now im a String";

console.log(stringVar, typeof stringVar);
console.log(booleanVar, typeof booleanVar);
console.log(anyVar, typeof anyVar);
console.log(unknownVar, typeof unknownVar);

//stringVar = anyVar; // can
//stringVar = unknownVar; //Error - cannot


//array
let numberArray: number[] =[1,2,3];
//using generic
let stringArray: Array<string> =["a","b","c"];
let anyArray: any[]=[1,"two", true];
console.log(numberArray, stringArray, anyArray);

//tuples
let user: [string,number]=["Aliceee", 30];
console.log(user[0], typeof user[0]); //alice string


//typescript function
function add(x: number, y: number): number{
    return x+y;
}
console.log(add(5,10));//x,y required
const optional = (x?: number, y?: number): number => {
    return 0;
}
console.log(optional());//x,y optinal
console.log(optional(5,10));//y optional

const optionalDefault = (fname: string = "Ram")=>{
    return "Hello "+fname;
}
console.log(optionalDefault());//fname default
console.log(optionalDefault("Shyam"));//fname default override


let fruits = ["apple", "mango", "cherry", "banana"];
//make a fun that takes array of string
//if not passed default to empty array
//and return array of string with lenght greater than5 
//print the returned value

function filterFruits(fruits: string[] = []): string[] {
    return fruits.filter(fruit => fruit.length > 5);
}
console.log(filterFruits(fruits)); //["banana"]
console.log(filterFruits()); //[]                               