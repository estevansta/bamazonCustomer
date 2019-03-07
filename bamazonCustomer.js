// require methods for using the mysql and inquirer npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "googers123",
  database: "bamazon"
});

// callback connection function to display error in CL if is not able to connect
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // call back functions, display table as soon as app runs
  displayTable();
  // howManyUnits();
  // checkStock();
  // totalCost();
});

// display table function
function displayTable() {
  // grabbing the data from my products table
  console.log(" ")
  console.log("        WELCOME TO BAMAZON ");
  console.log("-----------------------------------");
  console.log("ID | Item Name  | Deparment | Price | Stock ")
  connection.query("SELECT * FROM products", function(err, res) {
    // looping through length of the results
    for (var i = 0; i < res.length; i++) {
       // console.log the data onto the command line
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + "$"+ res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");
  });
}


inquirer
.prompt({
  name: "item",
  type: "input",
  message: "Input the item ID of the item you wish to purchase",

})

.then(function(answer) {
  // based on their answer, either call the bid or the post functions
  if (answer.res.product_name + " | " + answer.res.price) 
    (console.log(answer));
  });

