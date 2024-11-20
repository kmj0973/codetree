const fs = require("fs");

const inputData = fs.readFileSync(0).toString();

var num = 1;

for(var i=0;i<inputData;i++){
    var str = "";
    for(var j=0;j<inputData;j++){
        if(num>9) num = 1;
        str += String(num) + " ";
        num++;
    }
    console.log(str);
    str="";
}