-- Corelated subquery
-- It ia subquery which is related to the outer query

-- Uncorelated subquery get executed once
-- But corelated subquery gets executed for every row
-- For that reason corelated subquery can be slow for large data

-- Example : 
-- Select employees whose salary is above average in their OFFICE (GROUP BY OFFICE)

USE sql_hr;

SELECT *
FROM employees e
WHERE salary > (
	SELECT AVG(salary)
    FROM employees 
    WHERE office_id = e.office_id  -- corelated to outer query
);



-- Exercise :

-- Get invoices of each client that are greater than their own average invoice
USE sql_invoicing;

SELECT *
FROM invoices i
WHERE invoice_total > (
	SELECT AVG(invoice_total)
    FROM invoices
    WHERE client_id = i.client_id
);