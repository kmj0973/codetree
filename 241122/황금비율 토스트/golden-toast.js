const fs = require("fs");

const dataArr = fs.readFileSync(0).toString().trim().split("\n");

const [n,m] = dataArr[0].split(" ").map(Number);

const str = dataArr[1].split("");
var iterator = str.length-1;
for(var i = 2; i<m+2; i++){
    const arr = dataArr[i].split(" ")
    // console.log(arr)
    if(arr[0]=="L"){
        if(iterator!=0) iterator--;
    }else if(arr[0]=="R"){
        if(iterator!=str.length) iterator++;
    }else if(arr[0]=="D"){
        if(iterator!=str.length) str.splice(iterator,1);
    }else if(arr[0]=="P"){
        str.splice(iterator+1,0,arr[1]);
        iterator++;
    }
    // console.log(iterator)
}

console.log(str.join(""))