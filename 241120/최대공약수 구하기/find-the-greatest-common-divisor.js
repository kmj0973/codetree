const fs = require("fs");

const inputData = fs.readFileSync(0).toString().trim().split(" ");

let num = 0;

const [n,m] = inputData;

for(var i =1;i<=n;i++){
    if(n%i==0 && m%i==0){
        num = Math.max(i,num);
    }
}

console.log(num)