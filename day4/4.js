// data type 
// primitive data type 
// 1. number

var num=10;
var num1=10.5;

console.log(num,num1,typeof(num),typeof(num1));

// 2.string data type -combination of character -Number,alphabets

var nm="prince";
var nm1="krmu";
var nm2=`sohna
               gurugram
        hr1`;

console.log(nm,nm1,typeof nm, typeof nm1);
console.log(nm2, typeof nm2);

// 3.boolean

var bl=false;
var bl1=true;

console.log(bl,typeof bl,bl1);

// 4. null data type

var n1=null;
console.log(n1, typeof n1);

// 5. undefined
var ud;
console.log(typeof ud);


// non-primitive data type

// 1. array

let arr=[1,2,3];
console.log(arr, typeof arr);

let obj={a:1};
console.log(obj, typeof obj);

function hello(){
    console.log("hello world");
}
console.log(hello());

function yello(){
    return "yello world" ;
}
console.log(yello());



