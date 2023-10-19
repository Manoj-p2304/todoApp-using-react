function arrGen(){
    let arr1 = [];
    for(i=1; i<=10 ; i++){
        sqa = i*i;
        // console.log(`The square of ${i} is ${sqa}`)
        arr1 += sqa;
    }
    console.log(arr1.split(''))
        
}

console.log(arrGen())