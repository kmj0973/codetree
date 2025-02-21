const input = require("fs").readFileSync(0).toString().trim();

let answer = 0;

for(var i = 1; i<=input; i++){
    answer += i;
}

console.log(Math.floor(answer/10))