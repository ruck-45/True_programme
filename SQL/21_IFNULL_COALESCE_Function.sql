-- IFNULL function 
	-- used to display some values if the value encountered NULL
    
USE sql_store;

-- return 'NOT AVAILABLE' for those who have no shippers in shipper id

SELECT  order_id,
		customer_id,
        status,
        IFNULL(shipper_id,'NOT AVAILABALE') AS shipper
FROM orders;

-- ---------------------------------------------------------------------------------------------------
-- COALESCE function
	-- it is functionally better than IFNULL
    -- we provide a list of values and it returns the first NOT NULL Vlaue it encounters
    
-- return comment for those who have no shippers in shipper id & 'NOT AVAILABLE' for those who dont even have a comment

SELECT  order_id,
		customer_id,
        status,
        COALESCE(shipper_id,comments,'NOT AVAILABLE') shipper
FROM orders;



-- Exercise : 
SELECT  CONCAT(first_name,' ',last_name) AS customer,
		IFNULL(phone,'UNKNOWN') AS phone
FROM customers;