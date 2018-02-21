var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",
  password: "joyjoy72",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId);
  displayAll()
});

// select all Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
function displayAll(){
  connection.query ("select * from products", function(err, res){
    console.log("all products");
    for(i=0; i<res.length; i++){
     console.log(res[i].item_id + "  " + res[i].product_name +"  "+ res[i].department_name + "  "+ res[i].price);
    }
  })
}

