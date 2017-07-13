# bamazon

Bamazon Customer

Bamazon customer allows users to order from the Bamazon.  Here is the database in MySQL.
![MySQL starting database](/screenshots/bcmsqlstart.png?raw=true "Optional Title")

Start by running node bamazonCustomer.js.  A list of ids, product names, and prices will populate.
![Node bamazon marketplace](/screenshots/bcnodestart.png?raw=true "Optional Title")

User will be prompted to reference a product using the id.  Blanks, letters, and ids that aren't in the marketplace will rejected.
![Node bamazon QA](/screenshots/bcnodeqa.png?raw=true "Optional Title")
User will then request quantity of item.  If the user requests too many items, they will be notified.

Once the user requests a quantity that is under the amount available, they will be "charged" the total, and that quantity will be removed from the database.
![Node bamazon sale](/screenshots/bcnodeend.png?raw=true "Optional Title")
![MySQL bamazon sale](/screenshots/bcmsqlend.png?raw=true "Optional Title")

Bamazon Manager

Bamazon Manager allows managers to view the entire product list, view only the low inventory, add inventory, and add a new product to the database.

Start by running node bamazonManager.js.  A list of those four options and the option to quit will populate.
The view product is similar to the bamazon customer, but also adds quantities.
![Node bamazon marketplace](/screenshots/bmnodevp.png?raw=true "Optional Title")

View Low Inventory will give a much shorter list of only the products that need inventory.

Adding inventory will give a scrollable list of all the products to chose from.
![Node bamazon marketplace](/screenshots/bmnodevli.png?raw=true "Optional Title")

The manager will then propmpted with a quantity.  After placing a number, that amount will be ordered and added to the database
![Node bamazon marketplace](/screenshots/bmnodeaddi.png?raw=true "Optional Title")

Adding a product, will give the manager a series of prompts, for Name of the product, price, department, and quanitity to order.
![Node bamazon marketplace](/screenshots/bmnodeaddnp.png?raw=true "Optional Title")

Once finished the manager can check the product list again to make sure the quanities and new product have been added.
![Node bamazon marketplace](/screenshots/bmnodeend.png?raw=true "Optional Title")

And it can be checked in MySQL to ensure process is completed.
![Node bamazon marketplace](/screenshots/bmmsqlend.png?raw=true "Optional Title")
