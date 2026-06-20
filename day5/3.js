// Array 
// collection of different data type
// dynamic in size and length
// contigneous in M/E allocation
// indexing
// mutable- inbuilt function that is used to change arr value
// ordeered memory allocaton
// non primitive /reference data tyep


// var arr=[1,true,"hello"];
// console.log(arr);
// arr.push(3);
// console.log(arr);

// 1. create

var arr=[];
arr=[1,2,3]

// 2. read 
console.log(arr ,typeof arr);

// read specific position /index value

console.log(arr[1]);

// 3.update 
// add RHS /ending data [push]
arr.push(10);
console.log(arr);

// add LHS/Starting [unshift]
arr.unshift(100);

console.log(arr);

arr[2]=20;
console.log(arr);

// 4 delete
// RHS pop()
arr.pop()
console.log(arr);

// LHS shiift

arr.shift();
console.log(arr);





