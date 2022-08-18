USE sql_store;

-- SELECT CLAUSE

-- * to select all columns from a table
SELECT * FROM customers;

-- we can specify column names to select only those columns
SELECT first_name,last_name,points FROM customers;

-- the order in which we mention the columns is the order in which it appears
SELECT last_name,points,first_name FROM customers;

-- we can perform arithmetic operations on the columns simultaneously
SELECT first_name,last_name,points,(points+10)/10 FROM customers;

-- AS KEYWORD : used to give aliases to column names
SELECT
	first_name AS F_name,
    last_name AS L_name,
    points AS Points,
    (points+10)/10 AS 'Discount Price' -- We can avoid using quotatio if we dont have sapces in between : Discount_Price
FROM customers;

-- DISTINCT KEYWORD : used to filter distinct entries in that column
SELECT DISTINCT points FROM customers;

-- We can also use only SELECT KEYWORD to perform some operatons
SELECT 1,2;
SELECT 10%7;
SELECT 10 = 1;


