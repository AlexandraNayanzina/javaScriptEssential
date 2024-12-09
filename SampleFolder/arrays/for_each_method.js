/* forEach method
- iterates though the array
- applies the provided func to each element
- does NOT return a new array !!!
*/
// Sending a welcome email to each user

function sendWelcomeEmail(name, email) {
    console.log(`Welcome email sent to ${name} to their email ${email}`);
}

const users = [
    { name: "Alice", email: "alice.gmail.com"},
    { name: "Bob", email: "bob.gmail.com"},
    { name: "Karren", email: "karren.gmail.com"},
]

users.forEach((user) => {
        sendWelcomeEmail(user.name, user.email)
    }
)