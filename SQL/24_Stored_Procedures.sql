-- Stored Procedures
	-- In backend if we want to write SQL code, it is not advisable to write them inside the Application code
    -- We must have a separate file containing function(s) which contains all SQL codes
    -- And calling that function(s) in our application code will execute SQL commands
    -- It keeps our codebase clean and also helps in data abstraction
    
    -- Stored Procedure is like a Function/SQL object having all SQL codes in it

-- -----------------------------------------------------------------------------------------------------------------------------
-- Creating a Stored Procedure
	-- First we change Dilimiter to $$ (as per convention)
    -- We do that because, we cannot have ; inside a SQL statement, so we need to specify a different DELIMITER for the outer statement
	-- At the end we reverted back to default delimiter
USE sql_store;

DELIMITER $$
CREATE PROCEDURE get_customers()
BEGIN   
    SELECT *
    FROM customers
    WHERE first_name LIKE '%a%';
END $$

DELIMITER ;

-- Exercise
USE sql_invoicing;

DELIMITER $$
CREATE PROCEDURE get_invoices_with_balance()
BEGIN
	SELECT *
    FROM clients_balance
    WHERE balance > 0;
END $$
DELIMITER ;

-- -----------------------------------------------------------------------------------------------------------------------------
-- Calling a SQL Stored Prcedure in SQL environment

CALL get_customers();

-- -----------------------------------------------------------------------------------------------------------------------------
-- Droping a stored procedure
DROP PROCEDURE get_invoices_with_balance;

-- But a more safer way of dropping such that we dont get any error is : 
DROP PROCEDURE IF EXISTS get_invoices_with_balance;

-- -----------------------------------------------------------------------------------------------------------------------------
-- Passing parameters to a Stored Procedure

-- Create a Procedure where it returns clients belonging to the specified state
DROP PROCEDURE IF EXISTS get_clients_by_state;

DELIMITER $$
CREATE PROCEDURE get_clients_by_state( 
	state_param CHAR(2) 
)
BEGIN
	SELECT *
    FROM clients
    WHERE state = state_param;
END$$
DELIMITER ;

CALL get_clients_by_state('NY'); -- Calling the procedure with a parameter, all the parameters here are compulsery

-- Exercise
-- Procedure returning invoices by client

DROP PROCEDURE IF EXISTS get_invoices_by_clients;
DELIMITER $$
CREATE PROCEDURE get_invoices_by_clients(
	client_id_param INT
)
BEGIN
	SELECT *
    FROM clients c
    LEFT JOIN invoices USING (client_id)
    WHERE c.client_id = client_id_param;
END$$
DELIMITER ;

CALL get_invoices_by_clients(1);

-- -----------------------------------------------------------------------------------------------------------------------------
-- Setting a Default value for parameter
	-- NOTE : Even if we have set a default parameter, we still have to provide those parameters when we call the proedure
    -- So we have to fill in NULL in those places we donot want to provide the values
    
-- Create Procedure where it returns clients belonging to the specified state
-- And if no state is specified return results for state 'CA'

DROP PROCEDURE IF EXISTS get_clients_by_state;
DELIMITER $$
CREATE PROCEDURE get_clients_by_state(
	state_param CHAR (2)
)
BEGIN
	IF state_param IS NULL THEN
		SET state_param = 'CA';
	END IF;
    
    SELECT *
    FROM clients
    WHERE state = state_param;
END $$
DELIMITER ;

CALL get_clients_by_state('NY');
CALL get_clients_by_state(NULL);


-- Create Procedure where it returns clients belonging to the specified state
-- And if no state is specified return for all states

DROP PROCEDURE IF EXISTS get_clients_by_state;
DELIMITER $$
CREATE PROCEDURE get_clients_by_state(
	state_param CHAR (2)
)
BEGIN
	IF state_param IS NULL THEN
		SELECT *
		FROM clients;
	ELSE
		SELECT *
		FROM clients
		WHERE state = state_param;
	END IF;
END $$
DELIMITER ;


-- Above code can be simply written as : 

DROP PROCEDURE IF EXISTS get_clients_by_state;
DELIMITER $$
CREATE PROCEDURE get_clients_by_state(
	state_param CHAR (2)
)
BEGIN
	SELECT *
	FROM clients
	WHERE state = IFNULL(state_param,state);
END $$
DELIMITER ;

CALL get_clients_by_state('NY');
CALL get_clients_by_state(NULL);


-- Exercise :

DROP PROCEDURE IF EXISTS get_payments;
DELIMITER $$
CREATE PROCEDURE get_payments(
	client_id_param INT,
    payment_method_id_param TINYINT
)
BEGIN
	SELECT *
    FROM payments
    WHERE client_id = IFNULL(client_id_param,client_id) AND payment_method = IFNULL(payment_method_id_param,payment_method);
END$$
DELIMITER ;

CALL get_payments(5,1);
CALL get_payments(NULL,NULL);


-- -----------------------------------------------------------------------------------------------------------------------------
-- Output Parameters
	-- We can return values from a Stored Prodecure to a variable, instread of printing it in console
    -- Those can be done through output parameters
    -- Those parameters have OUT keyword as prefix
    -- We need to pass the variables in which we need those values to be stored as arguments when we call the Procedure
    
    
DROP PROCEDURE IF EXISTS get_client_statistics;
DELIMITER $$
CREATE PROCEDURE get_client_statistics(
	client_id_param INT,
    OUT avg_invoice_param DECIMAL(9,2), -- Defining the parmeters are OUTPUT parameters through OUT keyword
    OUT avg_payment_param DECIMAL(9,2)
)
BEGIN
	SELECT  AVG(invoice_total) avg_invoice,
			AVG(payment_total) avg_payment
	INTO avg_invoice_param, avg_payment_param -- copying the value to the output parameters
    FROM invoices
    GROUP BY client_id
    HAVING client_id = client_id_param;
END$$
DELIMITER ;

SET @client_avg_invoice = 0; -- Creating variables to store values
SET @client_avg_payment = 0;

CALL get_client_statistics(3,@client_avg_invoice,@client_avg_payment); -- Passing created variables as arguments to hold the value returned by the Procedure

SELECT @client_avg_invoice,@client_avg_payment; -- Printing the contents of the variables