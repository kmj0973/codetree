const input = require("fs").readFileSync(0).toString().split(" ").map(Number);

let answer = 101;

input.forEach((n)=>answer = Math.min(answer,n));

console.log(answer)