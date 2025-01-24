//Task 1: Variables
let employeeName = "John Doe"; //assigning variables values
const employeeID = 101;
var isActive = true;

//logging each variable's value and type
console.log("Name: ", employeeName, "Type: ", typeof employeeName);
console.log("Number: ", employeeID, "Type: ", typeof employeeID);
console.log("Value: ", isActive, "Type: ", typeof isActive);

//Task 2: Primitive Data Types
let productName = "T-Shirt"; //assigning variables values
const productPrice = 20;
var isAvailable = true;

//logging each variable's value and type
console.log("Item: ", productName, "Type: ", typeof productName);
console.log("Cost: ", productPrice, "Type: ", typeof productPrice);
console.log("In Stock: ", isAvailable, "Type: ", typeof isAvailable);

//Task 3 : Number Data Type
let accountBalance = 1000; //assigning variable number data type

//Adding money into the account balance
console.log("New Balance after deposit:", accountBalance += 500);

//Buying product using the account balance
console.log("New Balance after payment:", accountBalance -= 250);

//gained interest on account balance at the end of month
console.log("Interest Gained:", accountBalance *= .05);

//Task 4: String Data Type
let customerName = "Elijah Martin"; //assigning variables string data types
let welcomeMessage = "Welcome to our store";

//putting strings together using concatenate
console.log(welcomeMessage.concat(" ", customerName));

//Task 5: Boolean Data Type
let isLoggedIn = true; //assigning variables boolean data types
let isMember = false;

//using logical operations to see if the user has access to special promos
let hasAccess = isLoggedIn && !isMember; 
console.log("Access Granted:", hasAccess);