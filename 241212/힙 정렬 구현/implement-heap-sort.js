const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const arr = [0, ...input[1].trim().split(" ").map(Number)];

const heapify = (n,i) =>{
    let maxNode = i; 
    let l = i*2;
    let r = i*2+1;

    if(l<=n && arr[l] > arr[maxNode]){
        maxNode = l;
    }

    if(r<=n && arr[r] > arr[maxNode]){
        maxNode = r;
    }

    if(maxNode != i){
        [arr[i],arr[maxNode]] = [arr[maxNode],arr[i]];
        heapify(n, maxNode);
    }
}

function heapSort() {
    // 1. max-heap을 만들어 줍니다.
    for (let i = Math.floor(n / 2); i >= 1; i--) { // n / 2번째 원소부터 1번째 원소까지 돌며
        heapify(n, i); // heapify 과정을 진행하여 max-heap을 만들어줍니다.
    }

    // 2. 정렬을 진행합니다.
    for (let i = n; i >= 2; i--) { // n을 하나씩 줄여나가며
        [arr[1], arr[i]] = [arr[i], arr[1]]; // 현재 최댓값과 가장 끝에 있는 노드를 교환해주고
        heapify(i - 1, 1); // 1번 노드를 기준으로 heapify를 진행하여
                           // max-heap 상태를 계속 유지해 줍니다.
    }
}

heapSort();

console.log(arr.slice(1).join(" "))