-- Variables
	-- There are two types of variables
		-- User / Session Variables
        -- Local varaiables

-- User / Session Variables
	-- Declared outside
    -- Syntax : SET @var_name = value;
    -- Stays in memeory for the whole session
    
-- Local Variables
	-- Declared inside a Stored Procedure or Function
    -- Syntax to declare : DECLARE var_name data_type;
    -- Syntax to innitialize : SET var_name  = value;
    -- Stays in memeory only for timeit is used
    


-- Write a Stored procedure which Returns value of Risk Factor for Given customer
-- Risk Factor = invoice_total/invoice_count *5
USE sql_invoicing;

DROP PROCEDURE IF EXISTS get_risk_factor;
DELIMITER $$
CREATE PROCEDURE get_risk_factor(
	client_id_param INT
    -- OUT risk_factor_param DECIMAL(9,3)
)
BEGIN
	DECLARE risk_factor DECIMAL(9,3) DEFAULT 0;
    DECLARE invoice_total INT;
    DECLARE invoice_count INT;
    
    SELECT  SUM(invoice_total),
			count(*)
	INTO invoice_total, invoice_count
    FROM invoices
    WHERE client_id = client_id_param;
    
    SET risk_factor = invoice_total/invoice_count * 5 ;
    SELECT risk_factor;
END$$
DELIMITER ;

SET @client_risk_factor = 0;
CALL get_risk_factor(6);

SELECT @client_risk_factor;