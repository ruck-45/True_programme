-- Having Clause

-- We have a perticular Order of clauses in SQL
-- SELECT ......
-- FROM .....
-- JOIN ....
-- WHERE .....
-- GROUP BY ...

		-- HAVING ...

-- ORDER BY .... ;

-- For Filtering out results from each individual Tables We use WHERE clause
-- But WHERE clause cannot work woth aggregate Tables, beacuse those properties are artificially made by us and are not part of any table
-- SO, to filter Aggregate Table Formed By us using Group By Cluse , We use HAVING clause

-- We can do all thing with HAVING clause we are able to do with WHERE clause
-- But the column must be present in the Aggregate Table

USE sql_invoicing;

SELECT client_id, AVG(invoice_total) AS average_invoice_total
FROM invoices
WHERE invoice_date BETWEEN '2019-03-01' AND '2019-09-01'
GROUP BY client_id
HAVING average_invoice_total > 150;



-- Exercise
USE sql_store;

SELECT  c.customer_id,
		first_name,
		last_name,
		state,
        SUM(quantity*unit_price) AS total_price
FROM customers c
JOIN orders USING (customer_id)
JOIN order_items USING (order_id)
WHERE state = 'VA'
GROUP BY c.customer_id
HAVING total_price > 100;