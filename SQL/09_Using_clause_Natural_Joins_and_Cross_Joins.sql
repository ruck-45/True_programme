-- USING Clause

-- We can use USING clause instead of ON clause in JOIN statements , when the primary key in both the tables have SAME COLUMN NAME (Case Insencitive)
USE sql_store; 

SELECT  first_name,
		last_name,
        order_id,
        status
FROM customers
LEFT JOIN orders USING (customer_id);


-- USING clause in compound joins
-- In case of compound joins we provide all the column names we need to use to join the tables
-- NOTE : all the column names must be same across both tables



-- NATURAL JOIN
-- It is a type of join in which we dont have to explicitly specify the column on which the tables have to join 
-- SQL itself searches for common columns and joins them autometically
-- But it sometimes can produce unexpected results , so using it is not recommended

-- we can also use NATURAL LEFT JOIN and NATURAL RIGHT JOIN For Outer Natural Joins

SELECT  first_name,
		last_name,
        order_id
FROM customers
NATURAL JOIN orders ;



-- CROSS JOINS
-- CROSS JOIN doesnot has any condition (ON)
-- A JOIN statement without a condition behaves as a CROSS JOIN
-- In CROSS JOIN SQL pairs every record of first table to every record of the second table

SELECT *
FROM order_statuses
JOIN order_item_notes;


-- Implicit CROSS JOIN

SELECT *
FROM order_statuses , order_item_notes;