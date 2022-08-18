-- Aggregate Functions

-- These functions calculate aggregate values
-- Some of these functions are : 
	-- MIN()
    -- MAX()
    -- SUM()
    -- AVG()
    -- COUNT()
    
USE sql_invoicing;

SELECT  MIN(invoice_total) minimum,
		MAX(invoice_total) maximum,
        SUM(invoice_total) sum,
        AVG(invoice_total) average,
        COUNT(invoice_total) count
FROM invoices;


-- They can work with numbers, date and time, strings

-- Date and Time
SELECT  MIN(invoice_date) minimum, -- oldest date
		MAX(invoice_date) maximum, -- most recent date
        COUNT(invoice_date) count
FROM invoices;

-- string
SELECT  MIN(name) minimum, -- goes with dictionary minimum
		MAX(name) maximum, -- goes with dictionary maximum
        COUNT(name) count
FROM clients;


-- They only work with NOT NULL values
-- Aggregrate functions donot take NULL values into consideration

SELECT  COUNT(invoice_total), -- doesnt has NULL values
		COUNT(payment_date) -- has NULL values
FROM invoices;


-- we can use * to include all values , including NULL values

SELECT  COUNT(*),
		COUNT(payment_date)
FROM invoices;


-- We can use various expressions inside the aggregate unctions

SELECT  COUNT(DISTINCT client_id),
		SUM(invoice_total*0.5)
FROM invoices
WHERE due_date > '2019-05-01';






-- Exercise : 

SELECT  'First Half Of 2019' date_range,
		SUM(invoice_total) total_sales,
		SUM(payment_total) total_payments,
		SUM(invoice_total-payment_total) what_we_expect
FROM invoices
WHERE invoice_date BETWEEN '2019-01-01' AND '2019-06-30'
UNION
SELECT  'SECOND Half Of 2019' date_range,
		SUM(invoice_total) total_sales,
		SUM(payment_total) total_payments,
		SUM(invoice_total-payment_total) what_we_expect
FROM invoices
WHERE invoice_date BETWEEN '2019-06-30' AND '2019-12-31'
UNION
SELECT  'Total' date_range,
		SUM(invoice_total) total_sales,
		SUM(payment_total) total_payments,
		SUM(invoice_total-payment_total) what_we_expect
FROM invoices
WHERE invoice_date BETWEEN '2019-01-01' AND '2019-12-31';