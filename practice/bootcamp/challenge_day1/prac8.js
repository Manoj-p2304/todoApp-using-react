function randomOperatorMath(){
    ran_1 = 1 + Math.floor((Math.random())* 6) % 10 ;
    ran_2 = 1 + Math.floor((Math.random())* 6) % 10 ;
    console.log(`The 2 random numbers are ${ran_1} and ${ran_2}`);
    switch(option){
        case 1 : {
            let add = (ran_1 + ran_2);
            console.log(`The addition of ${ran_1} and ${ran_2} is ${add}`);
            break;
        }
        case 2 : {
            let sub = (ran_1 - ran_2);
            console.log(`The Subtraction of ${ran_1} and ${ran_2} is ${sub}`);
            break;
        }
        case 3 : {
            let mul = (ran_1 * ran_2);
            console.log(`The Multiplication of ${ran_1} and ${ran_2} is ${mul}`);
            break;
        }
        case 4 : {
            let div = (ran_1 / ran_2);
            console.log(`The division of ${ran_1} and ${ran_2} is ${div}`);
            break;
        }
    }
}

option = prompt("Enter 1 for Addition  \n Enter 2 for Subtraction \n Enter 3 for multiplication \n Enter 4 for Division ");
console.log(randomOperatorMath())