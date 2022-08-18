-- Subqueries in SELECT clause


USE sql_invoicing;

-- Example : 
SELECT  invoice_id,
		invoice_total,
        (SELECT AVG(invoice_total) FROM invoices) AS invoice_average,
        invoice_total - (SELECT invoice_average) AS difference -- can be written : invoice_total - (SELECT AVG(invoice_total) FROM invoices) AS difference
FROM invoices;

-- Exercise : 
SELECT  client_id,
		name,
        SUM(invoice_total) total_sales,
        (SELECT AVG(invoice_total) FROM invoices) AS average,
        SUM(invoice_total) - (SELECT average) difference
FROM clients c
LEFT JOIN invoices USING (client_id)
GROUP BY c.client_id;

-- ---- Method 2 --

SELECT  client_id,
		name,
        (SELECT SUM(invoice_total) FROM invoices WHERE c.client_id = client_id) AS total_sales,
        (SELECT AVG(invoice_total) FROM invoices) AS average,
        (SELECT total_sales - average) AS difference
FROM clients c ;



-- ----------------------------------------------------------------------------------------------------------------------------------
-- Subqueries in FROM clause

-- the above query we have written , we can use it as an independent table by using subquery in from clause

SELECT *
FROM (
	SELECT  client_id,
			name,
			(SELECT SUM(invoice_total) FROM invoices WHERE c.client_id = client_id) AS total_sales,
			(SELECT AVG(invoice_total) FROM invoices) AS average,
			(SELECT total_sales - average) AS difference
	FROM clients c
) AS invoice_difference
JOIN invoices USING (client_id);

-- But it is not advisable to do so as it makes the query complex
-- Later we will see its alternative : View