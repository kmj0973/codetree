const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const n = input[0];

const arr = input[1].split(" ").map(Number);

const merge_sort= (low, high) => {
    if(low < high){
        const mid = Math.floor((low+high)/2);
        merge_sort(low,mid);
        merge_sort(mid+1,high);
        merge(low,mid,high);
    }
}

var merged_arr = [];

const merge = (low,mid,high) => {
    let i = low, j = mid+1;

    let k = low
    while(i<=mid && j<=high){
        if(arr[i]<=arr[j]){
            merged_arr[k] = arr[i];
            k++; i++;
        }else{
            merged_arr[k] = arr[j];
            k++; j++;
        }
    }

    while(i<=mid){
        merged_arr[k] = arr[i];
        k++; i++;
    }

    while(j<=high){
        merged_arr[k] = arr[j];
        k++; j++;
    }

    for (k = low; k <= high; k++) { // 병합된 리스트를 다시
        arr[k] = merged_arr[k]; // 원본 리스트에 옮겨줍니다.
    }
}

merge_sort(0,n-1)

console.log(arr.join(" "))