// syncronous statement
const variable = "Ram"
const variable2 = 3

console.log(variable);
console.log(variable2);

// asyncronous satatement
setTimeout(
    ()=>{
        console.log("This is an asyncronous ");
    },
    200
);
console.log("End of program");

// promise/future (any function that can take time)
const promiseFn = ()=>{
    return new Promise((resolve, reject )=>{
        setTimeout(
            ()=>{
                reject("ok ")
            },
            200 //millisecond
        );
    })
}

promiseFn()
.then(result=>{
    //result is resolved
    console.log("Success")
    console.log(result);
})
.catch(error=>{
    //error rejects here
    console.log("Expected")
    console.log(error);
});
console.log("Done");


//await = try, catch function

const main = async()=>{
    try{
        const result = await promiseFn(); //blocks the execution
        //result is resolved
        console.log(result);
        console.log("Rest of function");
    }catch(error){
        //error is rejected
        console.log("Rejected, error");
    }

}
main();



// Task 1
const isEven = (num) => new Promise(
    (resolve, reject) => {
        if (num % 2 === 0) {
            resolve(true);
        } else {
            reject(false);
        }
    }
)
const isPositive = (num) => new Promise(
    (resolve, reject) => {
        if (num > 0) {
            resolve(true);
        } else {
            reject(false);
        }
    }
)
// 1. run these function with async await, sequencially
// 2. run these function with .then and .catch, sequencially

const run = async (num) => {
    try {
        const evenResult = await isEven(4);
        console.log("Is even:", evenResult);
        const positiveResult = await isPositive(4);
        console.log("Is Positive:", positiveResult);
    } catch (error) {
        console.log(error);
    }
}
run();


//non blocking sequential execution
isEven(4)
.then(evenResult => {
    console.log("Is even:", evenResult);
    return isPositive(4);
})
.then(positiveResult => {
    console.log("Is Positive:", positiveResult);
})
.catch(error => {
    console.log(error);
}); 

// parallel promise
const parallelRun = async ()=>{
    try{
        conts [result1, result2]= await Promise.all(
            [
                isEven(4),
                isPositive(4)
            ]
        );
        console.log("Is even:", reuslt1);
        console.log("Is positive:", result2);
    }catch(error){
        console.log(error);
    }
}
parallelRun();

const parallelRun2= async ()=>{
    try{
        const [result1, result2]= await Promise.allSettled(
            [
                isEven(4),
                isPositive(-4)
            ]
        )
        console.log("Is even: ", result1, result1.value); //value=resolve
        console.log("Is positive:", result2, result2.value);
    }catch(error){
        console.log(error);
    }
}