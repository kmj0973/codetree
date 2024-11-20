const fs = require("fs")

const [n,m] = fs.readFileSync(0).toString().trim().split(" ");

var answer =0;
var mul = 2;
var minNum = n;
var maxNum = m;
for(var i = 1;i<=(n*m);i++){
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