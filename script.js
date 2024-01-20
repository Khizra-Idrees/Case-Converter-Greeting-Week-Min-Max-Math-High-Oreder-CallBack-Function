// JavaScript Assignments Class 44

document.write("Assignment No. 1: Title Case Converter Function");
document.write("</br>");

// Create a JavaScript function `convertToTitleCase` that takes a string as an argument and converts it into title case (capitalizes the first letter of each word). Ensure the function handles different cases, including strings with leading or trailing spaces.

// Function to convert a string into title case
function convertToTitleCase(string){
    
    // Convert a string into Array through split
    let stringToArray = string.split(" ");

    // Iterate through each word in the array
    for(i = 0; i < stringToArray.length; i++){

        // Capital the first letter of each word and make the rest of the letters into lowercase
        stringToArray[i] = stringToArray[i].charAt(0).toUpperCase() + stringToArray[i].slice(1).toLowerCase();
    }

    // Join the array into a single string
    let result = stringToArray.join(" ");

    // Final result
    console.log(result);
    document.write(result);
}

convertToTitleCase("i am programmer");
document.write("</br>");
document.write("</br>");


document.write("Assignment No. 2: Time-Based Greeting Function");
document.write("</br>");

// Optimize and enhance the existing `getGreeting` function, which provides a time-based greeting. Refactor the code for improved readability, handle edge cases gracefully, and test the function with various times of the day.

// Created a function that returns the greeting every time
function getGreeting() {

    // Create a variable that holds the Date object.
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    // Give Conditions that if it's greater than 5am and less than 12pm that returns good morning
    if (currentHour >= 5 && currentHour < 12) {
        console.log("GOOD MORNING");
        document.write("GOOD MORNING");
    } 
    
    // Give Conditions that if it's greater than 12pm and less than 18pm that returns good afternoon
    else if (currentHour >= 12 && currentHour < 18) {
        console.log("GOOD AFTERNOON");
        document.write("GOOD AFTERNOON");
    } 
    
    // Give Conditions that if it's greater than 18pm and less than 24am that returns good evening
    else if (currentHour >= 18 && currentHour < 24) {
        console.log("GOOD EVENING");
        document.write("GOOD EVENING");
    }
    
    // if all the conditions is wrong that returns something is wrong
    else {
        console.log("Something is wrong");
        document.write("Something is wrong");
    }
}
getGreeting()

document.write("</br>");
document.write("</br>");


document.write("Assignment No. 3: Current Day of the Week Function");
document.write("</br>");


// Create a JavaScript function, `getCurrentDayOfWeek`, that returns the current day of the week. Utilize the JavaScript `Date` object, store days of the week in an array, and ensure the function handles errors or unexpected scenarios. Test the function with different dates.

// Create a function that tell today is which day
function getCurrentDayOfWeek(){

    // Creat a Array in which we add all the week days name
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    // Create a variable that holds the Date object.
    // dayOfWeek is a Date object representing the current date or a specific date.
    let dayOfWeek = new Date();

    // The line of code combines these parts to get the name of the current day. It uses the result of dayOfWeek.getDay() as an index to access the corresponding day name from the days array.
    // And .getDay() is a method of date object
    let currentDay = days[dayOfWeek.getDay()];

    console.log("Today is" + " " + currentDay);
    document.write("Today is" + " " + currentDay);
}
getCurrentDayOfWeek();

document.write("</br>");
document.write("</br>");

document.write("Assignment No. 4: Console-Based Digital Clock in 24-Hour Format");
document.write("</br>");
document.write("Seperate File")

document.write("</br>");
document.write("</br>");

document.write("Assignment No. 5: Console-Based Digital Clock in 12-Hour Format");
document.write("</br>");
document.write("Seperate File");

document.write("</br>");
document.write("</br>");

document.write("Assignment No. 6: Find Max and Min Values");
document.write("</br>");

// Create a JavaScript function `findMaxMin` that takes a variable number of numeric arguments and finds the maximum and minimum values among them using the `Math` methods. Handle different cases gracefully and provide comments to explain the logic.

function findMaxMin(){
    let x = Math.min(44 , 32 , 56 , 21 , 67);
    let y = Math.max(112 , 334 , 589 , 456 , 820);
    console.log("Minimum value " + x);
    console.log("Maximum value " + y);

    document.write("Minimum value " + x);
    document.write("</br>");
    document.write("Maximum value " + y);
}
findMaxMin();

document.write("</br>");
document.write("</br>");

document.write("Assignment No. 7: Math Object Exploration");
document.write("</br>");

// Create a JavaScript program that explores and demonstrates the usage of various methods available in the `Math` object.

// Math Object Methods:

//round
//ceil
//floor
//sqrt
//abs
//pow
//max
//min
//random

function exploreMathObject(){

    document.write("1.Math.Round");
    document.write("</br>");

    // Round always give us nearest intiger..if there is 24.5 or .5 plus values it give us 25.. but if there is 24.4 or .3 so it give us 24

    let a = 23.8;
    let b = 23.4;
    console.log(Math.round(a));
    console.log(Math.round(b));

    document.write(Math.round(a));
    document.write("</br>");
    document.write(Math.round(b));

    document.write("</br>");
    document.write("</br>");

    document.write("2.Math.Ceil");
    document.write("</br>");

    // Ceil always give us a top value if there is 23.8 so ceil always give us 24 but if there is just 23 than ceil give us 23

    let c = 53.8;
    let d = 53;
    console.log(Math.ceil(c));
    console.log(Math.ceil(d));

    document.write(Math.ceil(c));
    document.write("</br>");
    document.write(Math.ceil(d));

    document.write("</br>");
    document.write("</br>");

    document.write("3.Math.Floor");
    document.write("</br>");

    // The floor always give us the bottom value..Whether is 23.8 or 23.2 its always give us 23

    let e = 11.8;
    let f = 11.3;
    console.log(Math.floor(e));
    console.log(Math.floor(f));

    document.write(Math.floor(e));
    document.write("</br>");
    document.write(Math.floor(f));

    document.write("</br>");
    document.write("</br>");

    document.write("4.Math.Trunc");
    document.write("</br>");

    // Trunc doesn't see the points value its just give us the main value..whether 23.8 or 23.2 its just gives us 23

    let g = 46.8;
    let h = 46.3;
    console.log(Math.trunc(g));
    console.log(Math.trunc(h));

    document.write(Math.trunc(g));
    document.write("</br>");
    document.write(Math.trunc(h));

    document.write("</br>");
    document.write("</br>");

    document.write("5.Math.Abs(Absolute)");
    document.write("</br>");

    // Absolute convert negative value into positive and string value into num..

    let i = -34.8;
    let j = "62.3";
    console.log(Math.abs(i));
    console.log(Math.abs(j));

    document.write(Math.abs(i));
    document.write("</br>");
    document.write(Math.abs(j));

    document.write("</br>");
    document.write("</br>");

    document.write("6.Math.Sqrt(Square)");
    document.write("</br>");

    // Sqrt give us square of the number

    let k = 21.8;
    let l = 74.3;
    console.log(Math.sqrt(k));

    // toFixed is from number object..It is used for how much number you want after decimal
    console.log(Math.sqrt(l).toFixed(2));

    document.write(Math.sqrt(k));
    document.write("</br>");
    document.write(Math.sqrt(l).toFixed(2));

    document.write("</br>");
    document.write("</br>");

    document.write("7.Math.Power");
    document.write("</br>");

    // Power always wants two arguments..Exponent and Base

    let m = 8;
    let n = 6;
    console.log(Math.pow(m , 2));
    console.log(Math.pow(n , 6));

    document.write(Math.pow(m , 2));
    document.write("</br>");
    document.write(Math.pow(n , 6));

    document.write("</br>");
    document.write("</br>");

    document.write("8.Math.Random");
    document.write("</br>");

    // Random always give us random values.. Greather than 0 and Less than 1 
    
    console.log(Math.random());
    document.write(Math.random());

}
exploreMathObject();

document.write("</br>");
document.write("</br>");

document.write("Final Assignment: Higher-Order Functions and Callbacks");
document.write("</br>");

// Create a JavaScript program that leverages higher-order functions and callback functions. The program should demonstrate the concept of passing functions as arguments and using them within higher-order functions.

// Heigher-Order is just a normal function
// The highorder function takes another function as an argument


// performOperation is a higher-order function that takes two numbers (num1 and num2) and a callback function (operationCallback). It applies the callback function to the provided numbers.
function performOperation(num1, num2, operationCallback) {

    // operationCallback is a callback function passed as an argument to the performOperation function. A callback function is a function that is passed as a parameter to another function and is intended to be executed or *called back* later with that function.
    return operationCallback(num1, num2);
}

// Callback function for addition
function addition(num1, num2) {
    return num1 + num2;
}

// Callback function for multiplication
function multiplication(num1, num2) {
    return num1 * num2;
}

// Callback function for subtraction
function subtraction(num1, num2) {
    return num1 - num2;
}

// displayResult function is an another higher-order function. Its purpose is to display a formatted result message to the console
function displayResult(message, value) {
    console.log(`${message}: ${value}`);
    document.write(`${message}: ${value}`);
}

// In this case, the addition function is passed as the operationCallback. It means that result1 will be the result of adding 5 and 3, as specified by the addition callback.
var result1 = performOperation(9, 5, addition);
displayResult("Addition Result", result1);
document.write("</br>");

var result2 = performOperation(6, 8, multiplication);
displayResult("Multiplication Result", result2);
document.write("</br>");

var result3 = performOperation(34, 7, subtraction);
displayResult("Subtraction Result", result3);

























