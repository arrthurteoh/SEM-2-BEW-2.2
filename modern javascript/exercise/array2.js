
const highRatedBooks = books.filter(book => book.ratings > 4);
console.log(highRatedBooks)


const bookTitles= books.map(book => book.title);
console.log(bookTitles)


const foundBooks= books.find(book => book.title === '1984');
console.log(foundBooks)

const sortedBooks = [...books].sort((a, b) => b.ratings - a.ratings);
console.log(sortedBooks);


const highestRatedTitle = [...books].sort((a, b) => b.ratings - a.ratings)[0].title;
console.log(highestRatedTitle);