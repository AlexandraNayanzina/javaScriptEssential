document.getElementById("submit").onclick = function() {
    let firstItem = document.getElementById("firstGrocery").value;
    firstItem = Number(firstItem);
    let secondItem = Number(document.getElementById("secondGrocery").value);
    let thirdItem = Number(document.getElementById("thirdGrocery").value);

    //let totalAmount = myFunc(firstItem, secondItem, thirdItem);
    let totalAmount = myTotal(firstItem, secondItem, thirdItem);
    document.getElementById("total").innerHTML = "The total amount is: $ " + totalAmount;
}

// Function declaration - traditional way
function calcTotal(first, second, third){
    let total = first + second + third;
    return total;
}

// Function  expression
const myFunc = function (first, second, third) {
    let total = first + second + third;
    return total;
}

//Arrow function

const myTotal = (firstItem, secondItem, thirdItem) => firstItem + secondItem + thirdItem;


