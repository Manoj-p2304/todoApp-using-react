function timeCon(seconds){
    
    let minute = seconds / 60;
    let hours = minute / 60;
    console.log(`${seconds} seconds is equal to ${hours} hours,  ${minute} minutes and ${seconds} seconds`)
}

let seconds = 7515 ;
console.log(timeCon(seconds));