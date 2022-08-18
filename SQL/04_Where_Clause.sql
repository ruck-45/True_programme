USE sql_store;

-- Where CLAUSE
-- It is used to apply conditions to SELECT statement

-- > : greater than
-- >= : greater than or equal to
-- < : less than
-- <= : greater than or equal to
-- = : equal to
-- != or <> : not equal to

SELECT first_name,last_name,city,points FROM customers WHERE points >= 2000;
SELECT first_name,last_name,city,points FROM customers WHERE points <> 900;
SELECT first_name,last_name,birth_date,city,points FROM customers WHERE birth_date >'1980-01-01';

-- we can do case insencitive search
SELECT * FROM customers WHERE first_name = 'bAbAra';

-- --------------------------------------------------------------------------------------------------------------------
-- AND operator : returns records satisfying both conditions
-- OR operator : returns records satisfying either conditions

SELECT * FROM customers WHERE points > 1000 AND points < 2000;
SELECT * FROM customers WHERE points < 1000 OR points > 2000;
SELECT * FROM customers WHERE birth_date >= '1980-01-01' AND points < 1000;
SELECT * FROM customers WHERE birth_date <= '1980-01-01' OR (points < 2000 AND points > 1000);

-- --------------------------------------------------------------------------------------------------------------------
-- NOT operator : negates the condition
	-- NOT changes:
		-- < : >=
        -- <= : >
        -- > : <=
        -- >= : <
        -- AND : OR
        -- OR : AND
        -- = : !=
        -- != : =
        
SELECT * FROM customers WHERE NOT (birth_date <= '1980-01-01' OR (points < 2000 AND points > 1000));
SELECT * FROM customers WHERE birth_date > '1980-01-01' AND (points >= 2000 OR points <= 1000);  # Above query is similar to this

SELECT * FROM order_items;

-- Getting details for order_id #6 where total price > 30
SELECT *, quantity*unit_price AS 'Total Price' FROM order_items WHERE order_id = 6 AND quantity*unit_price > 30;


-- --------------------------------------------------------------------------------------------------------------------
-- IN operator : checks if the value is present in given tuple
-- NOT IN : checks if the value not present in given tuple

SELECT * FROM customers WHERE state = 'VA' OR state = 'IL' OR state = 'MA' OR state = 'CO'; # This query can be shortened using IN operator
SELECT * FROM customers WHERE state IN ('VA','IL','MA','CO'); 

SELECT * FROM customers WHERE state NOT IN ('VA','IL','MA','CO');


-- --------------------------------------------------------------------------------------------------------------------
-- BETWEEN operator : returns values between the limits specified ( >= AND <= )
-- BETWEEN operator includes the range bounderies

-- NOT BETWEEN operator : does exactly opposite of BETWEEN operator ( <= OR >= )

SELECT * FROM customers WHERE birth_date >= '1980-01-01' AND birth_date <= '1990-01-01'; # this statement can be shorened using BETWEEN operator
SELECT * FROM customers WHERE birth_date BETWEEN '1980-01-01' AND  '1990-01-01';

SELECT * FROM customers WHERE birth_date NOT BETWEEN '1980-01-01' AND  '1990-01-01';


-- --------------------------------------------------------------------------------------------------------------------
-- LIKE operator : returns the records that match a specific string pattern ( It is case Insensitive )
-- % : Any number of charecters ( can be 0 )
-- _ : Single charecter

-- NOT LIKE operator : Negates the like condition

SELECT * FROM customers WHERE last_name LIKE '%y';	-- Ending in y
SELECT * FROM customers WHERE last_name LIKE '%w%';	-- Having w somewhre in last name
SELECT * FROM customers WHERE last_name LIKE '______';	-- Having 6 lettered last name
SELECT * FROM customers WHERE last_name LIKE '_o%';	-- Having second letteras o

SELECT * FROM customers WHERE phone NOT LIKE '%9'; -- Phone numbers not ending in 9


-- --------------------------------------------------------------------------------------------------------------------
-- REGEXP operator : can use Regular Expression to better locate strings
-- NOT REGEXP operator : Negates the regular expression condition

SELECT * FROM customers WHERE last_name REGEXP 'g.+y'; -- containing g and ending in y
SELECT * FROM customers WHERE last_name REGEXP '[aig]e'; -- having either ae/ie/ge
SELECT * FROM customers WHERE last_name REGEXP 'd[a-g]'; -- d followed by any letter from a to g
SELECT * FROM customers WHERE last_name REGEXP 'field$'; -- ending with field
SELECT * FROM customers WHERE last_name REGEXP '^d'; -- starting with d
SELECT * FROM customers WHERE last_name REGEXP 'ey$|on$'; -- end with ey or on

SELECT * FROM customers WHERE last_name NOT REGEXP 'brush|age|gay'; -- not containing either age/brush/gay


-- --------------------------------------------------------------------------------------------------------------------
-- IS NULL operator : returns records where the column specified is NULL
-- IS NOT NULL operator : returns records where the column specified is not NULL

SELECT * FROM customers WHERE phone IS NULL;
SELECT * FROM customers WHERE phone IS NOT NULL;