const fs= require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const n = input[0];

const numArr = input[1].split(" ").map(Number)

for(var i = 1 ; i<n; i++){
    var j = i-1;
    var key = numArr[i];

    while(j>=0 && numArr[j]>key){
        numArr[j+1] = numArr[j];
        j--;
    }
    numArr[j+1] = key;
}
console.log(numArr.join(" "))