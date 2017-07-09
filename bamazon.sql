DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10, 2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Star Wars Death Star Waffle Maker", "Home & Kitchen", 39.37, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Automatic Toothpaste Dispenser", "Sports & Outdoors", 12.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Portable Wireless Floating Bluetooth Speaker", "Bamazon Launchpad", 149.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Copper Big Fish & Little Fish Nail Clipper Set", "Health, Household & Baby Care", 9.97, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Retractable Dog Leash", "Pet Supplies", 11.85, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Original Toilet Mug", "Home & Kitchen", 12.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dead Fred Pen Holder", "Office Products", 9.36, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spirited Away Stuffed No Face Plush", "Toys & Games", 12.48, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fred THE END Dramatic Bookends", "Home & Kitchen", 18.00, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Adipose Stress Toy", "Toys & Games", 14.99, 100);