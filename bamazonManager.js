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

conn.connect(function(err){

		if (err) throw err;

		conn.query("SELECT * FROM products", function(err, res){

			market = res;
			if (err) throw err;
			managerActions(conn)
		})
})

function managerActions(con){
	
	inquirer.prompt([
        {
            type: 'list',
            name: 'mangChoice',
            message: 'What would you like to do?',
            choices: [
                "View Products for Sale",
                "View Low Inventory",
                "Add to Inventory",
                "Add new Product",
                "Exit program"
            ]
        }
    ]).then(function(selection){
        switch (selection.mangChoice){
            case "View Products for Sale":
                market.forEach(function(check){
					console.log("------------------------------------------\n",
						check.item_id + " - " + check.product_name + "\n",
						"$" + check.price + " - QTY: " + check.stock_quantity)
				})
				managerActions(con);
                break;

            case "View Low Inventory":
                var check = 0;
				console.log("The following items are low:")
				for(var i = 0; i < market.length; i++){
					if (market[i].stock_quantity < 5){
						console.log(market[i].product_name + " - QTY: " + market[i].stock_quantity);
						check++;
					}
				};
				if (check === 0){
					console.log("No Items are too low!")
				};
				managerActions(conn);
                break;

            case "Add to Inventory":
                	var curqty;

					inquirer.prompt([
				        {
				            type: 'list',
				            name: 'invChoice',
				            message: 'Which product would you like to order more of?',
				            choices: function (){
				            	var invArray = [];
				            	for(var i = 0; i < market.length; i++){
									invArray.push(market[i].product_name)
								}
								return invArray
							}
				        },
				        {
				  			name:"qtyAmt",
				    		message:"How many would you like to order?\n"
				  		}

				    ]).then(function(invselection){

				    		for(var j = 0;j < market.length;j++){
				    			if(market[j].product_name === invselection.invChoice){
				    				curqty = parseInt(market[j].stock_quantity)
				    			}
				    		}

				  			var qty = parseInt(invselection.qtyAmt)
				  			var newqty = qty + curqty
				  			var invName = invselection.invChoice

				  			console.log("Ordering " + qty + " more " + invName)

				  			con.query("UPDATE products SET stock_quantity = ? WHERE product_name = ?",
								[
									newqty,
									invName
								], 
								function(err, res){
				    				if(err) throw err;
				    				else {
				       	 				console.log("Ordered!");
				       	 				conn.query("SELECT * FROM products", function(err, res){

											market = res;
											if (err) throw err;
											managerActions(conn)
										})
				    				}
				  				}
				  			)
				    });

                break;

            case "Add new Product":
            	inquirer.prompt([
			        {
			            name: 'name',
			            message: 'What is the name of the product?',
			        },
			        {
			  			name:"qty",
			    		message:"How many would you like to order?\n"
			  		},
			  		{
			  			name:"price",
			    		message:"Sale Price?\n"
			  		},
			  		{
			  			name:"department",
			    		message:"Department?\n"
			  		},

			    ]).then(function(prodAdd){
			    	console.log("Adding product to market")
				    	conn.query("INSERT INTO products SET ?",
							{
								product_name: prodAdd.name,
								department_name: prodAdd.department,
								price: prodAdd.price,
								stock_quantity:  prodAdd.qty
							},
							function(err,res){
					    		if(err) throw err;
					    		else {
					       			console.log(res.affectedRows + " product inserted!\n");
					    		}
						});
			    })
			    conn.query("SELECT * FROM products", function(err, res){

					market = res;
					if (err) throw err;
					managerActions(conn)
				})
                break;

            case "Exit program":
                console.log("Good Bye");
                process.exit();
        }
    })
}