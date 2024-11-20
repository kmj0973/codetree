const fs = require("fs")

const [n,m] = fs.readFileSync(0).toString().trim().split(" ");

var answer =0;
var mul = 2;
var minNum = Math.min(n,m);
var maxNum = Math.max(m,n);
for(var i = 2;i<=(n*m);i++){
    if(minNum==maxNum){
        answer=minNum;
        console.log(answer)
        return;
    }
    minNum = n*i;
    if(minNum>maxNum){
        maxNum = m*mul;
        mul++;
    }
}