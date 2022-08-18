
-- Products More Expensive than Lettuce
USE sql_store;

SELECT *
FROM products
WHERE unit_price > 
				(SELECT unit_price 
				 FROM products 
                 WHERE name LIKE '%lettuce%');


-- Employees who earn more than Average
USE sql_hr;

SELECT  *
FROM employees
WHERE salary > (
	SELECT AVG(salary)
	FROM employees
);

-- products that have never been ordered
USE sql_store;

-- SELECT * 
-- FROM products
-- LEFT JOIN order_items USING (product_id)
-- WHERE order_id IS NULL;

SELECT * 
FROM products
WHERE product_id NOT IN (
	SELECT DISTINCT product_id
	FROM order_items
);


-- Finding clients without invoices
USE sql_invoicing;

SELECT *
FROM clients
WHERE client_id NOT IN (
	SELECT DISTINCT client_id
    FROM invoices
);

-- Find customers who have ordered lettuce
USE sql_store;

-- Using Join

SELECT  DISTINCT c.customer_id,
		first_name,
		last_name,
        name product
FROM customers c
JOIN orders USING (customer_id)
JOIN order_items USING (order_id)
JOIN products USING (product_id)
WHERE name LIKE '%Lettuce%';


-- Using subquery

SELECT  customer_id,
		first_name,
		last_name
FROM customers
WHERE customer_id IN (
	SELECT DISTINCT customer_id
    FROM orders
    WHERE order_id IN (
		SELECT DISTINCT order_id
        FROM order_items
        WHERE product_id IN (
			SELECT DISTINCT product_id
            FROM products
            WHERE name LIKE '%lettuce%'
        )
    )
);