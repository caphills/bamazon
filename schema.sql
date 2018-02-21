DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price decimal(10,2) NULL,
  stock_quantity INT NULL,
  product_sales decimal(10,2) NULL,
  PRIMARY KEY (item_id)
);

insert into products (product_name, department_name, price, stock_quantity, product_sales)
values
("lipstick", "cosmetics",20.00,50 ,0.00),
("cologne", "cosmetics",65.00,25 ,0.00),
("earings", "accessories",15.00,20 ,0.00),
("bracelet", "accessories",8.00 ,15 ,0.00),
("glasses", "optical",120.00 ,50 ,0.00),
("lenses", "optical",25.00 ,50 ,0.00),
("frames", "optical",120.00 ,50,0.00),
("ring", "accessories",15.00 ,25,0.00),
("watch", "accessories",120.00,10,0.00),
("handbag", "accessories",120.00 ,12 ,0.00),
("shoes", "clothing",150.00,20,0.00),
("shirt", "clothing",80.00 , 18,0.00),
("jacket", "clothing",120.00 ,6 ,0.00),
("socks", "clothing", 12.00,35 ,0.00);

select * from products;