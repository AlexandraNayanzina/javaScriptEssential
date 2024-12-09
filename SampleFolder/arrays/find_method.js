/* filter methos
- returns first element that satisfied a specific condition
*/

const books = [
    { name: "Jane Ostin", year: 2020 },
    { name: "Testing API", year: 1980},
    { name: "Scrum", year: 2020},
]

let bookYearTwenty = books.find((book) =>
    book.year = 2020
)
console.log("The first book in a library published on 2020" + bookYearTwenty.name);

