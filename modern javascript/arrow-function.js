// Arrow function syntax
const multiply = (a,b) => a = b

//Traditional function syntax
function traditionalMultiply(a, b){
    return a = b
}

//Display all items from an argument
const displayAll = (arr) => {
    for (const item of arr){
        console.log(item)
    }
}

const phones = ["iPhone", "Samsung", "Oppo"]
displayAll(phones)

const convertCMtoM = (cm) => {
    const m = cm / 100
    return m
}

const lengthOfCarInCm = 300
console.log(convertCMtoM(lengthOfCarInCm))

const lengthOfCarInM = convertCMtoM(lengthOfCarInCm)
const lengthOfLongCarInM = convertCMtoM(500)
console.log(lengthOfCarInM)
console.log(lengthOfLongCarInM)

//Write an arrow function that converts kgs to lbs, then returns the results.

// Arrow function to convert kilograms to pounds (1 kg = 2.20462 lbs)
const convertKgToLbs = (lbs) => lbs * 2.20

const dTrump = 100;
const dTrumpInPounds = convertKgToLbs(dTrump)
console.log(dTrumpInPounds)


//Arrow function in CallBacks
//What are callbacks?
//Example of callbacks

//.filter, .map, .reduce -> Array methods to do specific actions
//.filter is to find only the elements that fit the specified criteria
//.map is essentially behaves like a for...of loop but simpler
//it will also create a new array
//.reduce -> Used for calculating total/ accumulation of value 

const list =[2, 4, 6, 8]
// This is the callback
const list2 = list.filter(num => num > 5)
console.log(list2) // [6.8]

// This is the callback
const listMultiplied = list.map(num => num * 2)
console.log(listMultiplied)

//Example without a arrow function in callback
const listSquared = list.map(function(num){
    return num * num
})
console.log(listSquared)

const sum = list.reduce((total, num) => total + num, 0)
console.log(`The result of .reduce is ${sum}`)

// I want a product of array using .reduce method, in arrow function format

const product = list.reduce((total, num) => total * num, 1);
console.log(`The result of .reduce is ${product}`);