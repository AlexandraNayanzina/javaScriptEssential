/* filter method
- returns a new array
- contains the elements that pass specific conditions
*/

// Filter book published in the last five years
const books = [
    { name: "Jane Ostin", year: 2020 },
    { name: "Testing API", year: 1980},
    { name: "Scrum", year: 2021},
]


let filteredBooks = books.filter((book) => book.year > 2019);
filteredBooks.forEach((book => {
    console.log(`The book ${book.name} published in 5 years`);
}));
