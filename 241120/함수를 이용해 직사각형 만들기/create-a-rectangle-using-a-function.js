const fs = require('fs')

const inputData= fs.readFileSync(0).toString().trim().split(" ");
const [n,m] = inputData;

for(var i =0; i<n;i++){
    var str = "";
    for(var j=0;j<m;j++){
        str += "1"
    }
    console.log(str);
    str = ""
}