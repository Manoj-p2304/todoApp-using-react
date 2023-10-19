function daysOfWeek(option){
    switch(option){
        case 1: {
            if(option === 1){
            console.log("Monday")
            }
        }
        case 2: {
            if(option === 2){
            console.log("Tuesday")
            }
        }
        case 3: {
            if(option === 3){
            console.log("Wednesday")
            }
        }
        case 4: {
            if(option === 4){
            console.log("Thursday")
            }
        }
        case 5: {
            if(option === 5){
            console.log("Friday")
            }
        }
        case 6: {
            if(option === 6){
            console.log("Saturday")
            }
        }
        case 7: {
            if(option === 7){
            console.log("Sunday")
            }
        }
        default : {
            console.log("Enter range from 1 to 7")
        }
    }
}

const option = prompt("Enter numbers from 1 to 7 for days of week");
console.log(daysOfWeek(option))