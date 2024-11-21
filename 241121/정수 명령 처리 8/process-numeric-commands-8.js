const fs = require("fs")

const inputData = fs.readFileSync(0).toString().trim().split("\n");

var newArr = [];

for(var i = 1; i <=inputData[0]; i++){
    var data = inputData[i].split(" ");

    if(data[0] == "push_front"){
        newArr.unshift(data[1]);
    }else if(data[0] == "push_back"){
        newArr.push(data[1]);
    }else if(data[0] == "pop_front"){
        console.log(newArr[0])
        newArr.shift();  
    }else if(data[0] == "pop_back"){
        console.log(newArr[newArr.length-1])
        newArr.pop();
    }else if(data[0] == "size"){
        console.log(newArr.length)
    }else if(data[0] == "empty"){
        if(newArr.length==0) {
            console.log("1");
        }else{
            console.log("0")
        }
    }else if(data[0] == "front"){
        console.log(newArr[0])
    }else if(data[0] == "back"){
        console.log(newArr[newArr.length-1])
    }
}