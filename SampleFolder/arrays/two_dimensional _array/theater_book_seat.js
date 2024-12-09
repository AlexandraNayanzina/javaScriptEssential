const theaterSeats = [
    ['X', '0', 'X'],
    ['0', 'X', '0'],
    ['X', '0', 'X']
]
function bookSeat(row, col) {
    if (theaterSeats[row][col] === '0') {
        theaterSeats[row][col] = 'X';
        updateSeatStatus(row, col, 'booked');
        alert("Seat is booked");
    } else {
        alert("Seat is already taken");
    }
}

function updateSeatStatus(row, col, status) {
    const seats = document.getElementsByClassName('seat');
    const index = row * 3 + col;
    seats[index].classList.remove('available', 'booked');
    seats[index].classList.add(status);
}

function bookRandomSeat() {}
const availableSeats = [];

for (let row = 0; row < theaterSeats.length; row ++) {
    for(let col = 0; col < theaterSeats[row].length; col++) {
        if (theaterSeats[row][col] === '0') {
            availableSeats.push({row, col});
        }
    }
}

if (availableSeats.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableSeats.length);
    const {row, col} = availableSeats[randomIndex];
    bookSeat(row, col);

} else {
    alert("All seats are booked");
}