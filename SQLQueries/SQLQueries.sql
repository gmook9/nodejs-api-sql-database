-- NOTE: NOT REQUIRED FOR THE PROJECT, just supplying the SQL that was used for the functions and view.

-- By Garret Mook
-- THIS FILE GIVES A INDEPTH VIEW OF THE SQL FUNCTIONS USED BY THE API

-- FUNCTION A

DROP FUNCTION IF EXISTS function_a;

DELIMITER //

CREATE FUNCTION function_a
(
    input_city VARCHAR(40)
)
RETURNS VARCHAR(255)
BEGIN
DECLARE var VARCHAR(255);
set var = ( SELECT username FROM profile 
WHERE current_city = input_city 
);
RETURN var;
END; //

DELIMITER ;



-- FUNCTION B

DROP FUNCTION IF EXISTS function_b;

DELIMITER //

CREATE FUNCTION function_b
(
    usersname text
)
RETURNS VARCHAR(255)
BEGIN
DECLARE var VARCHAR(255);
set var = ( SELECT student_id FROM user 
WHERE username = usersname 
);
RETURN var;
END; //

DELIMITER ;


-- QUERY FOR VIEW

CREATE OR REPLACE VIEW number_of_profiles AS
 (SELECT count(*)
 AS 'Number of profiles in system' FROM user);
 