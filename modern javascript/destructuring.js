// Object Destructuring
const student = {
    name: "John Doe",
    age: "18",
    grade: "Diploma",
    parents: {
        father: "John Pork",
        mother: "Jane Doe"
    }
}
const name = student.name // The noob way
const { age, grade } = student // The pro way (destructuring)

// Nested Destructuring
const{parents: {father, mother}} = student
const{parents} = student

console.log(name)
console.log(age)
console.log(grade)
console.log(father)
console.log(mother)
console.log(parents)

// Destructuring Arrays
const colors = ["red", "green", "blue"]
const [firstColor, secondColor, thirdColor] = colors
console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)

//Destructuring Function Parameters
function greetPerson({name, age}){
    console.log(`Hello, ${name}. You are ${age} years old.`)
}

const person = {
    name:"Jackie Chan",
    age: 67
}
greetPerson(person)

//Write me the above function, name it greetPersonWithoutDestructuring, do it
//the way without destructuring. The call of the function has to be the same, only
//passing person as an entire object variable in.

function greetPersonWithoutDestructuring(person){
    console.log(`Hello, ${person.name}. You are ${person.age} years old.`)
}
greetPersonWithoutDestructuring(person)

//Default values with Destructuring
const car = {
    brand: "Toyota",
    model: "Supra",
    color: "blue" // You can try commenting this line
}
//             Default value of 'color' is black
const{ brand, model, color = "black"} = car
console.log(color)

// You can do the same thing with arrays
const shoes = [ "Air Jordan", "Yeezy" ]
const [firstShoes, secondShoes, thirdShoes = "Speedcat"] = shoes
console.log(thirdShoes)