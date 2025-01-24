//Task 1: Variables
let employeeName = "John Doe";
const employeeID = 101;
var isActive = true;

console.log("Name: ", employeeName, "Type: ", typeof employeeName);
console.log("Number: ", employeeID, "Type: ", typeof employeeID);
console.log("Value: ", isActive, "Type: ", typeof isActive);

//Task 2: Primitive Data Types
let productName = "T-Shirt";
const productPrice = 20;
var isAvailable = true;

console.log("Item: ", productName, "Type: ", typeof productName);
console.log("Cost: ", productPrice, "Type: ", typeof productPrice);
console.log("In Stock: ", isAvailable, "Type: ", typeof isAvailable);

//Task 3 : Number Data Type
let accountBalance = 1000;

//Adding money into the account balance
console.log("New Balance after deposit:", accountBalance += 500);

//Buying product using the account balance
console.log("New Balance after payment:", accountBalance -= 250);

//gained interest on account balance at the end of month
console.log("Interest Gained:", accountBalance *= .05);
