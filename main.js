//1

console.log(1_000_00); // 100000
console.log(10e4); // 100000
console.log(10 ** 5); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(5e4 + 5e4); // 100000
console.log(10e5/10); // 100000
console.log(9e5%8e5); // 100000
console.log(10e5 - 9e5); // 100000
console.log(+"100000"); // 100000
console.log(Number(100000)); // 100000


// 2
console.log(Number.MIN_SAFE_INTEGER * -1);


//3
console.log( +Number(Number.MAX_SAFE_INTEGER / 10e14).toFixed(0)+7);

//4

let myVar = "100.56789 Views";
console.log(parseInt(myVar).toFixed(0)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57


// 5
let num = 10;

console.log(Number((Number.isInteger(num))) + Number((Number.isInteger(num)))); // 2



//6

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(parseFloat(flt).toFixed(0)); // 10
console.log(Math.floor(Number(flt))); // 10
console.log(Math.trunc(Number(flt))); // 10
console.log(Math.round(Number(flt))); // 10



// 7
console.log(Math.floor(Math.random()*5)); // 0 || 1 || 2 || 3 || 4