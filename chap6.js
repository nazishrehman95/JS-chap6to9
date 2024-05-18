//Question#1
let a = 10;

console.log("Result: The value of a is:", a);
console.log("The value of ++a is:", ++a);
console.log("Now the value of a is:", a);
console.log("The value of ++a is:", ++a);
console.log("Now the value of a is:", a);
console.log("The value of --a is:", --a);
console.log("Now the value of a is:", a);
console.log("The value of a-- is:", a--);
console.log("Now the value of a is:", a);

//Question#2
var A = 2, b = 1;

// Stage 1
--A;

// Stage 2
var stage2 = --A - --b;

// Stage 3
var stage3 = --A - --b + ++b;

// Stage 4
var result = --A - --b + ++b + b--;

// Output
console.log("Value of A after Stage 1:", A);
console.log("Value of b after Stage 1:", b);
console.log("Result after Stage 2:", stage2);
console.log("Result after Stage 3:", stage3);
console.log("Result after Stage 4:", result);

//Question#3
let name = prompt("Please enter your name:");
alert("Hello, " + name + "! Nice to meet you!");

//Question#5
// a) Take three subjects' names from the user and store them in 3 different variables.
let subject1 = prompt("Enter the first subject name:");
let subject2 = prompt("Enter the second subject name:");
let subject3 = prompt("Enter the third subject name:");

// b) Total marks for each subject is 100, store it in another variable.
const totalMarks = 100;

// c) Take obtained marks for the first subject from the user and store it in a different variable.
let obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

// d) Take obtained marks for the remaining 2 subjects from the user and store them in variables.
let obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
let obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// e) Calculate total marks and percentage.
let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
let percentage1 = (obtainedMarks1 / totalMarks) * 100;
let percentage2 = (obtainedMarks2 / totalMarks) * 100;
let percentage3 = (obtainedMarks3 / totalMarks) * 100;
let overallPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Create a table to display the result
let table = "<table border='1'><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>";
table += "<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage1.toFixed(2) + "%</td></tr>";
table += "<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage2.toFixed(2) + "%</td></tr>";
table += "<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage3.toFixed(2) + "%</td></tr>";
table += "<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th><th>" + overallPercentage.toFixed(2) + "%</th></tr></table>";

// Display the table in the document
document.write(table);