// Spread Operator
const nums1 = [1, 2, 3]
const nums2 = [4, 5, 6]
const nums3 = [...nums1, ...nums2]
console.log(nums3)

const numsWithoutSpread = [nums1, nums2]
console.log(numsWithoutSpread)

// Spread Operator with Objects
const person = {
    name: "John Doe",
    age: 18
}

const student = {
    ...person,
    grades: "Diploma"
}
console.log(student) //{ name: 'John Doe', age: 18, grades: 'Diploma' }

const studentWithoutSpread = {
    person,
    grade: "Diploma"
}
console.log(studentWithoutSpread) //{ person: { name: 'John Doe', age: 18 }, grade: 'Diploma' }

// Using Spread Operator in function Arguments
function sum(a, b, c){
    return a + b + c
}
 const listOfNums = [15, 30, 45]
console.log(sum(...listOfNums)) //90

//Destructuring - Spread Operator Together

const phones = ["iPhone", "Samsung", "Oppo", "Vivo", "Nokia"]
const [first, ...rest] = phones
console.log(first)
console.log(rest)

//Object
const phone = {
    brand: "Apple",
    name: "iPhone 18 Pro Max",
    year: 2026
}

const updatedPhone ={
    ...phone,
    name: "iPhone Duo"
}

console.log(updatedPhone)//{ brand: 'Apple', name: 'iPhone Duo', year: 2026 }

// Combining Destructuring and Spread in function Arguments
const printSoldierInfo = ({name, ...rest}) => {
    console.log(name)
    console.log(rest)
}

const soldier = {
    id: "101",
    name: "George Washington",
    age: 32,
    rank: "Captain"
}

printSoldierInfo(soldier)//George Washington
                         //{ id: '101', age: 32, rank: 'Captain' } 

            