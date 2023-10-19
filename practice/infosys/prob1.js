function sortMissing(arr){
    const n = arr.length + 1;

    const missingNum  = (n * (n+1)) / 2;
    const actualNum = arr.reduce((acc, num) => acc + num , 0);
    const missingTerm = missingNum - actualNum;
    return missingTerm;

    
}

const arr = [5,1,3,2,6]
const missing = sortMissing(arr);
console.log(missing)