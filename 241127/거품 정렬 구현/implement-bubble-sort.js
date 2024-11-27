const fs = require("fs");

const dataArray = fs.readFlieSync(0).toString().trim().split("\n");

var arr = dataArray[1].split(" ");
do{
    let isTrue = true;

    for(var i = 0; i<n; i++){
        if(arr[i]>arr[i+1]){
            var tm = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = tm;
            isTrue = false;
        }  
    }

}while(isTrue!=true)

for(var a of arr){
    console.log(a + " ");
}