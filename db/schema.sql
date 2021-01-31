DROP DATABASE IF EXISTS ebdb;

CREATE DATABASE ebdb;

USE ebdb;

CREATE TABLE product (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(255),
  categoryId INT,
  quantity INT,
  image_url VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

CREATE TABLE orders (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
street_address VARCHAR(255),
city VARCHAR(255),
ordered_at DATETIME NOT NULL,
scheduled_delivery DATETIME NOT NULL,
neighborhood VARCHAR(255),
email VARCHAR(255),
phone VARCHAR(255)
);

CREATE TABLE order_item (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT NOT NULL,
  order_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 0,

INDEX `idx_order_item_product` (product_id ASC),
  CONSTRAINT `fk_order_item_product`
    FOREIGN KEY (product_id)
    REFERENCES product(id)
    );

ALTER TABLE order_item
ADD INDEX `idx_order_item_orders` (order_id ASC);

ALTER TABLE order_item
ADD CONSTRAINT `fk_order_item_order`
  FOREIGN KEY (order_id)
  REFERENCES orders (id);


INSERT INTO product (product_name, category, quantity, image_url, price) VALUES ('Brisket', 'Meats', 15, 'https://bbqbucket2020.s3.us-east-2.amazonaws.com/brisket.jpg', 8.99);

INSERT INTO product (product_name, category, quantity, image_url, price) VALUES ('Sausage', 'Meats', 12, 'https://bbqbucket2020.s3.us-east-2.amazonaws.com/sausage.jpg', 6.50);

INSERT INTO product (product_name, category, quantity, image_url, price) VALUES ('Ribs', 'Meats', 15, 'https://bbqbucket2020.s3.us-east-2.amazonaws.com/ribs.jpg', 25.00);

INSERT INTO product (product_name, category, quantity, image_url, price) VALUES ('Mac-n-Cheese', 'Sides', 29, 'https://bbqbucket2020.s3.us-east-2.amazonaws.com/mac-n-cheese.jpg', 5.50);

INSERT INTO product (product_name, category, quantity, image_url, price) VALUES ('Potato Salad', 'Sides', 35, 'https://bbqbucket2020.s3.us-east-2.amazonaws.com/potato+salad.jpeg', 5.50);

INSERT INTO product (product_name, category, quantity, image_url, price) VALUES ('Pirate Platter', 'Combos', 12, 'https://bbqbucket2020.s3.us-east-2.amazonaws.com/pirate+platter.jpg', 40.00);

INSERT INTO product (product_name, category, quantity, image_url, price) VALUES ('Whole Pork Butt', 'Catering', 8, 'https://bbqbucket2020.s3.us-east-2.amazonaws.com/pork.jpg', 50.00);

INSERT INTO product (product_name, category, quantity, image_url, price) VALUES ('Whole USDA Prime Brisket', 'Catering', 8, 'https://bbqbucket2020.s3.us-east-2.amazonaws.com/whole+brisket.jpg', 100.00);

SELECT orders.id, order_item.quantity, product.product_name, product.price, orders.scheduled_delivery, orders.neighborhood, orders.name, orders.street_address, orders.phone, orders.email FROM ((order_item INNER JOIN product ON order_item.product_id = product.id) INNER JOIN orders on order_item.order_id = orders.id);
