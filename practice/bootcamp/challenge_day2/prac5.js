function numTable(n){
    for(i=1; i<=10; i++){
        table = n * i;
        console.log(`${n} x ${i} = ${table}`);
    }
}

const n = 5;
console.log(numTable(n))