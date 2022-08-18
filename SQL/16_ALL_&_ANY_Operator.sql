-- ALL keyword
-- used when the comparision has to be done on multiple results
-- keyword applies the comparision to each the element and allows resluts that satisfy for ALL the involved elements


-- Invoices larger than all invoices of client 3
USE sql_invoicing;

SELECT *
FROM clients
WHERE client_id IN (
	SELECT DISTINCT client_id
    FROM invoices
    WHERE client_id != 3 AND invoice_total > ALL (
		SELECT invoice_total
        FROM invoices
        WHERE client_id = 3
    ) 
);

-- Above problem can be done without ALL by using MAX()
SELECT *
FROM clients
WHERE client_id IN (
	SELECT DISTINCT client_id
    FROM invoices
    WHERE client_id != 3 AND invoice_total > (
		SELECT MAX(invoice_total)
        FROM invoices
        WHERE client_id = 3
    ) 
);





-- ANY / SOME keyword
-- also used when the comparision has to be done on multiple results
-- keyword applies the comparision to each the element and allows resluts that satisfy ANY one of the involved elements


-- Select the clients with atleast two invoices

SELECT *
FROM clients
WHERE client_id IN (
	SELECT  client_id
	FROM invoices
	GROUP BY client_id
	HAVING COUNT(client_id) >= 2
);


-- Above query can be done using ANY operator like this : 

SELECT *
FROM clients
WHERE client_id = ANY ( -- SOME can also be used in this situation
	SELECT  client_id
	FROM invoices
	GROUP BY client_id
	HAVING COUNT(client_id) >= 2
);