//for loops
for(var i = 1; i <= 5; i++){
    console.log(i)
}

for(var i = 1; i < 6; i++){
    console.log(i)
}


//while loops
let pushUp = 1
while (pushUp <= 20){
    console.log("You did " + pushUp + " push-ups!");
    pushUp++;
}


//loops with arrays
let fruits = ["Apple", "Banana", "Orange"]
for (let fruits of fruits){
    console.log(fruit)
}

//this is an example of an array 'for...of' loop

//loops with objects
const user = {name: "Alice", role: "admin"}
Object.values(property).forEach((prop) => {
   console.log(prop)
})

//array of objects interactions with loops
const listOfUser = [
    {
        name: "Alex",
        age: "27",
        role: "Senior Software Developer",
        experience: 60
    },
    {
        name: "James",
        age: "24",
        role: "Network Engineer",
        experience: 24
    },
    {
        name: "Alicia",
        age: "22",
        role: "Software Developer",
        experience: 24
    },
]

// Output the user's name, age, role and experience
for(const user of listOfUser){
    console.log(`This user's name is ${user.name}`)
    console.log(`This user is ${user.name} years old`)
    console.log(`This user's role is ${user.name}`)
    console.log(`This user has ${user.name} months of experience`)
}

//Modify the code above, feel free to add anything, but i want the
//amount of experience displayed to be listed as years and months

for (const user of listOfUser) {
    const years = Math.floor(user.experience / 12);
    const months = user.experience % 12;

    console.log(`This user's name is ${user.name}`);
    console.log(`This user is ${user.age} years old`);
    console.log(`This user's role is ${user.role}`);
    if (months == 0) {
        console.log(`This user has ${years} years of experience`);
    } else {
        console.log(`This user has ${years} years and ${months} months of experience`);
    }
}
