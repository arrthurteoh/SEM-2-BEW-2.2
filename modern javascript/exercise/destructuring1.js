//exercise 1
const { id, name, courses } = student;
const { parents: { father, mother } } = student;
console.log(id)
console.log(name)
console.log(father)
console.log(mother)


//exercise 2
const arr3 = [...arr1, ...arr2]
console.log(arr3)

const arr4 = [...arr1]
console.log(arr4)


//exercise 3
const [first1, first2, first3, first4, first5, ...secondHalf] = numbers
const firstHalf = [first1, first2, first3, first4, first5]


//exercise 4
sum(...numbers);