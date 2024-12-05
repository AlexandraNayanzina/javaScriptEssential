/* Condition statements:
1. if
2. if else
3. else
4. switch
5. ternary operator
*/
let temperature = 30;
let isRaining = true;

document.getElementById("currentTemperature").innerHTML = "Current temperature is " + temperature;
document.getElementById("isRain").innerHTML = "Is raining: " + isRaining;

// If else statement
if(temperature > 30){
    if(isRaining){
        console.log("It is hot, but raining. Stay inside");
        document.getElementById("recommendation").innerHTML = "It is hot, but raining. Stay inside"
    } else {
        console.log("It is hot and no rain. Enjoy the sun");
        document.getElementById("recommendation").innerHTML = "<b>It is hot and no rain. Enjoy the sun";
    }
} else {
    if(isRaining){
        console.log("It is not hot, and rainig. Stay inside");
        document.getElementById("recommendation").innerHTML = "It is not hot, and rainig. Stay inside"
    } else {
        console.log("It is not hot and no rain. Enjoy the cold weather and sun");
        document.getElementById("recommendation").innerHTML = "It is not hot and no rain. Enjoy the cold weather and sun";
    }
}

// switch operator
let day = "Friday";
document.getElementById("dayOfWeek").innerHTML = "Today's day: " + day;

switch (day) {
    case "Monday":
        document.getElementById("dayRecommendation").innerHTML = "Start of the working week";
        break;
    case "Friday":
        document.getElementById("dayRecommendation").innerHTML = "This is the end of the working week";
        break;
    default:
        document.getElementById("dayRecommendation").innerHTML = "It a regular day";

}

// Nested if-else loop
let age = 2;
document.getElementById("userAge").innerHTML = "Your age is " + age;

let isAdult = age > 18? "is adult":"not an adult"
document.getElementById("isAdult").innerHTML = "You are " + isAdult;


let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Manager access granted";
} else {
    accessLevel = "no access granted";
}

console.log("Access level granted:" + accessLevel);

// An 'if' statement
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User";
    }
} else {
    userMessage = "Please log in to access the sustem.";
}

console.log("Welcome message:" + userMessage);



// A switch operator
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "subscriber":
        userCategory = "Subscriber";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User type is " + userCategory);

// A ternary operator

let isAuthenticated = true;
let authStatus = isAuthenticated ? "Authenticated": "Not authenticated"
console.log("Authenticated status: " + authStatus)