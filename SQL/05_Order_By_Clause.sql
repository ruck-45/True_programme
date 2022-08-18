USE sql_store;

-- By default the query we perform is sorted according to the PRIMARY KEY set ( Mostly ID )
-- But we can customize the order according to a column by using the ORDER BY cluse 

-- ORDER BY clause
-- ASC Keyword : order by ascending order (By Default)
-- DESC Keyword : order by descending order

-- Order By a perticular column
SELECT * FROM customers WHERE first_name REGEXP 'e' ORDER BY first_name;
SELECT * FROM customers WHERE first_name REGEXP 'e' ORDER BY first_name DESC; -- descending order

-- Order by multiple columns
USE games;
SELECT * FROM ip ORDER BY release_year DESC, name;  -- First ordered by release_year descending 
													-- & within each realese_year, ordered by name ascending
        
        
-- We can even Order By a column that is not part of the select statement , Like : 
USE sql_store;
SELECT first_name , last_name FROM customers ORDER BY birth_date;

-- We can even Order By a column that is foreshly formed in the query itself : 
SELECT first_name , last_name , points, (points*0.1)+10 AS discount_price FROM customers ORDER BY discount_price DESC; 
																								-- discount_price is newly formed
SELECT * FROM order_items WHERE order_id = 2 ORDER BY quantity*unit_price DESC;

-- We can even Order By using the position of the columnns mentioned in the SELECT clause 
SELECT first_name , last_name , points FROM customers ORDER BY 1,2; 
																	-- here 1 : first_name
                                                                    -- here 2 : last_name
                                                                    -- here 3 : points
                                                                    -- first it is ordered by first_name and then last_name
