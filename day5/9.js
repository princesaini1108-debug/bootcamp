// function is a reusasble block of code to perform certain task.

// function definition /declaration

// a. function with no parameter


// function greet(){
//     console.log("hello from js");
    
// }


// 2.function caling/invoking

greet()

// b. function with parameter
    
function add(x,y){
    console.log(x+y);
    
}
add(1,2)

// argument are real value and static value 
// parament are used durung the 

// c. function with no parameter and return keyword
function greet(){
    return "hello from js";
    
}
greet()

// d. function with parameter and return keyword
    
function add(x,y){
    console.log(x+y);
    return 30
    
}
console.log(add(1,2));

// 3. function expression/statement

let x = function(a){
    return a+5
}
console.log(x(5));


// arrow function 

const add=(a)=>{
    return a+5
}
console.log(add(5));

const add = a=>a+5
console.log(add(5));

