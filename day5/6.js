// Object data type 

// non primtive data type
// collectio  of key value pairs
// mutable
// {}
// dynamic in size and lenght
// key data type is string and vlaue dta type is anything
// key-> unique and value-> can be duplicate

// CURD

// 1 create 

let obj={};
obj={
    id:23,
    name:"prince",
    hobby:["traveelling", "singing", "training"],
    status:false,
    address:{
        city:"gurugram",
    },
}

// 2 read
console.log(obj , typeof obj);

// two type of notation to access the obj 
// bracket notation ex.. obj["key"]
// dot notation ex.. obj.key

// 3. update

obj["status"]=true;
obj.name="vaibhav";

// create  a new key value pair
obj.email="1@gamil.com"

console.log(obj);

// delete

delete obj["email"]
delete obj.id

console.log(obj);

