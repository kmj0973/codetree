const fs = require("fs");

const arr = fs.readFileSync(0).toString().trim().split("\n");

var newArr = [];
for(var i = 1;i <= arr[0]; i++){
    var order = arr[i].split(" ");
    if(order[0] == "push_back"){
        newArr.push(order[1]);
    }else if(order[0] == "pop_back"){
        newArr.pop();
    }else if(order[0] == "size"){
        console.log(newArr.length);
    }else if(order[0] == "get"){
        console.log(newArr[order[1]-1])
    }
}