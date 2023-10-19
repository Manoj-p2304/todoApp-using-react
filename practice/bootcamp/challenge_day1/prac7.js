function sumOfTwo(){
   
       let ran_1 = Math.floor(1 + (Math.random())*10) % 6;
       let ran_2 = 1 + Math.floor((Math.random())*10) % 6;
       let sum = ran_1 + ran_2;
       console.log(`The 1st random number is ${ran_1} and 2nd random number is ${ran_2} the sum of two is ${sum}`)
       
    
}

console.log(sumOfTwo())