const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

let arr = input[1].split(" ").map(Number);

arr.sort((a,b)=>a-b);

console.log(arr.join(" "))