CREATE DATABASE games;
USE games;

-- Creating a table  , we need to specify all columns and its datatypes
CREATE TABLE test( 
name VARCHAR(20),
age INT
);

-- Making changes to a table , like adding new columns
ALTER TABLE test
ADD salary INT;

-- Deleteig table
DROP TABLE test;

-- ---------------------------------------------------------------------------------------------------

-- Creating studios table

-- syntax : col_name data_type NOT NULL AUTO_INCEREMENT
-- NOT NULL : makes sure that the column cannot contain a NULL values
-- AUTO_INCREMENT autometically increases the count the next record is inserted, it is primarily used in id
-- We dont need to pass value for id column as it will auto increment itself

CREATE TABLE studios(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(200) NOT NULL,
PRIMARY KEY (id)
);


-- Creating ip table

-- PRIMARY KEY takes primary column of that table
-- a primary key is a column that can uniquely identify each record in that table

-- FOREIGN KEY takes the foreign column of that table as well as the table name and the column name it is refrencing to
-- Foreign Key is a key that refrences a foreign table to the current table, (it is a key used to relate tables) 

CREATE TABLE ip(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(200) NOT NULL,
release_year INT ,
studio_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (studio_id) REFERENCES studios (id)
);

-- ---------------------------------------------------------------------------------------------------------------------------

-- Inserting elements into studios

INSERT INTO studios (name)
VALUES ('Arcane'),('Activision'),('Respawn'),('DICE'),('Bungie'),('Ubisoft'),('Insomniac');

-- Inserting elements into ip

INSERT INTO ip(name,release_year,studio_id)
VALUES ('Call Of Duty : Modern Warfare Remastered',2016,2),
('BATTLEFRONT 3',2011,4),
('Dishonored',20212,1),
('Eder Scrolls V : Skyrim',2011,3),
('Call Of Duty : VANGUARD',2021,2),
('Dishonered 2',2016,1),
('Call Of Duty : Warzone',2020,2),
('Battlefield 4',2013,4),
('Battlefield 2042',2021,4),
('Halo : Combat Evolved',2001,5),
('Farcry 3',2012,6),
('Halo2',2004,5),
('Destiny 2',2017,5),
('Farcry 6',2021,6),
('Sunset Overdrive',2014,7),
('Ghost Recon : Breakpoint',2019,6),
('Rainbow Six Seige',2015,6),
('Marvel Spiderman',2018,7);


-- Inserting Hierarchical Rows

-- Suppose i add a new game studio name in studios table
-- And simultaneously i want to add a record into the ip table for a game that studio made
-- For that i need to know the id of the studio to fulfill the foreign key column in ip table : studio id

-- SQL has a lot of BuiltIn functions, One of them is  :  LAST_INSERT_ID(), returns the last inserted ID
-- We will use this to get the newly formed studio_id

INSERT INTO studios (name)
VALUES ('343 Industies');

INSERT INTO ip (name,release_year,studio_id)
VALUES  ('HALO 5','2015',LAST_INSERT_ID()),
		('HALO Infinite','2021',LAST_INSERT_ID());

-- ---------------------------------------------------------------------------------------------------------------

-- Creating Copy Of A Table

-- Creating a copy of a table and storing it in new table
CREATE TABLE ip_archived AS SELECT * FROM ip;   -- SELECT statemet here is a SUBQUERY
												-- Trauncated above table for future use
 
-- We can insert copy of a table also using a subquery
INSERT INTO ip_archived
SELECT * FROM ip WHERE release_year < '2015'; -- Inserting games released prior to 2015


-- Example 
USE sql_invoicing;
CREATE TABLE invoice_archived AS
SELECT  invoice_id,
		number,
        name,
		invoice_total,
        payment_total,
        invoice_date,
        due_date,
        payment_date
FROM invoices
JOIN clients USING (client_id)
WHERE payment_date IS NOT NULL;

-- -----------------------------------------------------------------------------------------------------------

-- Updating table
--  we have by mistake written Respawn instead of Bethesda Entertainment

USE games;
UPDATE studios
SET name = 'Bethesda Studios'
WHERE id = 3;

-- We can do multiple updates
-- We can use subqueries for updates

UPDATE  ip_archived
SET name = 'UNKNOWN' , release_year = release_year +1
WHERE studio_id IN (SELECT id FROM studios WHERE name LIKE '%s%');

-- Example : 

UPDATE orders
SET comments = 'GOLD CUSTOMERS'
WHERE customer_id IN (SELECT customer_id FROM customers WHERE points >= 3000);


-- ------------------------------------------------------------------------------

-- Deleting Rows

USE sql_invoicing;
DELETE FROM invoice_archived; -- Deletes all records from this table (truncates)

USE sql_store;
-- we can also use cinditions, sub-queries in delete statement
DELETE FROM customers_archived
WHERE points < 1000;