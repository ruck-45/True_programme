-- Problems with Inner joins

-- In query below, we only got to see information of joined table for customers 2,5,6,7,8,10
-- The details of rest of the customers (1,3,4,9) are omitted as they hav't placed an order , so their order_id doesn't exist
-- So, for those customers, the condition in ON cluse became invalid, so their information is not returned

USE sql_store;

SELECT  c.customer_id,
		first_name,
		order_id
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id;


-- The above problem is solved by OUTER JOIN
-- It returns All informations regardless of NULL values



-- OUTER JOIN

-- There are two types of outer JOIN: ( OUTER KEYWORD IS OPTIONAL )
	-- LEFT OUTER JOIN / LEFT JOIN : returns all records of left table irrespective of NULL values
    -- RIGHT OUTER JOIN / RIGHT JOIN : returns all records of right table irrespective of NULL values
    
    
-- LEFT JOIN on above query
SELECT  c.customer_id,
		first_name,
		order_id
FROM customers c -- left table
LEFT JOIN orders o -- right table
	ON c.customer_id = o.customer_id; -- returned all records of left table (customers) irrespective of NULL values
    

-- RIGHT JOIN on above query
SELECT  c.customer_id,
		first_name,
		order_id
FROM customers c -- left table
RIGHT JOIN orders o -- right table
	ON c.customer_id = o.customer_id;   -- returned all records of right table (orders) irrespective of NULL values  
										-- Since orders has no NULL values it gives the same result as INNER JOIN
                                        
                                        
                                        
-- NOTE : It is preferred to use ONLY LEFT JOIN as mixing left and right joins can be confusing when involving multiple tables.




-- OUTER JOIN on multiple tables
-- It is similar to inner join on multiple tables
-- just use one type of outer joins to avoid confusions

SELECT  first_name,
		last_name,
        order_date,
        os.name AS status,
        s.name AS shipper
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
LEFT JOIN order_statuses os ON o.status = os.order_status_id
LEFT JOIN shippers s ON o.shipper_id = s.shipper_id
ORDER BY status;


 
 
 -- SELF OUTER JOINS
 
 -- HERE we used OUTER JOIN to display informations of those employees who donot even have a manager
 -- Like the manager themselves
 USE sql_hr;
 
 SELECT e1.employee_id,
		e1.first_name,
        e1.last_name,
        e1.job_title,
        e1.salary,
        e2.first_name AS manager
 FROM employees e1
 LEFT JOIN employees e2 ON e1.reports_to = e2.employee_id;