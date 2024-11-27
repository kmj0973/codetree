const fs = require("fs");

const dataArr = fs.readFileSync(0).toString().trim().split("\n");

const arr = dataArr[1].split(" ").map(Number);
for(var i = 0; i < dataArr[0];i++) {
    var num = arr[i];
    for(var j = i+1;j<dataArr[0];j++){
        if(arr[i]>arr[j]){
            var tm = arr[i];
            arr[i]=arr[j];
            arr[j]=tm;
        }
    }
}
console.log(arr.join(" "))