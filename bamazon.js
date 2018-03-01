var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "joyjoy72",
  database: "bamazonDB"
});
// connect
connection.connect(function(err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId);
  displayAll()
});

// select all Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
function displayAll(){
  connection.query ("select * from products", function(err, res){
    start(res);
  })
}


// function which prompts the user for what action they should take
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy
function start(res) {
  // console.log("all products");
  // console.log(res.length);
  inquirer
  .prompt({
    name: "item",
    type: "list",
    message: "what would you like to buy",
    choices: function(){
      var itemArray = [];
      var itemLine;
      for(i=0; i<res.length; i++){ 
        itemLine = res[i].item_id + "  " + res[i].product_name +"  "+ res[i].department_name + "  "+ res[i].price;
        // var item = res[i];
        itemArray.push(itemLine);
      }
      // console.log(itemArray);
      return itemArray   
    }
  })
  .then(function(answer){
    // console.log("answer is " + answer);
    var itemParts = answer.item.split(" ");
    var itemID = itemParts[0];

    inquirer
      .prompt({
          name: "quantity",
          type: "input",
          message: "how many would you like to buy?",

        })
   })
  .then(function(response){
    // check stock quantity here through sql
    var newValue = response;    // need to update the stock quantity by subtracting the order quantity 
   if (newValue) {
      //   // here is where we are going to do update to the product table for this item
     connection.query('UPDATE products SET ? WHERE itemID = ?', [{ stock_quantity: oldValue - newValue }, itemID]);
      console.log("here is your item, wanna select another item?")
    //  displayAll();
   } else {
    console.log("")
  }
  })
}

