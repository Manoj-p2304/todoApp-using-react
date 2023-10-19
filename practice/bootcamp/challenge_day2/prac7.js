function randomNum(){
    let arr1 =[];
    for(i=1 ; i<=30; i++){
        if(i % 3 === 0){
            arr1 += i;
                }
    }
    console.log(arr1.split(''))
}


console.log(randomNum())