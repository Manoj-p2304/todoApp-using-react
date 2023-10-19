function speedCon(kmph , mps){
    console.log(`if i want to comvert from mps to kmph press 1 else press 2`);

    let i = prompt("enter the case number");
    switch(i){
    case 1: {
    mps = kmph * 1000 / 3600;
    console.log(`${kmph} kmph is ${mps}m/s`);
    }
    break;
    case 2:{
        kmph = mps * 1609;
        console.log(`${mps} mps is ${kmph} km/h`)
    }
    break;
    default :{
        console.log("default");
        break;
    }
}
}


let mps = prompt("Enter the mp/s value")
let kmph =prompt("Enter the km/h value")
console.log(speedCon(kmph, mps))