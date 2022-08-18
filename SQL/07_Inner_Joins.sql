-- Joins are used to show query by joining two different tables using the foreign key
-- Joins are of 2 types : 
	-- Inner Joins : (Intersection) Excludes all the values for which the Foreign Key doesnt exist
    -- Outer Joins : (Union) Includes all the values even those for which the Foreign Key doesnt exist & initializes them as NULL in resp. columns
 
 
 -- INNER JOIN / JOIN (INNER keyword is optional)
 
-- Joining within the same database
 USE sql_store;
 
 SELECT order_date,status,first_name,last_name,phone,points 
 FROM orders o -- using o as an alias for orders table
 JOIN customers c -- using c as an alias for customers table
	ON o.customer_id = c.customer_id; -- ON takes the condition on which the tables are to be joined
    
    
-- If we try to include customer_id in select statement just by writing customer_id then it will throw us an error , That the column is ambiuous
-- It means the column is present in both the tables and it cannot decide which table to use for this query
-- So we need to specify Table Prefix for such situations

SELECT o.customer_id,order_date,status,first_name,last_name,phone,points 
 FROM orders o -- using o as an alias for orders table
 JOIN customers c -- using c as an alias for customers table
	ON o.customer_id = c.customer_id; -- ON takes the condition on which the tables are to be joined
    
    
    
    
-- Joining across databases
-- For joining across databases we need to specify the database name as prefixes just like the table names

USE sql_inventory; -- we are currently using this database, so tables inside this database donot need prefixes

SELECT oi.product_id,name,quantity,oi.unit_price
FROM sql_store.order_items oi -- provided database prefix
JOIN products p
	ON oi.product_id = p.product_id;

    
    
    
-- Self Joins

-- we can join a table to self
-- this is helpful when some informations are mapped to each other in the same table 
-- E.g - in sql_hr.employees table , the reports_to column indicates the manager actuall contains teh employee id of the same table
-- We need self join to print the employee and their manager's name simultaneously

SELECT  e1.employee_id, 
		e1.first_name, 
		e1.last_name,
        e1.salary,
        e1.reports_to,
        e2.first_name AS Manager_First_name, 
		e2.last_name AS Manager_Last_name
FROM sql_hr.employees e1
JOIN sql_hr.employees e2
	ON e1.reports_to = e2.employee_id;
    

    
        
-- Joining Multiple Tables

-- For joining multiple tables we have to write multople join statements for each table

-- Joining customers table with orders table and status table
USE sql_store;

SELECT 
	order_date,
	first_name,
    last_name,
    name AS order_status,
    city,
    state
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN  order_statuses os ON o.status = os.order_status_id;

--  joining tables in sql_inveicing
USE sql_invoicing;

SELECT  c.name,
		city,
        state,
        phone,
        amount,
        pm.name AS payment_method
FROM clients c
JOIN invoices i ON  c.client_id = i.client_id
JOIN payments p ON i.invoice_id = p.invoice_id
JOIN payment_methods pm ON p.payment_method = pm.payment_method_id;
    

    
     
-- Compound Join

-- In some cases a table may not have a primary key
-- But it may have a composite key
-- A Composite Primary key is a combination of columns that act as a primary key as no individual colimn can uniquely identify each record
-- But their combination produces a unique sequence which can be used as a primary key

-- For dealing with Composite Primary Keys we need to write down multiple conditions in 'JOIN ON' clause

-- Here 'order_items' has a composite key consisting of 'order_id' and 'product_id'
USE sql_store;
 
 SELECT *
 FROM order_items oi
 JOIN order_item_notes oin 
	ON oi.order_id = oin.order_Id AND oi.product_id = oin.product_id; 
    
    

    
-- Implicit Join

-- We can join without using the 'JOIN ON' clause
-- Implicit Join uses WHERE clause to write the condition
-- But it is not preferable as the syntax can be a little bit confusing if multiple table are involved

-- Joining above composite key example implicitely
SELECT *
FROM order_items oi, order_item_notes oin
WHERE oi.order_id = oin.order_Id AND oi.product_id - oin.product_id;