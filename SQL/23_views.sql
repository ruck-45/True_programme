-- Views 
	-- They are virtual Tables who are image of real tables in form of codes
    -- we can use them as real table and perform all the operations we can on a real table
    -- If we make any changes to a view, the real tale gets affected
    
-- ---------------------------------------------------------------------------------------------
-- creating a view
USE sql_invoicing;

CREATE VIEW avg_invoice_and_payment AS
SELECT  c.client_id,
		name,
        AVG(invoice_total)  average_invoice,
        AVG(payment_total)  average_payment
FROM clients c
JOIN invoices USING (client_id)
GROUP BY client_id;


-- Now we can use above view as a regular table

SELECT  c.client_id,
		c.name,
        average_invoice,
        average_payment,
        address,
        city,
        state,
        phone
FROM avg_invoice_and_payment
JOIN clients c USING (client_id);


CREATE VIEW clients_balance AS
SELECT  c.client_id,
		c.name,
        SUM(invoice_total - payment_total) AS balance
FROM clients c
JOIN invoices USING (client_id)
GROUP BY c.client_id;


-- -----------------------------------------------------------------------------------------------
-- Deleting a view

DROP VIEW clients_balance;

-- -----------------------------------------------------------------------------------------------
-- Replacing a view
	-- If a view is already present, SQL will not allow to make another view of the same name
    -- So inorder to make sure that there is no view of the same name is present 
    -- or if present then we want to replace the existing tabe
    -- We use Replace Keyword for that
    
CREATE OR REPLACE VIEW clients_balance AS
SELECT  c.client_id,
		c.name,
        SUM(invoice_total - payment_total) AS balance
FROM clients c
JOIN invoices USING (client_id)
GROUP BY c.client_id;

-- -----------------------------------------------------------------------------------------------
-- Updateable Views
	-- Those views which hasnt been a result of :
			-- Aggregate Funtions
            -- Group By / Having
            -- DISTINCT
            -- UNION
	-- are updateable

	-- we can perform Insert, Update and Delete operations on those views
    -- If we update such a view, the data in original table gets updated
