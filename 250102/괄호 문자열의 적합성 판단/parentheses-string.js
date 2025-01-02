const fs = require("fs");

const input = fs.readFileSync(0).toString().split("");

const stack = [];

for(var i = 0; i < input.length; i++){
    if(stack.length==0 || input[i]=="("){
        stack.push(input[i]);
    }

    if(input[i]==")"){
        if(stack[stack.length-1] == "("){
            stack.pop();
        }else{
            stack.push(input[i]);
        }
    }
}

if(stack.length==0) console.log("Yes");
else console.log("No");