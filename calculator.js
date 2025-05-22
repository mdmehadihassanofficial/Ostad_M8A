// VARIABLES
let displayBox = document.querySelector(".inner-display");
let list = document.querySelectorAll(".show-display");


// SHOW NUMBER FUNCTION
function showDisplay(event) {

    const x = event.target.innerText
    if (displayBox.value == 0 ) {
        return displayBox.value = x;
    }
    return displayBox.value += x;
}

// RESULT FUNCTION
function calculate() {
    let resulte = displayBox.value;
    displayBox.value = eval(resulte);
}

// CLEAR ALL NUMBERS
function allClear() {
    displayBox.value = 0;
}

// ONE BY ONE CLEAR NUMBER 
function clear() {
    let text = displayBox.value;
    if (text.length === 1) {
        displayBox.value = 0;
    } else {
        displayBox.value = text.substring(0 , text.length - 1)
    }
}

// EVENTS
document.querySelector(".all-clear").addEventListener("click" , allClear);
document.querySelector(".clear-list").addEventListener("click" , clear);
document.querySelector(".calculate").addEventListener("click" , calculate);
list.forEach(item =>{
    item.addEventListener("click",showDisplay)
})

// Popup Js 
// Popup Buttons
let successBtn = document.getElementById("success");
let errorBtn = document.getElementById("error");

// Success Popup Event Listeners
successBtn.addEventListener("click", function() {
       let successPopup = document.getElementById("successModel");
       successPopup.style.opacity = "1";
       successPopup.style.visibility = "visible";
});

// Error Popup Event Listeners
errorBtn.addEventListener("click", function() {
       let errorPopup = document.getElementById("errorModel");
       errorPopup.style.opacity = "1";
       errorPopup.style.visibility = "visible";
});

// Close Popup Function

let closeSuccessBtn = document.getElementById("closeSuccessBtn");
let closeErrorBtn = document.getElementById("closeErrorBtn");

//  Success Popup Close Event Listeners      
closeSuccessBtn.addEventListener("click", function() {
                let successPopup = document.getElementById("successModel");
                successPopup.style.opacity = "0";
                successPopup.style.visibility = "hidden";
});

// Error Popup Close Event Listeners
closeErrorBtn.addEventListener("click", function() {
                let errorPopup = document.getElementById("errorModel");
                errorPopup.style.opacity = "0";
                errorPopup.style.visibility = "hidden";
});

