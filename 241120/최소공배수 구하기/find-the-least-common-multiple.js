const fs = require("fs")

const [n,m] = fs.readFileSync(0).toString().trim().split(" ");

var answer =0;
var minMul = 2;
var mul = 2;
var minNum = Math.min(n,m);
var maxNum = Math.max(m,n);
while(1){
    if(minNum==maxNum){
        answer=minNum;
        console.log(answer)
        return;
    }
    minNum = n*minMul;
    minMul++;
    if(minNum>maxNum){
        maxNum = m*mul;
        mul++;
    }
}