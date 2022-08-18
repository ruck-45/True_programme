-- UNION

-- UNION Keyword is used to combine results of two queries
-- UNION will only combine results of queries if all of them have same number of columns returned, otherwise it will throw error
-- It jut works like append
-- The names of columns of final output corresponds to the first query in the UNION

USE sql_store;

-- Example : 
-- The first query sets all orders on or after 2018 as ACTIVE

SELECT  first_name,
		last_name,
        order_date,
        'ACTIVE' status 
FROM customers
JOIN orders USING (customer_id)
WHERE order_date >= '2018-01-01';

-- The second query sets all orders before 2018 as ARCHIVED

SELECT  first_name,
		last_name,
        order_date,
        'ARCHIVED' status 
FROM customers
JOIN orders USING (customer_id)
WHERE order_date < '2018-01-01';

-- UNION can append these two queries

SELECT  first_name,
		last_name,
        order_date,
        'ACTIVE' status 
FROM customers
JOIN orders USING (customer_id)
WHERE order_date >= '2018-01-01'
UNION
SELECT  first_name,
		last_name,
        order_date,
        'ARCHIVED' status 
FROM customers
JOIN orders USING (customer_id)
WHERE order_date < '2018-01-01';


-- Example : 
-- Ranking customers accordeing to their points
-- GOLD : >3000 , SILVER : Between 2000 & 3000 , BRONZE : <2000

SELECT customer_id,first_name,points,'GOLD' type
FROM customers
WHERE points > 3000
UNION
SELECT customer_id,first_name,points,'SILVER'
FROM customers
WHERE points BETWEEN 2000 AND 3000
UNION
SELECT customer_id,first_name,points,'BRONZE'
FROM customers
WHERE points < 2000
ORDER BY first_name;



-- Example : 
-- Union appends anything as long as the columns are of same number

SELECT first_name AS all_names, last_name
FROM customers
UNION
SELECT name,shipper_id
FROM shippers;
