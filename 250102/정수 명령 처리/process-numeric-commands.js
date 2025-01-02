const fs = require("fs");

const input = fs.readFileSync(0).toString().split("\n");

const n = Number(input[0]);
const arr = [];
for(var i = 1; i < n+1; i++){
    var a = input[i].split(" ");

    if(a[0]=="push"){
        arr.push(a[1]);
    }else if(a[0]=="size"){
        console.log(arr.length);
    }else if(a[0]=="empty"){
        if(arr.length == 0) console.log("1");
        else console.log("0");
    }else if(a[0]=="pop"){
        console.log(arr.pop());
    }else{
        console.log(arr[arr.length-1]);
    }
}