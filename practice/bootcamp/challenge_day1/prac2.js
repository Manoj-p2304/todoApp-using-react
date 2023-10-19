function computeMarks(physics,chemistry,maths){
    let total_per = 0;
    let phy_per = 0;
    let che_per = 0;
    let mat_per = 0;
    
    phy_per = (physics / 100)* 100;
    che_per = (chemistry / 100) * 100;
    mat_per = (maths / 100) * 100;
    total_per = ((phy_per + che_per + mat_per) / 300) * 100 ;
    console.log(`${student_name} obtained  ${total_per}% of marks in PCM:
    Physics: ${phy_per}%, Chemistry : ${che_per}%, Maths : ${mat_per}%
    Total : ${total_per}%`)
}

student_name = prompt("Enter the student name");
physics = prompt("Enter the physics marks");
maths = prompt(" Enter the maths marks ");
chemistry = prompt("Enter the chemistry marks");
console.log(computeMarks(physics,chemistry,maths));

