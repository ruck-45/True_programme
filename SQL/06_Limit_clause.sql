USE sql_store;

-- LIMIT Clause : it is used to limit the number of records shown in a query;

SELECT * FROM customers LIMIT 3; -- shows first 3 records returned by the query
SELECT * FROM customers ORDER BY points DESC LIMIT 3; -- Top three customers with most points

-- LIMIT also has offset
-- Syntax : LIMIT Offset, Limit
-- Offset helps us to fix the ( starting point - 1 ) from which it will fetch number of records specified in the Limit.

SELECT * FROM customers LIMIT 5,3;