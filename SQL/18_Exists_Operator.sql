-- EXISTS Operator


-- Select client that has an invoice
USE sql_invoicing;

SELECT *
FROM clients
WHERE client_id IN (
	SELECT DISTINCT client_id   -- This Inner query returns a list of client_id from which the outer query will check for the presence
    FROM invoices				-- like : (1,2,3,4........)
);


-- The problem with above approach is that
	-- if our dataset is huge and a lot of them have invoices
    -- then the list returned wil be huge and it will clog the memory
    

-- An effiient way is to use EXISTS operator
-- EXISTS operator checks if at least one record exists or not

SELECT *
FROM clients c
WHERE EXISTS ( 		-- EXISTS will return TRUE as soon as a record in the subquery is found to exist according to its condition
	SELECT * 		-- This Inner query is corelated to outer query
    FROM invoices	-- That means it will be called for each record, but it will not return a huge list of client_id 
    WHERE client_id = c.client_id
);


-- In above case, EXISTS is more efficient for huge data

-- Exercise : 
-- Find the products that have never been ordered
USE sql_store;

-- SELECT *
-- FROM products
-- WHERE product_id NOT IN (
-- 	SELECT product_id
--     FROM order_items
-- );


SELECT *
FROM products p
WHERE NOT EXISTS(
	SELECT *
    FROM order_items
    WHERE product_id = p.product_id
);