-- ROLLUP Operator

-- This operator is exclusive to MySQL
-- Other Dtabases may/maynot have similar operator

-- It is used to Summerize our entire result
-- It only works for Aggregrate Columns, provides garbage results with non_aggregate columns

USE sql_invoicing;

SELECT  client_id,
		name,
		SUM(invoice_total) invoice_total_sum,
        AVG(invoice_total) invoice_total_average
FROM invoices
JOIN clients USING (client_id)
GROUP BY client_id WITH ROLLUP;  -- Adds a row at the end summerizing entire result
								 -- Provides summerized result for sum and average, but garbage result for name
                                 


-- Rollup also provides group wise summery if the group is done on multiple columns

SELECT  date,
		name payment_method,
        SUM(amount) total_payments
FROM payments p
JOIN payment_methods pm ON p.payment_method = pm.payment_method_id
GROUP BY date,name WITH ROLLUP; -- adds an extra record underneath each group summerizing the data




-- Exercise : 

SELECT  name,
		SUM(amount) total
FROM payments p
JOIN payment_methods pm ON p.payment_method = pm.payment_method_id
GROUP BY name WITH ROLLUP;