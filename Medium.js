 // MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number
//and its corresponding month. For example: if the user enters the number 3, then it should return the
//month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

let userInput= prompt("What is your birth month? (Please enter the corresponding number)");

if (userInput <= 1 ) {
    alert ( "January")
} 
else if (userInput <= 2 ) {
    alert ( "February")
} else if (userInput <= 3 ) {
    alert ( "March")
} else if (userInput <= 4 ) {
    alert ( "April")
} else if (userInput <= 5 ) {
    alert ( "may")
} else if (userInput <= 6 ) {
    alert ( "June")
} else if (userInput <= 7 ) {
    alert ( "July")
} else if (userInput <= 8 ) {
    alert ( "August")
} else if (userInput <= 9 ) {
    alert ( "September")
} else if (userInput <= 10 ) {
    alert ( "October")
} else if (userInput <= 11 ) {
    alert ( "November")
} else if (userInput <= 12 ) {
    alert ( "December")
} 
else if(userInput > 12) {
    alert ("Invalid Number!!! Try numbers between 1 - 12")
}