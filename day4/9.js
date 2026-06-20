// logical operator [and &&, or ||, not !]
// not operator

console.log(!"1"); //f
console.log(!!0);//f
console.log(!1); //f
console.log(!undefined); //t


// and operator

console.log("ram" && "shyam" && 0.5 && "" && "mukesh");
console.log("ram" && "shyam" && 0 && false && "mukesh");
console.log("null" && "shyam" && 0.5 && false && "mukesh");
console.log("ram" && "shyam" && 0.5 && "hello" && "mukesh");


// console.log(101 && 6>10 && (1+1) && );


// console.log(101 && 6>10 && (1+1) && false && "hello"); // 6 f 101 
// console.log(0 && 6>10 && (1+1)==2 && true && "hello"); // 0 f 
// console.log("null" && "" && 0 && false && "hello"); // "" 
// console.log(undefined && "false" && false); // un f


// console.log("ram" || " " || "shyam"); // ram
// console.log(101 || 6>10 || (1+1) || false || "hello"); // 101
// console.log(0 || 6>10 || (1+1)==2 || true || "hello"); // t 
// console.log("null" || "" || 0 || false || "hello"); // null 


// t 
// console.log("kuchh bhi " && 101>98 || undefined && "null" || !!!"" && 0)

// console.log(true|| undefined || 0)




// console.log(true+1 ||false && 0<0 &&  !"null" && "Hello"=="Hello" || true)
// console.log(2 ||false || true)

// console.log("ram"||"shaym" && !undefined || !!!true && "false") // ram 
// console.log(!!!0 && " " && isNaN(NaN) && 5>=5.5 || 101); // 101 
// console.log("hello" && false || !!!123 && undefined || "false"); // false
console.log(0 && !!false && !!!"" && "hero" || 0); // 0 

console.log(0 || 0); // 0 
console.log(false || 0 || "error"); //er

