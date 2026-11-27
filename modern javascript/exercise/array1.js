const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers)


const number = [1, 2, 3, 4, 5];
const filteredNumbers = number.filter(num => num > 2);
console.log(filteredNumbers)


const second = [1, 2, 3, 4, 5, 6];
const foundNumber = second.find(num => num % 3 === 0);
console.log(foundNumber)


const first = [1, 2, 3, 4, 5];

const result = first
  .filter(num => num > 2)
  .map(num => num ** 2);
  console.log(result)
