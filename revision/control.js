const trueStatement = true

if(trueStatement){
    console.log("This statement is true")
}else{
    console.log("This statement is false")
}

// Using comparison operators
const marks = 70
const failGrade = 59

if(marks <= failGrade){
    console.log("You failed.")
}else{
    console.log("You passed!")
}

if(marks > failGrade){
    console.log("You passed!")
}else{
    console.log("You failed.")
}


const standardPay = 8
const minimumhours= 40
const otHours = 20

let otPay = 0;
if(otHours > 15) {
    otPay = otHours * (standardPay * 2);
}else{
    otPay = otHours * (standardPay * 1.5);
}

console.log("OT Pay Amount:", otPay);