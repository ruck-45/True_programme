-- IF function
	-- used to return result based on certain condition
	-- syntax : IF(condition, True Return Value, False Return Value)
    
USE sql_store;

-- Mark orders from year 2018 as Active and before 2018 as Archived

-- Using Union

SELECT  *,
		'Active' order_status
FROM orders
WHERE YEAR(order_date) >= '2018'
UNION
SELECT  *,
		'Archived' order_status
FROM orders
WHERE YEAR(order_date) < '2018';



-- Using IF function

SELECT  *,
		IF(YEAR(order_date)>='2018','Active','Archived') AS order_status
FROM orders;


-- Exercise : 

SELECT  p.product_id,
		name,
        COUNT(*) AS orders,
		IF(COUNT(*) > 1,'Many Times','Once') frequency
FROM products p
JOIN order_items USING (product_id)
GROUP BY p.product_id;

-- -------------------------------------------------------------------------------------------------
-- CASE Function
	-- When we have multiple conditions , we use CASE function
    -- Syntax  : 
-- 				CASE
-- 				   WHEN condition THEN return_statement
--                 WHEN condition THEN return_statement
--                 WHEN condition THEN return_statement
--                 ELSE return_statement
-- 				END AS Alias
SELECT  *,
		CASE
			WHEN YEAR(order_date) >= '2019' THEN 'ACTIVE'
            WHEN YEAR(order_date) = '2019' - 1  THEN 'LAST YEAR'
            WHEN YEAR(order_date) < '2018' THEN 'ARCHIVED'
            ELSE 'UNKNOWN'
		END AS order_status
FROM orders;


-- Exercise : 

SELECT  CONCAT(first_name,' ',last_name),
		points,
        CASE
			WHEN points >= 3000 THEN 'GOLD'
            WHEN points >= 2000 THEN 'SILVER'
            ELSE 'BRONZE'
		END AS catagory
FROM customers;