CREATE TABLE Category (
   id int(3) NOT NULL PRIMARY KEY,
   name VARCHAR(50) NOT NULL
);

CREATE TABLE Product (
   id int(3) NOT NULL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   category_id int(3) NOT NULL
);

ALTER TABLE Product
    ADD FOREIGN KEY (category_id)
    REFERENCES Category(id);