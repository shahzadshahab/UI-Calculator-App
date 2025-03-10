// ================================
// Simple UI Calculator - JavaScript File
// Author: Shahzad S.
// Description: Provides functionality for the calculator
// ================================


const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Invalid Input";
    }
    
}

function backSpace(){
    display.value = display.value.slice(0,-1);
}
