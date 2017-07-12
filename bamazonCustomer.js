"use strict";

var mysql = require("mysql");
var inquirer = require("inquirer");

var conn = mysql.createConnection({
		host: "localhost",
		port: 3306,
		user:"root",
		password:"Mamumysql!",
		database:"bamazonDB"
});

var market;

var pim;//position in market object

conn.connect(function(err){

	if (err) throw err;

	conn.query("SELECT * FROM products", function(err, res){

		market = res;
		if (err) throw err;

		market.forEach(function(check){
			console.log("------------------------------------------\n", check.item_id + " - " + check.product_name + "\n",
						"$" + check.price)
			})
		productID()
	})
})

function productID(){
	inquirer.prompt(
		{
    		name:"id",
    		message:"What is the ID of the product you would like to purchase?\n"
  		}).then(function(product) {
  			for (var i = 0; i<market.length; i++){
  				if(product.id == market[i].item_id){
  					console.log(market[i].product_name)
  					pim = i
  					userQty();
  				}
  			}
  			if (pim == undefined){
  				console.log("Not a Valid ID");
  				productID()
  			}
  			
  		})
  	
}

function userQty(){
	inquirer.prompt(
		{
    		name:"qty",
    		message:"Quantity?\n"
  		}).then(function(user){
  			if(user.qty > market[pim].stock_quantity){
  				console.log("Only " + market[pim].stock_quantity + " " + market[pim].product_name + " in stock")
  				userQty();
  			} else {
  				sell(user.qty)
  			}

  		})
}

function sell(userQty){

	var qty = market[pim].stock_quantity - userQty;
	var item = market[pim].item_id

	var cost = userQty * market[pim].price
	conn.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?",
		[
			qty,
			item
		], 
		function(err, res){
    		if(err) throw err;
    		else {
       	 	console.log("Congratulations! You owe me $"+cost+".  Thank you for shopping at Bamazon!");
       	 	process.exit()
    	}
  	});

}