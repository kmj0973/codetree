const input = require("fs").readFileSync(0).toString().split(" ").map(Number);

const [N,M] = input;

const answer = [];
const arr = [];

for(var i = 1 ; i<=N; i++){
    arr.push(i);
}

var cnt = 0;
while(arr.length > 0){
    cnt++;
    if(cnt==M){
        var q = arr.shift();
        answer.push(q);
        cnt = 0;
    }else{
        var q = arr.shift();
        arr.push(q);
    }
}

console.log(answer.join(" "))