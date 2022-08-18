-- Group By Clause
-- we use Group By clause to group output ovef different catagories

USE sql_invoicing;

SELECT  client_id,
		number, -- Returned the first enrty in each group who satisfy WHRERE clause
		SUM(invoice_total) Invoice_total_Sum,
		AVG(invoice_total) Invoice_total_Average
FROM invoices
WHERE invoice_date BETWEEN '2019-03-01' AND '2019-09-01'
GROUP BY client_id
ORDER BY Invoice_total_Sum DESC;


-- Group By on Multiple Columns
-- we can specify multiple columns and it will group them as per each pair combination

SELECT  payment_total,
		client_id,
		SUM(invoice_total) Invoice_total_Sum,
		AVG(invoice_total) Invoice_total_Average
FROM invoices
GROUP BY payment_total,client_id
ORDER BY payment_total;

-- Exercise
SELECT  date,
		name payment_method,
        SUM(amount) total_payments
FROM payments p
JOIN payment_methods pm ON p.payment_method = pm.payment_method_id
GROUP BY date,name
ORDER BY date;