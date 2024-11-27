const fs = require("fs");

const dataArray = fs.readFileSync(0).toString().trim().split("\n");

var arr = dataArray[1].split(" ");
let isTrue = true;
do{
    isTrue = true
    for(var i = 0; i<dataArray[0]-1; i++){
        if(arr[i]>arr[i+1]){
            var tm = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = tm;
            isTrue = false;
        }  
    }

}while(isTrue!=true)

console.log(arr.join(" "));