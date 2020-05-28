DROP DATABASE IF EXISTS searchbar;

CREATE DATABASE searchbar;

USE searchbar;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(255) NOT NULL,
  Price DECIMAL(5 , 2) NOT NULL,
  Category VARCHAR(25) NOT NULL,
  Store VARCHAR(25) NOT NULL,
  Primary_img_link VARCHAR(255) NOT NULL,
  2nd_img_link VARCHAR(255),
  3rd_img_link VARCHAR(255),
  4th_img_link VARCHAR(255),
  5th_img_link VARCHAR(255),
  Description VARCHAR(1000) NOT NULL
);

/*
INSERT INTO items (id, item, category) VALUES (1, 'Sigil Tapestry Pillow', 'Home Goods');
INSERT INTO items (id, item, category) VALUES (2, 'Dragonstone Stein', 'Kitchen & Dining');
INSERT INTO items (id, item, category) VALUES (3, 'Dragon Egg Box', 'Home Goods');
INSERT INTO items (id, item, category) VALUES (4, 'Night King Mask', 'Apparel');
INSERT INTO items (id, item, category) VALUES (5, 'Fire and Blood Sock Set', 'Apparel');
INSERT INTO items (id, item, category) VALUES (6, 'Stark Infantry Shield', 'Weapons');
*/
