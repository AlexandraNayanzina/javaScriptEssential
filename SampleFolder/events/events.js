const button = document.getElementById("myButton");
const output = document.getElementById("output");
const hoverDiv = document.getElementById("hoverDiv");
const hoverOutput = document.getElementById("hoverOutput");
const inputField = document.getElementById("myInput");
const keyDownOutput = document.getElementById("keyDownOutput");


button.onclick = function (){
    output.textContent = "Button clicked!";
}

hoverDiv.onmouseover = function() {
    hoverOutput.textContent = "Mouse over the div!";
}

inputField.onkeydown = function (event) {
    keyDownOutput.textContent = `Key pressed: ${event.key}`;
}
