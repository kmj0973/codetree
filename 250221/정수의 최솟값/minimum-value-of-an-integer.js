const input = require("fs").readFileSync(0).toString().split(" ").map(Number);
console.log(Math.min(...input));
