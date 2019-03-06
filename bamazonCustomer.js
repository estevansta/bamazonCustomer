// require methods for using the mysql and inquirer npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // my PORT 3306
  port: 3306,

  // username
  user: "bamazon",

  // password
  password: "",
  database: "bamazon"
});

// test connection, if there's an error throw an err 
connection.connect(function(err) {
    if (err) throw err;
    inputItem();
});

function inputItem() {
    inquirer
      .prompt({
        name: "action",
        type: "input",
        message: "Input the ID of the item you wish to purchase"
      })
      // code used from previous activity top5000 songs on mysql
      .then(function(answer) {
        var query = "SELECT position, song, year FROM top5000 WHERE ?";
        connection.query(query, { artist: answer.artist }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
          }
          inputItem();
        });
      });

    };