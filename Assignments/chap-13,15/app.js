chap-13,15
// ARRAYS

//  Declare an empty array using JS object notation to store
// student names in future.
// var studNames = [];
// Declare and initialize a strings array.
// var studNames = ["John", "Mary", "Jane", "Susan", "Jim"];
// Declare and initialize a numbers array.
// var studNames = [12, 34, 56, 78, 90];
// Declare and initialize a booleans array.
// var studNames = [true, false, true, false, true];
// Declare and initialize a mixed array.
// var studNames = ["John", 12, true, "Mary", 56, false];
// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
// var qualification = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M. Phil.",
//   "PhD",
// ];
// document.write("<h2>Qualification<?h2>");
// document.write("<ol>");
// for (var i = 0; i < qualification.length; i++) {
//   document.write("<li>" + qualification[i] + "</li>");
// }
// document.write("</ol>");
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students
// Student names array
// var studentNames = ["Maryam", "Ammara", "saleha"];

//  Scores array
// var scores = [40, 60, 80];

// // Calculate percentages
// var totalMarks = 100;
// var percentages = [];

// for (var i = 0; i < scores.length; i++) {
// var percentage = (scores[i] / totalMarks) * 100;
// percentages.push(percentage.toFixed(2));
// Round to 2 decimal places and add to percentages array
// }

// Display scores and percentages
// var table = "<table>";
// table += "<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>";

//   for (var i = 0; i < studentNames.length; i++) {
//   table += "<tr>";
//   table += "<td>" + studentNames[i] + "</td>";
//   table +=
//     "<td>" + "scores of " + studentNames[i] + " is " + scores[i] + "</td>";
//   table += "<td>" + percentages[i] + "%</td>";
//   table += "</tr>";
// }

// table += "</table>";

//  Display table in the HTML document
// document.getElementById("tableContainer").innerHTML = table;

Q9:
Ans:
var colorNames = ["blue", "pink", "brown", "orang"];
//  console.log(colorNames);
// var startColour = prompt(
//   "Which colour you want to add in the start of an array"
// );
// colorNames.unshift(startColour);
//  console.log(colorNames);
// var lastColour = prompt("Which colour you want to add in the last of an array");
// colorNames.push(lastColour);
// console.log(colorNames);
// colorNames.unshift("red", "yellow");
// console.log(colorNames);
// colorNames.shift();
// console.log(colorNames);
// var indexAdd = prompt("which index do you want to add a color");
// var colorAdd = prompt("which color do you want to add");
// colorNames.splice(indexAdd, 0, colorAdd);
// console.log(colorNames);
// var indexDel = prompt("which index do you want to delete");
// var colorDel = prompt("how many colors do you want to delete");
// colorNames.splice(indexDel, colorDel);
// console.log(colorNames);
Q10:
Ans:
// var scores = ["320", "230", 480, " 120"];
// var orderedScores = scores.sort();
// document.write("scores of students" + scores);
// document.write("<br>");
// document.write("ordered scores of students" + orderedScores);
Q11:
Ans:
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array
// var cities = ["karachi", "Lahore", "Islamabad", "Quetta," Peshawar",];
// var selectedCities = cities.slice(0, 2);
// console.log(selectedCities);
Q12:
Ans:
// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// var arr = ["This ", "is", "my", "cat"];
// var join = arr.join();
// document.write("<h2>Array:</h2>");
// document.write(join);
// document.write("<h2>String:</h2>");
//ar arr = ["This ", "is", "my", "cat"];
// var join = arr.join(" ");
// document.write(join);
Q13:
Ans:
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out
// var fifoArray = [];
// // console.log(fifoArray);
// fifoArray.push("Keyboard");
// // console.log(fifoArray);
// fifoArray.push("Mouse");
// // console.log(fifoArray);
// fifoArray.push("Printer");
// // console.log(fifoArray);
// fifoArray.push("Monitor");
// console.log(fifoArray);
// var join = fifoArray.join(",");
// document.write(join);
// var firstValue = fifoArray.shift();
// var secondValue = fifoArray.shift();
// var thirdValue = fifoArray.shift();
// var fourthValue = fifoArray.shift();
// document.write("<h2>Out:</h2>");
// document.write(firstValue);
// document.write("<h2>Out:</h2>");
// document.write(secondValue);
// document.write("<h2>Out:</h2>");
// document.write(thirdValue);
// document.write("<h2>Out:</h2>");
// document.write(fourthValue);
Q14:
Ans:
// Create a new array. Store values one by one in such a way
// that you can access the values in revers order.
//  (LAST- In First Out)

// var fifoArray = [];
// console.log(fifoArray);
// fifoArray.push("Keyboard");
// console.log(fifoArray);
// fifoArray.push("Mouse");
// console.log(fifoArray);
// fifoArray.push("Printer");
// console.log(fifoArray);
// fifoArray.push("Monitor");
// console.log(fifoArray);
// var join = fifoArray.join(",");
// document.write("<h2>Devices:</h2>");
// document.write(join);
// var firstValue = fifoArray.pop();
// var secondValue = fifoArray.pop();
// var thirdValue = fifoArray.pop();
// var fourthValue = fifoArray.pop();
// document.write("<h2>Out:</h2>");
// document.write(firstValue);
// document.write("<h2>Out:</h2>");
// document.write(secondValue);
// document.write("<h2>Out:</h2>");
// document.write(thirdValue);
// document.write("<h2>Out:</h2>");
// document.write(fourthValue);
Q15:
Ans:
// Write a program to store phone manufacturers (Apple,
//   Samsung, Motorola, Nokia, Sony & Haier) in an array.
//   Display the following dropdown/select menu in your
//   browser using document.write() method
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Haier"];
// document.write("<select>");
// for (var i = 0; i < phoneManufacturers.length; i++) {
//   document.write("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");
