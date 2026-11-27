//exercise 1
const book = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    characters: ['Bilbo', 'Gandalf', 'Thorin', 'Smaug'],
    publication: {
        year: 1937,
        publisher: 'George Allen & Unwin'
    }
};


const { title, author, characters } = book;
const { publication: { year, publisher } } = book;

//exercise 2
const obj3 = {...obj1, ...obj2};
const obj4 = {...obj1};

//exercise 3
const data = {
    numbers1: [1, 2, 3, 4],
    numbers2: [5, 6, 7, 8]
};

const { numbers1: array1, numbers2: array2 } = data;
const array3 = [...array1, ...array2];
