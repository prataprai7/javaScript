// function
// 1. normal function
function hello(){
    console.log("Hello World");
}
hello(); //output:hello world

// 2. diff variable function
const hello2=function(){
    console.log("Hello World 2");
}
hello2();

// 3. arrow fun
const hello3 =()=>{
    console.log("Hello world 3");

}
hello3();





// difference
function add(a,b){
    return a+b;
}
var result = add(5,3);
console.log(result);

const subtract=(a,b)=> a-b; // arrow automatically returns
var result = subtract(5,3);
console.log(result);

const mul= (a,b)=>{
    return a*b; //if arrow is scoped, we need to use return
}
var result = mul(5,3);
console.log(result);



const person = {
    firstname: "Ram",
    lastname: "SHyam",
    fullname: function(){
        return this.firstname +" "+this.lastname;
    },
    fullnameArrow:()=>{
        //arrow in object cannot use this
        return this.firstname+" "+this.lastname;
    }
}

console.log(person.fullname());
console.log(person.fullnameArrow());


//desturcting
const {firstname, lastname}=person;
console.log(firstname, lastname);


const{firstname: fName, lastname: lName}= person;
console.log(fName, lName);


//callbacks and closures
// closure (function le function nei return garne)
function outer(){
    let count =0;
    function inner (){
        count++;
        console.log("Count:", count);
    }
    return inner;
}
const counter1 = outer(); //counter1 is inner function
counter1();//counter1
counter1();//counter2

const counter2 = outer(); //resets count to 0 for counter2
counter1();

//callback, higer order function (function le function nei arg liney)
function greet (name, callback){
    callback(name);
}
function sayHello(name){
    console.log("Hello, "+name);
}
greet("Ram", sayHello); //output:Hello, Ram
greet("Ram", (name)=> console.log("Hi, " + name)); //arrow function used 
// whatsup, ram
greet("Ram", (name)=> console.log("WhatsUp, "+ name));


// 5 min classwork
// create a function calculate, take 3 agrs
// num1, num2 and callback
// callback willl perform operation on num1 and num2
// make 4 operation and use calculate function
 
function calculate(num1, num2, callback){
    callback(num1, num2);
}
function add(num1, num2){
    console.log("Addition:", num1+num2);
}
function subtract(num1, num2){
    console.log("Subtraction:", num1-num2);
}
function multiply(num1, num2){
    console.log("Multiplication:", num1*num2);
}

calculate(10, 5, add); //output: Addition: 15
calculate(10, 5, subtract); //output: Subtraction: 5
calculate(10, 5, multiply); //output: Multiplication: 50
calculate(10,45, (a,b)=> console.log("Division:", a/b));



// list iteration and callbacks
const fruits = ['apple','mango','pineapple','banana'];

fruits.forEach(
    // callback function
    (fruit, index)=> console.log(index + ": " + fruit)
);
fruits.forEach((fruit)=> console.log(fruit.toUpperCase()));


const mappedFruits = fruits.map(
    (fruit)=> "Fresh", +fruit.toUpperCase()
);
console.log(mappedFruits);

// ui example
const listFruits = fruits.map(
    (fruits, index)=>{
        return `<li id="${index}"> $<fruit}</li>`; //must have return
    }
);
console.log(listFruits);


const filteredFruits = fruits.filter(
    (fruit)=> fruit.length>4
);
console.log(filteredFruits);
//count
const countFruits = fruits.reduce(
    (count)=> count +1,

);
console.log(countFruits);