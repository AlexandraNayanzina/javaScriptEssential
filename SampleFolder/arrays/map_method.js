/* Map method
- returns a new array !!!
- applies a provided function to each element
 */
// Extract price to a new array

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Smartphone", price: 200},
    { name: "Tablet", price: 400},
]

products.map((product) => {
    console.log(`The price of ${product.name} is ${product.price}`);
    }

)