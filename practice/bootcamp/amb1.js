function findOcc(arr,target){
let left = 0;
let right = arr.length-1;
let result =-1;

while(left<=right){
    const mid = Math.floor((left + right)/2);

if(arr[mid]===target){
    result =mid;
    right = mid -1;
}else if (arr[mid]<target){
    left = mid+1;
}else if(arr[mid]>target){
    right = mid-1;
}
}
return result;
}


let arr = [1,2,2,3,3,4,4,4,5,5,5,5,];
let target = 5;
let firIndex = findOcc(arr, target);


if (firIndex !== -1){
    console.log(`The occ of ${target} is in index ${firIndex}`);
}else{
    console.log(`number not available`);
}

