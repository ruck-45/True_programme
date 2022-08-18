-- Functions For Numeric Data

-- ROUND() : Round off to nearest digit
-- TRUNCATE() : Removes all Digits after the specified offset

-- FLOOR() : Nearest Whole Number Less than or Equal to
-- CEILING() : Nearest Whole Number Greater than or Equal to

-- ABS() : Returns Absolute value
-- RAND() : Returns a random float between 0 & 1


SELECT ROUND(5.7389);
SELECT ROUND(5.7389,2); -- Round can take a second parameter that specifies offset, i.e., how many digits after decimal it should round

SELECT TRUNCATE(5.7389,2);

SELECT FLOOR(5.7389);
SELECT CEILING(5.7389);
SELECT ABS(-5.7389);
SELECT RAND();
 

-- ---------------------------------------------------------------------------------------------------
-- Functions For String Data

-- Unlike other Programming Language, in MySQL, STRING INDEXING STARTS AT 1
-- If a charecter / substing is not found it Returns 0

-- LENGTH() : Returns Length of the string

-- LOWER() : Converts string to lower case
-- UPPER() : Converts string to upper case

-- LTRIM() : Trims preceding spaces / spaces at the left side of the string
-- RTRIM() : Trims leading spaces / spaces at the right side of the string
-- TRIM() : Trims spaces at both end of the string

-- LEFT() : Returns specified number of sequence of charecter from left side of the string
-- RIGHT() : Returns specified number of sequence of charecter from right side of the string
-- SUBSTRING() : Returns the substring specified by its position

-- LOCATE() : Returns the first occurance of a charecter/substring in a string

-- REPLACE() : Replaces a charecter/ substring in a string

-- CONCAT() : concats multiple strings


SELECT LENGTH('Ruckdent');

SELECT UPPER('RUCKDENT');
SELECT LOWER('RUCKDENT');

SELECT LTRIM('   RUCKDENT   ');
SELECT RTRIM('   RUCKDENT   ');
SELECT TRIM('   RUCKDENT   ');

SELECT LEFT('Kindergarten',5); -- returns 5 charecters starting from left of the string
SELECT RIGHT('Kindergarten',4); -- returns 4 charecters starting from left of the string

SELECT SUBSTRING('Kindergarten',4); -- Giving only starting point will return whole sring but stating from that point
SELECT SUBSTRING('Kindergarten',4,3); -- Giving the length next will return the substring of the length specified from the starting point

SELECT LOCATE('g','Kindergarten'); -- charecter/string we want to locate on left and the string on the right
SELECT LOCATE('der','Kindergarten'); -- In SQL indexing starts with 1
SELECT LOCATE('DeR','Kindergarten'); -- Locate does case insencitive searches
SELECT LOCATE('r','Kindergarten',7); -- we can passoffset to tell SQL to start looking from certain index
SELECT LOCATE('z','Kindergarten'); -- SQL returns 0 if the charecter/sting is not found

SELECT REPLACE('Kindergarten','garten','garden'); -- first the srting, then the substring/hsrecter to be replaced and then the desired charecter/string
SELECT REPLACE('Kindergarten','r','d'); -- replacing a charecter replaces all occurances of that charecter

SELECT CONCAT('str1','__','str2','__','str3'); -- concats multiple strings


-- Exercise
USE sql_store;

SELECT  first_name,
		last_name,
        CONCAT(first_name,'  ',last_name) AS full_name
FROM customers;

-- -----------------------------------------------------------------------------------------------------------------
-- Functions For Date & Time

-- NOW() : returns current date and time AS date-time object
-- CURDATE() : returns only current date AS date-time object
-- CURTIME() : returns only current time AS date-time object

-- YEAR() : returns Year From a date-time object as an integer
-- MONTH() : returns Month From a date-time object as an integer
-- DAY() : returns Day From a date-time object as an integer
-- HOUR() : returns Hour From a date-time object as an integer
-- MINUTE() : returns Minute From a date-time object as an integer
-- SECOND() : returns Second From a date-time object as an integer

-- DAYNAME() : returns Name of the Day From a date-time object as STRING
-- MONTHNAME() : returns Name of the Month From a date-time object as STRING

-- EXTRACT()
	-- All above functions are limited to MySQL
    -- But Extract function is standard in SQL language
    -- If we are writing a database independent code , we must use EXTRACT() function to get desired sections of a date-time object
    
    
SELECT NOW();  -- these all return date-time values
SELECT CURDATE();
SELECT CURTIME();

SELECT YEAR('2019-05-06 12:25:39'); -- these all return int values
SELECT MONTH('2019-05-06 12:25:39');
SELECT DAY('2019-05-06 12:25:39');
SELECT HOUR('2019-05-06 12:25:39');
SELECT MINUTE('2019-05-06 12:25:39');
SELECT SECOND('2019-05-06 12:25:39');

SELECT DAYNAME('2019-05-06 12:25:39');  -- these all return string values
SELECT MONTHNAME('2019-05-06 12:25:39');


SELECT EXTRACT(YEAR FROM '2019-05-06 12:25:39'); -- Used to write database independent code
SELECT EXTRACT(MONTH FROM '2019-05-06 12:25:39');
SELECT EXTRACT(DAY FROM '2019-05-06 12:25:39');
SELECT EXTRACT(HOUR FROM '2019-05-06 12:25:39');
SELECT EXTRACT(MINUTE FROM '2019-05-06 12:25:39');
SELECT EXTRACT(SECOND FROM '2019-05-06 12:25:39');

-- ---------------------------------------------------------------------------------------------
-- Formatting date and time

-- in SQL, the developer's way of handling dateand time is  : 'yyyy-mm-dd hh:mm:ss'
-- But we can make it more user friendly by using formatting

-- DATE_FORMAT() : used to format dates
	-- %y : displaying two digits for the year
	-- %Y : displaying all four digits
    
    -- %m : displaying two digits for month
    -- %M : displaying full name of the month
    
    -- %d : displaying two digits for days
    -- %D : displaying days using th

-- TIME_FORMAT() : used to format time
    -- %H : displaying two digits for hour in 24 hrs clock
    -- %h : displaying two digits for hour in 12 hrs clock
    
    -- %i : displaying two digits for minutes
    -- %s : displaying two digits for seconds
    
    -- %p : displaying AM / PM
    -- %P : displaying A/P


SELECT DATE_FORMAT(NOW(),'%y-@-%m-@-%d');
SELECT DATE_FORMAT(NOW(),'%Y^%M^%D');

SELECT TIME_FORMAT(NOW(),'%H{}%i{}%s  %P');
SELECT TIME_FORMAT(NOW(),'%h--%i--%s  %p');

-- we can do much more formatting, just search  : MySQL date Format String

-- ------------------------------------------------------------------------------------------------------
-- Operatios with date and time

-- DATE_ADD() : Add a certain interval to a date-time object
-- DATE_SUB() : Subtract a certain interval from a date-time object
	-- NOTE : if we use negetive values for interval in DATE_ADD(), it will behave as DATE_SUB() And vice versa

-- DATEDIFF() : Gives the difference between two dates
	-- NOTE :  it doesnt get affected with the time, it just concerns with the dates

-- TIME_TO_SEC() : calculates seconds passed from midnight

SELECT DATE_ADD(NOW(),INTERVAL 1 DAY);
SELECT DATE_ADD(NOW(),INTERVAL 2 MONTH);

SELECT DATE_SUB(NOW(),INTERVAL 2 YEAR);
SELECT DATE_ADD(NOW(),INTERVAL -2 YEAR); -- works same as above query

SELECT DATEDIFF('2019-01-02 01:00:00','2019-01-01 23:59:59'); -- Time doesnt affect it
SELECT DATEDIFF('2019-01-01','2020-01-02'); -- can produce negetive results

SELECT TIME_TO_SEC('00:10') -- calculates the time passed from midnight in seconds